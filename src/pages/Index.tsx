import HeroSection from "@/components/HeroSection";
import TrainerSection from "@/components/TrainerSection";
import ProgramSection from "@/components/ProgramSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PricingSection from "@/components/PricingSection";
import ReferralSection from "@/components/ReferralSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactsSection from "@/components/ContactsSection";
import LampDivider from "@/components/LampDivider";
import AuthPanel from "@/components/AuthPanel";
import { useSparkEffect } from "@/hooks/useSparkEffect";
import { supabase } from "@/lib/supabase";
import { useState, useEffect, useCallback } from "react";

const Index = () => {
  const { triggerSpark, SparkLayer } = useSparkEffect();
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ id: number; email: string; message: string; created_at: string }>>([]);

  const fetchMessages = useCallback(async () => {
    const { data, error } = await supabase
      .from("submissions")
      .select("id, email, message, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Fetch failed:", error.message);
    } else {
      setMessages(data ?? []);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleTestSubmit = async () => {
    setStatusMsg(null);
    const { error } = await supabase
      .from("submissions")
      .insert({ email: "test@test.com", message: "Button test click", created_at: new Date().toISOString() });

    if (error) {
      console.error("Insert failed:", error.message);
      setStatusMsg("Error: " + error.message);
    } else {
      console.log("Insert successful!");
      setStatusMsg("Test data sent to database successfully");
    }
  };

  return (
    <main className="bg-background min-h-screen" onClick={triggerSpark}>
      <SparkLayer />
      <AuthPanel />
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
        <button
          onClick={(e) => { e.stopPropagation(); handleTestSubmit(); }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Test Supabase
        </button>
        {statusMsg && (
          <span className="bg-black/80 text-white text-sm px-3 py-1 rounded">
            {statusMsg}
          </span>
        )}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900/95 text-white rounded-lg p-4 w-80 max-h-96 overflow-y-auto"
        >
          <h3 className="text-sm font-bold mb-2">Database Monitor</h3>
          <button
            onClick={fetchMessages}
            className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 mb-3"
          >
            Refresh Data
          </button>
          {messages.length === 0 ? (
            <p className="text-gray-400 text-xs">No messages yet</p>
          ) : (
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="py-1 pr-2">id</th>
                  <th className="py-1 pr-2">email</th>
                  <th className="py-1 pr-2">message</th>
                  <th className="py-1">created_at</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-800">
                    <td className="py-1 pr-2">{msg.id}</td>
                    <td className="py-1 pr-2 truncate max-w-[100px]">{msg.email}</td>
                    <td className="py-1 pr-2 truncate max-w-[100px]">{msg.message}</td>
                    <td className="py-1 text-gray-400">{new Date(msg.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <HeroSection />
      <LampDivider />
      <TrainerSection />
      <LampDivider />
      <ProgramSection />
      <LampDivider />
      <ArchitectureSection />
      <LampDivider />
      <PricingSection />
      <LampDivider />
      <ReferralSection />
      <LampDivider />
      <ReviewsSection />
      <LampDivider />
      <ContactsSection />
    </main>
  );
};

export default Index;
