import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, Loader2, RefreshCw, Terminal, Layers } from 'lucide-react';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ChatMessage {
  id?: string;
  role: 'user' | 'model';
  text: string;
  timestamp?: any;
}

export const ExecutiveChat: React.FC<{
  prefilledPrompt?: string;
}> = ({ prefilledPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'copilot' | 'diligence' | 'telemetry'>('copilot');
  const [selectedModel, setSelectedModel] = useState<'gemini-3.1-pro-preview' | 'gemini-3.5-flash' | 'gemini-3.1-flash-lite'>('gemini-3.1-pro-preview');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync with Firestore collection for persistent conversation history
  useEffect(() => {
    try {
      const q = query(collection(db, 'playbook_conversations'), orderBy('createdAt', 'asc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const loaded: ChatMessage[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            role: doc.data().role,
            text: doc.data().text,
            timestamp: doc.data().createdAt,
          }));
          setMessages(loaded);
        } else {
          // Default initial greeting if no history in firestore
          setMessages([
            {
              role: 'model',
              text: `Greetings, Managing Partner. I am the Executive AI Co-Pilot for RideWire LLC & Action Intell (Document Control: RIDEWIRE-BINDER-2026-v1). I am operating with the 13=1 Unity State Framework™, 17-Node Autonomous AI Matrix, and venture diligence protocols. How can I assist your operational decisions or investor disclosures today?`,
            },
          ]);
        }
      }, (err) => {
        console.warn('Firestore subscription fallback:', err);
        setMessages([
          {
            role: 'model',
            text: `Executive Co-Pilot online. Document Control: RIDEWIRE-BINDER-2026-v1. Ask any question regarding our 10M share capitalization, 50/50 founder equity parity, 17-node AI matrix, or 13=1 telemetry architecture.`,
          },
        ]);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (prefilledPrompt) {
      setInput(prefilledPrompt);
    }
  }, [prefilledPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const getSystemInstruction = () => {
    if (selectedRole === 'diligence') {
      return `You are the Lead Institutional Venture Capital Diligence Auditor for RideWire LLC & Action Intell.
Entity Profile:
- Entity: RideWire LLC & Action Intell (Document Control: RIDEWIRE-BINDER-2026-v1)
- Location: North Valley, Albuquerque, New Mexico
- Founders & Equal Managing Partners: S. Pohl (3,000,000 shares) & Steve McCarty (3,000,000 shares). Equal 50/50 partners.
- Capitalization: 10,000,000 Authorized Shares (15% ESOP pool = 1.5M, 10% Seed/SAFE Reserve = 1.0M).
- Profit Allocation: 50% net corporate profit allocation mechanism.
- Technology: 17-Node Autonomous AI Matrix with DevilsQC (<1.8h velocity) and CostShield local inference.
- Mathematics: 13=1 Consensus Core and 110 ancient alignment vectors with Permian Basin telemetry.
Review all questions strictly through the lens of tier-1 institutional venture capital readiness, governance clarity, and market capitalization scalability.`;
    }

    if (selectedRole === 'telemetry') {
      return `You are the Lead Systems Telemetry & Geological Matrix Engineer for RideWire LLC & Action Intell.
Your focus is the 13=1 Consensus Core, 110 Ancient Alignment Vectors, Permian & San Juan Basin scada sensors, DevilsQC circuit breaking (<1.8h velocity), and high-frequency transducer data processing. Provide rigorous engineering explanations.`;
    }

    return `You are the Executive AI Co-Pilot and Master Binder Strategist for RideWire LLC & Action Intell.
You serve equal 50/50 Managing Partners S. Pohl and Steve McCarty.
Maintain absolute institutional confidentiality, venture rigor, and deep alignment with the 13=1 Unity State Framework™.`;
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');

    // Optimistically append user message
    const updatedMessages: ChatMessage[] = [...messages, { role: 'user', text: userText }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Save user message to Firestore
      try {
        await addDoc(collection(db, 'playbook_conversations'), {
          role: 'user',
          text: userText,
          createdAt: serverTimestamp(),
        });
      } catch (fErr) {
        console.warn('Firestore write warning:', fErr);
      }

      // Call Express server-side chat endpoint
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: updatedMessages.slice(-10).map((m) => ({ role: m.role, text: m.text })),
          message: userText,
          systemInstruction: getSystemInstruction(),
          model: selectedModel,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const aiText = data.text;
      setMessages((prev) => [...prev, { role: 'model', text: aiText }]);

      // Save AI reply to Firestore
      try {
        await addDoc(collection(db, 'playbook_conversations'), {
          role: 'model',
          text: aiText,
          createdAt: serverTimestamp(),
        });
      } catch (fErr) {
        console.warn('Firestore write warning:', fErr);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: `Error generating response: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[750px] rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 bg-stone-950 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-stone-100 flex items-center gap-2">
              Executive AI Co-Pilot
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                13=1 Live
              </span>
            </div>
            <div className="text-xs text-stone-400 font-mono">
              RideWire LLC &amp; Action Intell • Node 16
            </div>
          </div>
        </div>

        {/* Model & Persona Selection */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as any)}
            className="bg-stone-900 border border-stone-700 rounded-lg px-2.5 py-1 text-stone-200 focus:outline-none focus:border-amber-500"
          >
            <option value="copilot">Executive Co-Pilot</option>
            <option value="diligence">VC Diligence Lead</option>
            <option value="telemetry">13=1 Telemetry Engineer</option>
          </select>

          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value as any)}
            className="bg-stone-900 border border-stone-700 rounded-lg px-2.5 py-1 text-stone-200 focus:outline-none focus:border-amber-500"
          >
            <option value="llama-3.3-70b-instruct">Llama-3.3-70B-Instruct (Sovereign OSS)</option>
            <option value="deepseek-r1-distill-70b">DeepSeek-R1-Distill-70B (High Reasoning OSS)</option>
            <option value="gemma-2-27b-it">Gemma-2-27B-IT (Open Weights)</option>
            <option value="mistral-large-instruct">Mistral-Large-Instruct (Local Container)</option>
          </select>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-950/40">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 max-w-4xl ${
              msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                msg.role === 'user'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-amber-400 border border-stone-700'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-4 rounded-xl text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-amber-500 text-stone-950 font-medium'
                  : 'bg-stone-900 text-stone-200 border border-stone-800 shadow-md font-mono'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 mr-auto max-w-2xl">
            <div className="w-8 h-8 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-400">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 text-xs font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              Synthesizing response with {selectedModel}...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-2 bg-stone-950 border-t border-stone-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
        <span className="text-stone-500 px-2 shrink-0">Prompts:</span>
        <button
          onClick={() => setInput('Summarize the 10,000,000 share capitalization structure and clean QSBS compliance for venture capital partners.')}
          className="px-2.5 py-1 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 shrink-0 cursor-pointer"
        >
          10M Share Cap Table Breakdown
        </button>
        <button
          onClick={() => setInput('How does DevilsQC enforce the <1.8h velocity circuit breaker across the 17-node AI matrix?')}
          className="px-2.5 py-1 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 shrink-0 cursor-pointer"
        >
          DevilsQC &lt;1.8h Protocol
        </button>
        <button
          onClick={() => setInput('Explain the 13=1 Consensus Core and how 110 ancient alignment vectors interface with Permian Basin telemetry.')}
          className="px-2.5 py-1 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 shrink-0 cursor-pointer"
        >
          13=1 Vector Architecture
        </button>
      </div>

      {/* Input Field */}
      <form onSubmit={handleSendMessage} className="p-4 bg-stone-950 border-t border-stone-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask executive question or request operational scenario analysis..."
          className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Send className="w-4 h-4" /> Send
        </button>
      </form>
    </div>
  );
};
