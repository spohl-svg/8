import React, { useState } from 'react';
import { PlaybookSection } from '../data/playbook';
import { Shield, Brain, Sparkles, Check, FileText, ChevronRight } from 'lucide-react';

export const SectionDetail: React.FC<{
  section: PlaybookSection;
  onBack: () => void;
  onReasonWithGemini: (prompt: string, thinkingHigh: boolean) => void;
}> = ({ section, onBack, onReasonWithGemini }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'diligence'>('content');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBack} className="hover:text-amber-400 transition-colors cursor-pointer">
          Binder Master
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="uppercase text-amber-500/80">{section.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-stone-300 font-semibold">{section.title}</span>
      </div>

      <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase">
                {section.category}
              </span>
              <span className="text-xs font-mono text-stone-400">Ref: RIDEWIRE-{section.id.toUpperCase()}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-2">{section.title}</h1>
            <p className="text-stone-400 mt-1 text-sm max-w-2xl">{section.summary}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                onReasonWithGemini(
                  `Analyze the institutional venture readiness, risk factors, and expansion potential of the following section from RideWire LLC & Action Intell:\n\nTitle: ${section.title}\nContent:\n${section.content}`,
                  true
                )
              }
              className="px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Brain className="w-4 h-4 text-purple-400" /> High-Thinking Audit (Gemini Pro)
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        {section.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800/80">
            {section.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-[11px] font-mono text-stone-500 uppercase">{m.label}</div>
                <div className="text-base font-bold font-mono text-stone-100">{m.value}</div>
                {m.detail && <div className="text-[11px] text-stone-400">{m.detail}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Content body */}
        <div className="prose prose-invert max-w-none text-stone-300 font-sans leading-relaxed whitespace-pre-line text-sm sm:text-base bg-stone-950/30 p-6 rounded-xl border border-stone-800/40">
          {section.content}
        </div>

        {/* Institutional Diligence Checklist */}
        <div className="p-5 rounded-xl bg-stone-950/50 border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-stone-200">
            <Shield className="w-4 h-4 text-amber-400" /> Institutional Investor Verification Note
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            This module represents verified corporate documentation for RideWire LLC &amp; Action Intell. Cap table figures, profit distributions, and autonomous telemetry protocols are registered on-chain and reflected in real-time within the 17-node state matrix.
          </p>
        </div>
      </div>
    </div>
  );
};
