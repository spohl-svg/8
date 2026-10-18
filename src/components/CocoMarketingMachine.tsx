import React, { useState } from 'react';
import { Sparkles, Zap, Flame, RefreshCw, Layers, CheckCircle2, TrendingUp, Calendar, AlertTriangle, ArrowRight, Loader2, Video, Play } from 'lucide-react';
import { MarketingCampaign18, INITIAL_MARKETING_CALENDAR } from '../data/captainLogs';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';
import { CocoVideoPopupViewer } from './CocoVideoPopupViewer';

export const CocoMarketingMachine: React.FC = () => {
  const [calendar, setCalendar] = useState<MarketingCampaign18[]>(INITIAL_MARKETING_CALENDAR);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [isSelfHealing, setIsSelfHealing] = useState<boolean>(false);
  const [selfHealingLog, setSelfHealingLog] = useState<string[]>([]);
  const [currentCadenceMode, setCurrentCadenceMode] = useState<'1.8h' | '24h'>('1.8h');
  const [isVideosPopupOpen, setIsVideosPopupOpen] = useState<boolean>(false);

  const selectedCampaign = calendar[activeCycleIndex] || calendar[0];

  // Trigger COCO Self-Healing Autonomous Rewrite Loop
  const handleTriggerSelfHealing = async () => {
    setIsSelfHealing(true);
    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are COCO Node (Node-02: Autonomous Self-Healing Marketing Machine) for RideWire LLC & Action Intell.
Current Campaign Headline: "${selectedCampaign.headline18}"
Current Channel: ${selectedCampaign.tacticalChannel}
Target Velocity: 1.8 Hours (vs. 24 Hours Legacy)

Perform an autonomous self-healing rewrite:
1. Detect underperforming engagement vectors or weak Permian technical hooks.
2. Sharpen the contrast between RideWire 1.8h telemetry velocity vs legacy 24h batch sluggishness.
3. Incorporate the 13=1 Unity State Framework and 110 Alignment Vectors.

Respond in strict JSON with fields:
{
  "rewrittenHeadline": "...",
  "rewrittenNarrative": "...",
  "selfHealingExplanation": "...",
  "optimizationImpact": "..."
}`,
          model: 'gemini-3.5-flash',
          systemInstruction: 'Return JSON only.',
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const cleanJson = data.text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);

      const updated = [...calendar];
      updated[activeCycleIndex] = {
        ...selectedCampaign,
        headline18: parsed.rewrittenHeadline || selectedCampaign.headline18,
        narrative18h: parsed.rewrittenNarrative || selectedCampaign.narrative18h,
        selfHealingTrigger: `COCO Auto-Optimized: ${parsed.selfHealingExplanation || 'Refactored for maximum Permian operator engagement'}`,
      };

      setCalendar(updated);
      setSelfHealingLog((prev) => [
        `[${new Date().toLocaleTimeString()}] COCO Loop: ${parsed.optimizationImpact || 'Restructured copy to emphasize 1.8h velocity advantage.'}`,
        ...prev,
      ]);
    } catch (err: any) {
      alert(`COCO Self-Healing error: ${err.message}`);
    } finally {
      setIsSelfHealing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* COCO Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30">
              NODE-02: COCO MACHINE
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> SELF-HEALING ENGINE ACTIVE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            COCO Self-Healing Marketing Engine &amp; 1.8h vs 24h Command
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Autonomous marketing machine designed to execute on-the-go campaigns at 1.8h sprint velocity, continuously self-healing copy and attacking 24-hour legacy inertia.
          </p>
        </div>

        {/* 1.8h vs 24h Velocity Toggle, Video Popup Trigger & Voice Narrator */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsVideosPopupOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-stone-950 font-black text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 animate-pulse"
          >
            <Video className="w-4 h-4 text-stone-950" /> Watch All COCO Videos (Popup)
          </button>

          <ScreenVoiceNarrator
            screenTitle="COCO Self-Healing Marketing Engine"
            narrativeText="COCO Node online. Running autonomous self-healing marketing machine at 1.8-hour execution velocity. We do not wait 24 hours for copy approval. COCO tests, heals, and launches campaigns in 108-minute sprint cycles."
            defaultVoice="Puck"
          />

          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setCurrentCadenceMode('1.8h')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currentCadenceMode === '1.8h'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              1.8h RideWire Velocity
            </button>
            <button
              onClick={() => setCurrentCadenceMode('24h')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                currentCadenceMode === '24h'
                  ? 'bg-stone-700 text-stone-200 font-bold'
                  : 'text-stone-500 hover:text-stone-400'
              }`}
            >
              24h Legacy Standard
            </button>
          </div>
        </div>
      </div>

      {/* Velocity Benchmark Contrast Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              RideWire 1.8h Execution Engine
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              13.3x Velocity
            </span>
          </div>
          <div className="text-2xl font-black font-mono text-stone-100">1.8 Hours (108 Minutes)</div>
          <p className="text-xs text-stone-300 leading-relaxed font-sans">
            Continuous telemetry ingestion from the Permian basin triggers COCO marketing campaigns and DevilsQC audits within 108 minutes. Copy auto-adapts to daily geological events before legacy competitors even open email.
          </p>
          <div className="pt-2 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Self-healing cycle auto-evaluates every 1.8 hours
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900/40 border border-stone-800 space-y-3 opacity-80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-stone-500 font-bold uppercase tracking-wider">
              Legacy Industrial 24-Hour Cycle
            </span>
            <span className="text-xs font-mono text-rose-400">Sluggish / Lagging</span>
          </div>
          <div className="text-2xl font-black font-mono text-stone-400">24.0 Hours (1,440 Minutes)</div>
          <p className="text-xs text-stone-400 leading-relaxed font-sans">
            Conventional energy consulting and software firms rely on overnight batch processing, manual copywriters, and 3-week approval chains. By the time their market memo lands, the reservoir dynamics have completely changed.
          </p>
          <div className="pt-2 text-[11px] font-mono text-stone-500 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" /> 1,332 minutes of lost tactical advantage
          </div>
        </div>
      </div>

      {/* Month of Marketing Calendar & Campaign Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar days timeline */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center justify-between">
            <span>Marketing Month Calendar</span>
            <span className="text-rose-400 font-bold">COCO Active</span>
          </div>

          <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {calendar.map((c, idx) => (
              <div
                key={c.day}
                onClick={() => setActiveCycleIndex(idx)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeCycleIndex === idx
                    ? 'bg-rose-950/30 border-rose-500/50 shadow-md'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-amber-400 font-bold">{c.cycle18hSlot}</span>
                  <span className="text-stone-500">{c.dateStr}</span>
                </div>
                <h4 className="text-sm font-bold text-stone-200 line-clamp-1">{c.headline18}</h4>
                <div className="text-xs text-stone-400 mt-1 flex items-center justify-between">
                  <span className="px-1.5 py-0.5 rounded bg-stone-800 text-[10px] font-mono text-stone-300">
                    {c.tacticalChannel}
                  </span>
                  <span className="text-emerald-400 text-[11px] font-mono">{c.metricsTarget.split('•')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Campaign Dispatch Details */}
        <div className="lg:col-span-8 space-y-5">
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30">
                    {selectedCampaign.tacticalChannel}
                  </span>
                  <span className="text-xs font-mono text-amber-400">{selectedCampaign.cycle18hSlot}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-2">{selectedCampaign.headline18}</h2>
                <div className="text-xs font-mono text-stone-400 mt-1">
                  Campaign Focus: <span className="text-stone-200">{selectedCampaign.focusTheme}</span>
                </div>
              </div>

              {/* Trigger Self-Healing Button */}
              <button
                onClick={handleTriggerSelfHealing}
                disabled={isSelfHealing}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20 disabled:opacity-50"
              >
                {isSelfHealing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Self-Healing Active...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" /> Trigger COCO Self-Healing Rewrite
                  </>
                )}
              </button>
            </div>

            {/* Campaign Narrative */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                1.8h High-Velocity Campaign Copy
              </div>
              <div className="p-5 rounded-xl bg-stone-950/70 border border-stone-800 text-stone-300 text-sm leading-relaxed whitespace-pre-line font-sans">
                {selectedCampaign.narrative18h}
              </div>
            </div>

            {/* Contrast vs 24h Legacy */}
            <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 text-xs font-mono space-y-1">
              <div className="text-stone-400 font-bold uppercase">Legacy 24-Hour Comparison:</div>
              <div className="text-stone-300 font-sans">{selectedCampaign.legacy24hContrast}</div>
            </div>

            {/* Self-Healing Trigger Protocol */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-mono">
                <div className="font-bold text-rose-300">COCO Self-Healing Autonomous Trigger</div>
                <div className="text-stone-300 leading-relaxed font-sans">{selectedCampaign.selfHealingTrigger}</div>
                <div className="text-[11px] text-amber-400/90 pt-1">Target Yield: {selectedCampaign.metricsTarget}</div>
              </div>
            </div>

            {/* Real-time self-healing logs */}
            {selfHealingLog.length > 0 && (
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="text-xs font-mono text-stone-400 font-bold uppercase">COCO Autonomous Audit Trail:</div>
                {selfHealingLog.map((log, idx) => (
                  <div key={idx} className="text-[11px] font-mono text-emerald-400 leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Small Popup Modal Viewer for All COCO Videos */}
      <CocoVideoPopupViewer
        isOpen={isVideosPopupOpen}
        onClose={() => setIsVideosPopupOpen(false)}
      />
    </div>
  );
};
