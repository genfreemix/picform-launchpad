import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

const AuthPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (isRegister) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Регистрация успешна! Проверьте почту для подтверждения.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Вход выполнен!");
        setIsOpen(false);
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setStatus(null);
  };

  if (user) {
    return (
      <div
        className="fixed top-4 left-4 z-50 flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="bg-gray-900/90 text-white text-sm px-3 py-2 rounded-lg">
          {user.email}
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-red-700"
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed top-4 left-4 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg"
        >
          Войти / Регистрация
        </button>
      ) : (
        <div className="bg-gray-900/95 text-white rounded-lg p-5 w-72 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm">
              {isRegister ? "Регистрация" : "Вход"}
            </h3>
            <button
              onClick={() => { setIsOpen(false); setStatus(null); }}
              className="text-gray-400 hover:text-white text-lg leading-none"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded text-sm font-semibold hover:bg-blue-700"
            >
              {isRegister ? "Зарегистрироваться" : "Войти"}
            </button>
          </form>

          {status && (
            <p className="mt-3 text-xs text-yellow-300">{status}</p>
          )}

          <button
            onClick={() => { setIsRegister(!isRegister); setStatus(null); }}
            className="mt-3 text-xs text-gray-400 hover:text-white underline"
          >
            {isRegister ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPanel;
