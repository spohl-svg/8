import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Zap,
  Clock,
  Layers,
  Wrench,
  Shield,
  Download,
  Share2,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Maximize2,
  Info
} from 'lucide-react';
import { PINUP_WAR_TO_AI_POSTERS, PinUpPoster } from '../data/pinupPosters';
import { AuctionAwardArtAnalysis } from './AuctionAwardArtAnalysis';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const PinUpPostersGallery: React.FC = () => {
  const [posters] = useState<PinUpPoster[]>(PINUP_WAR_TO_AI_POSTERS);
  const [selectedEra, setSelectedEra] = useState<string>('ALL');
  const [activePoster, setActivePoster] = useState<PinUpPoster>(posters[0]);
  const [isFullView, setIsFullView] = useState<boolean>(false);
  const [mainDisplayMode, setMainDisplayMode] = useState<'archive' | 'auction'>('archive');

  // Credit Burn Plan Countdown / Metrics
  const daysRemainingInMonth = 2; // End of September horizon
  const freeCreditsRemaining = '100% Free Tier Ready';

  const filtered = selectedEra === 'ALL'
    ? posters
    : posters.filter((p) => p.era === selectedEra);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30 font-bold flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-rose-400" /> WRENCHIES MORALE &amp; ART ARCHIVE
            </span>
            <span className="text-xs font-mono text-stone-500">WWII NOSE ART • RETRO 70s • AI SOVEREIGN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-100 mt-1">
            Pin-Up Posters: War Times, Wrenchies &amp; AI Sovereign Era
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm max-w-3xl mt-1">
            Historical morale art honoring field mechanics, rig floor &quot;Wrenchies&quot;, and 2026 AI Sovereign operators. Includes the tactical plan to run and exhaust all free compute credits before monthly reset.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ScreenVoiceNarrator
            screenTitle="Pin-Up Posters: Wartime to AI Sovereign Era"
            narrativeText="Wrenchies morale archive online. Tracing classic World War Two aviation nose art and Permian oilfield mechanic pin-ups up to modern AI sovereign posters. Notice the end-of-month credit burn directive to maximize all free compute tokens before quota reset."
            defaultVoice="Fenrir"
          />

          {/* End of Month Credit Burn Plan Chip */}
          <div className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-950/60 to-rose-950/60 border border-amber-500/40 text-xs font-mono flex items-center gap-2 shadow-lg">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <div>
              <div className="font-bold text-amber-300">Month-End Credit Sprint</div>
              <div className="text-[10px] text-amber-400/80">Burn all free credits before renewal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Maximization Plan Alert Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-950/30 via-stone-900 to-stone-900 border border-amber-500/40 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400" /> Credit Burn Action Plan: Maximize Compute Before Month-End Reset
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
            NO TOKENS LEFT ON THE TABLE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono text-stone-300">
          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
            <div className="text-amber-400 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 1. Run 100% Free Quotas Daily
            </div>
            <p className="text-[11px] text-stone-400 mt-1 font-sans">
              Free API quotas and token limits refresh every month. Run full batch telemetry synthesis, Black Book parsing, and 1.8h marketing generation so nothing is wasted before the reset.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
            <div className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> 2. Generate 4K Geological Prints
            </div>
            <p className="text-[11px] text-stone-400 mt-1 font-sans">
              Utilize image and video credits for 4K seismic visualizations and custom Wrenchie morale posters to populate partner binders for S. Pohl and Steve McCarty.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> 3. Sovereign OSS Fallback Ready
            </div>
            <p className="text-[11px] text-stone-400 mt-1 font-sans">
              When external cloud quotas reach 100%, CostShield instantly shifts all load to self-hosted open-source model weights (Llama 3.3, Gemma 2, Mistral) with zero downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section Mode Switcher: Morale Archive vs Auction & AI Formula */}
      <div className="flex items-center gap-3 p-1.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono">
        <button
          onClick={() => setMainDisplayMode('archive')}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
            mainDisplayMode === 'archive'
              ? 'bg-rose-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Wrench className="w-4 h-4" /> Wrenchies Morale Pin-Up Archive (WWII to AI Time)
        </button>

        <button
          onClick={() => setMainDisplayMode('auction')}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
            mainDisplayMode === 'auction'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Sparkles className="w-4 h-4" /> Highest Auction Value ($1.2M) &amp; Award-Winning AI Formula
        </button>
      </div>

      {/* Main Content Area: Either Morale Archive OR Auction & AI Formula */}
      {mainDisplayMode === 'auction' ? (
        <AuctionAwardArtAnalysis />
      ) : (
        <>
          {/* Era Filter Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-800 text-xs font-mono">
            <span className="text-stone-500 mr-1 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Filter Era:
            </span>
            {['ALL', 'WWII Morale Era', 'Atomic & Cold War Era', 'Retro Wrenchies Field Era', 'AI Sovereign Time'].map((era) => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedEra === era
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                }`}
              >
                {era}
              </button>
            ))}
          </div>

          {/* Main Showcase & Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Spotlight Featured Poster */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-stone-900 border border-amber-500/40 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
                  {activePoster.era}
                </span>
                <span className="text-stone-400">{activePoster.timeframe}</span>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black border border-stone-800 shadow-2xl group">
                <img
                  src={activePoster.imageUrl}
                  alt={activePoster.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90" />
                <div className="absolute bottom-3 inset-x-3 text-xs font-mono space-y-1">
                  <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                    {activePoster.wrenchieTheme}
                  </div>
                  <div className="text-stone-100 font-bold text-sm leading-snug">
                    {activePoster.tagline}
                  </div>
                  <div className="text-[10px] text-stone-400">
                    Vector: <span className="text-cyan-300">{activePoster.telemetryVector}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <h3 className="text-base font-bold text-stone-100">{activePoster.title}</h3>
                <p className="text-stone-400 font-sans text-xs leading-relaxed">
                  {activePoster.description}
                </p>
                <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
                  <span>Art Style: <span className="text-stone-200">{activePoster.artStyle}</span></span>
                  <span className="text-amber-400 font-bold">Document Control Binder Certified</span>
                </div>
              </div>
            </div>

            {/* Poster Collection Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setActivePoster(poster)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    activePoster.id === poster.id
                      ? 'bg-amber-950/30 border-amber-500/60 ring-2 ring-amber-500/20'
                      : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-amber-400 font-bold">{poster.timeframe}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">
                        {poster.era}
                      </span>
                    </div>

                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black border border-stone-800">
                      <img
                        src={poster.imageUrl}
                        alt={poster.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="text-xs font-bold text-stone-100 line-clamp-1">{poster.title}</h4>
                    <p className="text-[11px] text-stone-400 font-sans line-clamp-2">{poster.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                    <span className="truncate">{poster.wrenchieTheme}</span>
                    <span className="text-amber-400 font-bold ml-2">VIEW &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
