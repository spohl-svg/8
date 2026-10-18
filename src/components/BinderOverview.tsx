import React from 'react';
import { ShieldCheck, Database, Award, ArrowUpRight, CheckCircle2, DollarSign, PieChart, Lock } from 'lucide-react';
import { PLAYBOOK_SECTIONS } from '../data/playbook';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const BinderOverview: React.FC<{
  onSelectSection: (id: string) => void;
  onOpenChat: () => void;
}> = ({ onSelectSection, onOpenChat }) => {
  return (
    <div className="space-y-8">
      {/* Voice Narrator Bar */}
      <div className="flex justify-end">
        <ScreenVoiceNarrator
          screenTitle="Master Business Binder Overview"
          narrativeText="Welcome to the Master Business Binder for RideWire LLC and Action Intell. Founded on the 13=1 Unity State Framework, we democratize natural resource and industrial telemetry across the Permian and San Juan basins under Document Control RIDEWIRE-BINDER-2026-v1."
          defaultVoice="Zephyr"
        />
      </div>

      {/* Hero Banner with Executive Classification */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-stone-900 to-amber-950 p-8 text-white border border-amber-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <div className="text-9xl font-mono font-black tracking-tighter">13=1</div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-amber-400">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-amber-400" /> Control: RIDEWIRE-BINDER-2026-v1
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3" /> Venture Capital Ready
            </span>
            <span className="text-stone-400">Albuquerque, New Mexico</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-stone-100">
            RideWire LLC & Action Intell
          </h1>
          <p className="text-lg text-amber-100/80 font-serif italic max-w-3xl leading-relaxed">
            "To democratize natural resource and industrial intelligence by making public geological, environmental, and mechanical telemetry accessible, unified, and actionable through AI-orchestrated analysis."
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectSection('equity-cap-table')}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <PieChart className="w-4 h-4" /> View 10M Cap Table
            </button>
            <button
              onClick={() => onSelectSection('ai-matrix')}
              className="px-5 py-2.5 rounded-lg bg-stone-800/80 hover:bg-stone-700/80 text-stone-200 border border-stone-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Database className="w-4 h-4 text-cyan-400" /> 17-Node AI Matrix
            </button>
            <button
              onClick={onOpenChat}
              className="px-5 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              Launch Executive AI Strategist
            </button>
          </div>
        </div>
      </div>

      {/* Core Institutional Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
            <span>FOUNDER PARITY</span>
            <span className="text-emerald-400 font-bold">50 / 50</span>
          </div>
          <div className="text-2xl font-bold text-stone-100 font-mono">6,000,000</div>
          <div className="text-xs text-stone-400 mt-1">S. Pohl (3M) & Steve McCarty (3M) equal partners</div>
        </div>

        <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
            <span>AUTHORIZED SHARES</span>
            <span className="text-amber-400 font-bold">QSBS READY</span>
          </div>
          <div className="text-2xl font-bold text-stone-100 font-mono">10,000,000</div>
          <div className="text-xs text-stone-400 mt-1">15% ESOP pool (1.5M) + 10% SAFE reserve (1.0M)</div>
        </div>

        <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
            <span>DEVILSQC VELOCITY</span>
            <span className="text-cyan-400 font-bold">&lt; 1.8h</span>
          </div>
          <div className="text-2xl font-bold text-cyan-400 font-mono">17 Nodes</div>
          <div className="text-xs text-stone-400 mt-1">CostShield local inference &amp; rapid circuit breaking</div>
        </div>

        <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
            <span>MATHEMATICAL CORE</span>
            <span className="text-amber-400 font-bold">13 = 1</span>
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">110 Vectors</div>
          <div className="text-xs text-stone-400 mt-1">Ancient alignment vectors &amp; Permian scada telemetry</div>
        </div>
      </div>

      {/* Structured Sections Table / Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-100 tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" /> Master Binder Articles &amp; Operational Charters
          </h2>
          <span className="text-xs font-mono text-stone-400">Institutional Diligence Grade</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLAYBOOK_SECTIONS.map((sec) => (
            <div
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className="group p-6 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-900/80 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                    {sec.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-stone-200 group-hover:text-amber-300 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed line-clamp-3">
                  {sec.summary}
                </p>
              </div>

              {sec.metrics && (
                <div className="mt-5 pt-4 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-xs">
                  {sec.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-stone-500 font-mono">{m.label}</div>
                      <div className="text-stone-200 font-semibold font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
