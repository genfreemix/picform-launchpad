import { useEffect, useRef } from "react";

const LampDivider = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const LAMP_COUNT = 5;
    const CYCLE_DURATION = 6000; // ms full cycle
    const SPARK_COUNT = 12;

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const sparks: Spark[] = [];

    const emitSparks = (x: number, y: number, intensity: number) => {
      const count = Math.floor(SPARK_COUNT * intensity);
      for (let i = 0; i < count; i++) {
        sparks.push({
          x,
          y: y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 1.5 - 0.5,
          life: 1,
          maxLife: 0.4 + Math.random() * 0.6,
          size: 1 + Math.random() * 2,
        });
      }
    };

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const phase = (time % CYCLE_DURATION) / CYCLE_DURATION;

      // Intensity curve: 0→1 (ignite) → hold → 1→0 (fade)
      let intensity: number;
      if (phase < 0.3) {
        intensity = phase / 0.3; // ramp up
      } else if (phase < 0.55) {
        intensity = 1; // hold
      } else if (phase < 0.85) {
        intensity = 1 - (phase - 0.55) / 0.3; // fade
      } else {
        intensity = 0; // dark pause
      }

      const spacing = w / (LAMP_COUNT + 1);

      for (let i = 0; i < LAMP_COUNT; i++) {
        // Stagger each lamp slightly
        const lampDelay = i * 0.06;
        const localPhase = ((time - lampDelay * CYCLE_DURATION) % CYCLE_DURATION) / CYCLE_DURATION;
        let localIntensity: number;
        if (localPhase < 0.3) {
          localIntensity = localPhase / 0.3;
        } else if (localPhase < 0.55) {
          localIntensity = 1;
        } else if (localPhase < 0.85) {
          localIntensity = 1 - (localPhase - 0.55) / 0.3;
        } else {
          localIntensity = 0;
        }

        const x = spacing * (i + 1);
        const lampH = h * 0.8;
        const lampY = h * 0.1;

        // Flicker
        const flicker = localIntensity > 0.1 ? 1 - Math.random() * 0.15 : 1;
        const alpha = localIntensity * flicker;

        if (alpha < 0.01) continue;

        // Outer glow
        const glowGrad = ctx.createRadialGradient(x, h / 2, 0, x, h / 2, 60 * alpha);
        glowGrad.addColorStop(0, `hsla(0, 80%, 50%, ${0.25 * alpha})`);
        glowGrad.addColorStop(0.5, `hsla(10, 90%, 45%, ${0.1 * alpha})`);
        glowGrad.addColorStop(1, `hsla(0, 80%, 50%, 0)`);
        ctx.fillStyle = glowGrad;
        ctx.fillRect(x - 60, lampY - 20, 120, lampH + 40);

        // Lamp tube (vertical line with glow)
        const tubeGrad = ctx.createLinearGradient(x, lampY, x, lampY + lampH);
        tubeGrad.addColorStop(0, `hsla(0, 80%, 55%, ${0.1 * alpha})`);
        tubeGrad.addColorStop(0.3, `hsla(0, 85%, 55%, ${0.9 * alpha})`);
        tubeGrad.addColorStop(0.7, `hsla(10, 90%, 50%, ${0.9 * alpha})`);
        tubeGrad.addColorStop(1, `hsla(0, 80%, 55%, ${0.1 * alpha})`);

        ctx.strokeStyle = tubeGrad;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x, lampY);
        ctx.lineTo(x, lampY + lampH);
        ctx.stroke();

        // Inner bright core
        const coreGrad = ctx.createLinearGradient(x, lampY, x, lampY + lampH);
        coreGrad.addColorStop(0, `hsla(0, 100%, 80%, ${0 * alpha})`);
        coreGrad.addColorStop(0.3, `hsla(0, 100%, 85%, ${0.7 * alpha})`);
        coreGrad.addColorStop(0.7, `hsla(15, 100%, 80%, ${0.7 * alpha})`);
        coreGrad.addColorStop(1, `hsla(0, 100%, 80%, ${0 * alpha})`);

        ctx.strokeStyle = coreGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, lampY);
        ctx.lineTo(x, lampY + lampH);
        ctx.stroke();

        // Emit sparks at peak
        if (localIntensity > 0.7 && Math.random() < 0.15) {
          emitSparks(x, lampY + Math.random() * lampH, localIntensity);
        }
      }

      // Update & draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.02; // gravity
        s.life -= 0.02 / s.maxLife;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(10, 100%, 65%, ${s.life * 0.8})`;
        ctx.fill();

        // Spark glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 80%, 50%, ${s.life * 0.15})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-16 md:h-20 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default LampDivider;
