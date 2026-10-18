import React, { useState } from 'react';
import {
  Trophy,
  DollarSign,
  Sparkles,
  Flame,
  Brain,
  Layers,
  Wrench,
  Shield,
  Eye,
  CheckCircle2,
  Copy,
  Check,
  TrendingUp,
  History,
  Lightbulb,
  ExternalLink,
  GraduationCap,
  Hammer,
  Palette,
  Compass,
  Star
} from 'lucide-react';
import {
  MOST_EXPENSIVE_POSTERS_DATA,
  AWARD_WINNING_AI_RULES,
  RecordAuctionPoster,
  AwardWinningAiRule
} from '../data/auctionPosters';
import {
  DEBUT_ART_SCHOOLS,
  DebutArtSchoolDoctrine
} from '../data/debutArtSchools';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const AuctionAwardArtAnalysis: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<RecordAuctionPoster>(MOST_EXPENSIVE_POSTERS_DATA[0]);
  const [selectedSchool, setSelectedSchool] = useState<DebutArtSchoolDoctrine>(DEBUT_ART_SCHOOLS[0]);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'debut-schools' | 'auction' | 'rules' | 'generator'>('debut-schools');

  // Generator simulation prompt builder
  const [selectedArchetype, setSelectedArchetype] = useState<string>('Vkhutemas Constructivist Steel ($1.2M Record Impact)');
  const [selectedPalette, setSelectedPalette] = useState<string>('Permian Red Ochre, Graphite Steel, Transducer Amber');
  const [customBrandHook, setCustomBrandHook] = useState<string>('RideWire 13=1 Telemetry & Permian Basin Wrenchies');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const handleBuildPrompt = () => {
    const prompt = `Museum-grade debut industrial poster in the iconic art school lineage of ${selectedArchetype}. Dynamic constructivist 22-degree diagonal tension. Subject: ${customBrandHook}, featuring an oilfield mechanic "Wrenchie" in authentic canvas workwear holding a steel pneumatic torque wrench, heroic low-angle forced perspective under Permian basin sky. Palette: strict tri-chromatic ${selectedPalette} with 40% obsidian negative space and heavy zinc lithograph paper grain. Ultra-high emotional resonance, piercing defiant gaze, zero artificial airbrushed smoothness, authentic 1920s-1940s offset print texture.`;
    setGeneratedPrompt(prompt);
  };

  const handleCopyPrompt = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> ART SCHOOLS OF DEBUT &amp; RECORD AUCTION SCIENCE
            </span>
            <span className="text-xs font-mono text-stone-500">WHAT MAKES RIDEWIRE &quot;MOST WANTED&quot; AT LAUNCH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-100 mt-1">
            Art Schools of Debut: The Aesthetic Formula That Makes Us &quot;Most Wanted&quot;
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm max-w-3xl mt-1">
            Studying the 3 historic design movements (Vkhutemas Constructivism, Bauhaus Precision, and WWII Morale Guilds) that created the most coveted, iconic debuts in modern history — perfectly adapted for RideWire roughnecks and institutional energy investors.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ScreenVoiceNarrator
            screenTitle="Art Schools of Debut and What Makes RideWire Most Wanted"
            narrativeText="Art school analysis online. To make RideWire the most wanted debut in the energy sector, we reject delicate decorative fluff and draw from three legendary movements: the Vkhutemas steel school for raw physical power, the Bauhaus grid for mathematical precision, and the nineteen forties Wrenchie morale school for blue-collar solidarity."
            defaultVoice="Fenrir"
          />
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-800 text-xs font-mono">
        <button
          onClick={() => setActiveTab('debut-schools')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'debut-schools'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <GraduationCap className="w-4 h-4" /> The 3 Art Schools: Why They Make Us &quot;Most Wanted&quot;
        </button>

        <button
          onClick={() => setActiveTab('auction')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'auction'
              ? 'bg-emerald-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <DollarSign className="w-4 h-4" /> Record Auction Posters ($300K - $1.2M)
        </button>

        <button
          onClick={() => setActiveTab('rules')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'rules'
              ? 'bg-purple-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Brain className="w-4 h-4" /> 5 Rules: How AI Achieves It Every Time
        </button>

        <button
          onClick={() => setActiveTab('generator')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'generator'
              ? 'bg-rose-600 text-white font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Sparkles className="w-4 h-4" /> Award-Winning Prompt Engine
        </button>
      </div>

      {/* TAB 0: THE 3 ART SCHOOLS OF DEBUT (WHAT MAKES US "MOST WANTED") */}
      {activeTab === 'debut-schools' && (
        <div className="space-y-6">
          {/* Executive Thesis Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" /> THE DEBUT DOCTRINE: WHY SOFT ART FAILS &amp; STEEL CREATES ADOPTION
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                CULTURAL PRIMING
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              When a new deep-tech company debuts, generic stock photos or delicate pastel graphics signal amateurism. To be <strong>&quot;Most Wanted&quot;</strong>, RideWire must command the room instantly. We apply the visual genetics of the three most influential art schools in human industrial history:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* School Selector & Detailed Dossier */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-stone-400">SELECT HISTORIC SCHOOL OF DEBUT:</div>
              <div className="space-y-2.5">
                {DEBUT_ART_SCHOOLS.map((school) => (
                  <div
                    key={school.id}
                    onClick={() => setSelectedSchool(school)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      selectedSchool.id === school.id
                        ? 'bg-amber-950/40 border-amber-500/60 ring-2 ring-amber-500/20'
                        : 'bg-stone-900/60 border-stone-800 hover:bg-stone-900 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-400 font-bold">{school.schoolName}</span>
                      <span className="text-[10px] text-stone-400">{school.historicDebutYear}</span>
                    </div>

                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {school.historicImpact}
                    </p>

                    <div className="pt-2 border-t border-stone-800 text-[11px] font-mono flex items-center justify-between text-cyan-300">
                      <span>Debut Formula: <strong className="text-stone-100">MOST WANTED FACTOR</strong></span>
                      <span className="text-amber-400 font-bold">EXPLORE &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected School: Why It Makes Us Most Wanted & Ready-to-Print Concepts */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-stone-900 border border-amber-500/40 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                  {selectedSchool.schoolName}
                </span>
                <span className="text-stone-400">{selectedSchool.historicDebutYear}</span>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="text-rose-400 font-bold text-xs font-mono uppercase flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-400" /> Why This Makes RideWire &quot;Most Wanted&quot; on Debut:
                </div>
                <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                  {selectedSchool.whyItMakesUsMostWanted}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="text-cyan-400 font-bold text-xs font-mono uppercase flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-cyan-400" /> Visual Codes for RideWire Rigs &amp; SCADA:
                </div>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {selectedSchool.visualCodesForRideWire}
                </p>
              </div>

              {/* Ready-to-Run Debut Poster Prompts */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Debut Poster Blueprints for AI Media:
                </div>

                {selectedSchool.debutPosterConcepts.map((concept, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-100 font-bold text-xs">{concept.title}</span>
                      <button
                        onClick={() => handleCopyPrompt(concept.compositionPrompt, `${selectedSchool.id}-${idx}`)}
                        className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 flex items-center gap-1 text-[10px] font-bold cursor-pointer"
                      >
                        {copiedPromptId === `${selectedSchool.id}-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        Copy Prompt
                      </button>
                    </div>

                    <div className="text-amber-400 text-[11px] font-semibold">{concept.tagline}</div>
                    <div className="text-stone-400 text-[10px] font-sans">{concept.hook}</div>
                    <div className="p-2 rounded bg-stone-900 border border-stone-800 text-[10px] text-stone-300 font-mono">
                      <strong>AI Master Prompt: </strong>{concept.compositionPrompt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: HISTORIC AUCTION RECORDS */}
      {activeTab === 'auction' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Spotlight Selected Record Poster */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-stone-900 border border-amber-500/40 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                AUCTION RECORD: {selectedPoster.auctionHammerPrice}
              </span>
              <span className="text-stone-400">{selectedPoster.year} • {selectedPoster.category}</span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black border border-stone-800 shadow-2xl">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-85" />
              <div className="absolute bottom-3 inset-x-4 text-xs font-mono">
                <div className="text-amber-400 font-bold text-base leading-tight">
                  {selectedPoster.title}
                </div>
                <div className="text-stone-400 text-[11px] mt-0.5">
                  Artist/Designer: <span className="text-stone-200 font-semibold">{selectedPoster.artistOrDesigner}</span>
                </div>
              </div>
            </div>

            {/* Deep Psychological & Brand Breakdown */}
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-rose-400 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                  <Eye className="w-3.5 h-3.5" /> Human Emotional Reaction &amp; Psychological Hook
                </div>
                <p className="text-stone-300 text-xs font-sans mt-1 leading-relaxed">
                  {selectedPoster.psychologicalHook}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                  <Layers className="w-3.5 h-3.5" /> Visual Architecture &amp; Why It Won
                </div>
                <p className="text-stone-300 text-xs font-sans mt-1 leading-relaxed">
                  {selectedPoster.visualArchitecture}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30">
                <div className="text-amber-300 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" /> AI Model Prompt Formula
                </div>
                <p className="text-stone-200 text-[11px] font-mono mt-1 bg-stone-950 p-2 rounded border border-stone-800">
                  {selectedPoster.aiReplicationPromptRules}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400">
                  <span>RideWire Application: <strong className="text-stone-200">{selectedPoster.brandApplication}</strong></span>
                  <button
                    onClick={() => handleCopyPrompt(selectedPoster.aiReplicationPromptRules, selectedPoster.id)}
                    className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 flex items-center gap-1 cursor-pointer font-bold"
                  >
                    {copiedPromptId === selectedPoster.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    Copy Prompt
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Historic Auction Records */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-stone-400 flex items-center justify-between">
              <span>SELECT HISTORIC RECORD TO INSPECT:</span>
              <span className="text-amber-400 font-bold">ALL-TIME WORLD RECORDS</span>
            </div>

            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
              {MOST_EXPENSIVE_POSTERS_DATA.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    selectedPoster.id === poster.id
                      ? 'bg-amber-950/40 border-amber-500/60 ring-2 ring-amber-500/20'
                      : 'bg-stone-900/60 border-stone-800 hover:bg-stone-900 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-14 rounded overflow-hidden bg-black flex-shrink-0 border border-stone-800">
                      <img src={poster.imageUrl} alt={poster.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-100 flex items-center gap-1.5">
                        {poster.title}
                        <span className="text-[10px] text-stone-500">({poster.year})</span>
                      </div>
                      <div className="text-[11px] text-amber-400 font-mono font-semibold mt-0.5">
                        {poster.auctionHammerPrice}
                      </div>
                      <div className="text-[10px] text-stone-400 font-mono">
                        House: {poster.auctionDateOrHouse}
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end flex-shrink-0">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-800 text-stone-300">
                      {poster.category}
                    </span>
                    <span className="text-amber-400 text-[10px] font-mono font-bold mt-2">INSPECT &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THE 5 LAWS OF AWARD-WINNING AI MEDIA */}
      {activeTab === 'rules' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs font-mono text-purple-200">
            <strong>THE CORE PRINCIPLE:</strong> Human beings do not value images based on pixel density or complexity. True viral adoption and auction records are driven by <em>cognitive salience</em> — how fast an image sparks recognition, emotional vulnerability, and primal kinship. Here is how AI media can guarantee this every time.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARD_WINNING_AI_RULES.map((rule) => (
              <div
                key={rule.step}
                className="p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold">
                      {rule.step}
                    </span>
                    <span className="text-stone-500 text-[10px]">AWARD FORMULA</span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-100">{rule.title}</h3>

                  <div className="text-xs text-stone-300 font-sans leading-relaxed">
                    {rule.secret}
                  </div>

                  <div className="pt-2 border-t border-stone-800 space-y-1.5 text-[11px] font-mono">
                    <div>
                      <span className="text-rose-400 font-semibold">Human Emotion: </span>
                      <span className="text-stone-400">{rule.humanEmotionalTrigger}</span>
                    </div>

                    <div className="bg-stone-950 p-2 rounded border border-stone-800 text-[10px] text-amber-300">
                      <strong>AI Rule: </strong>{rule.aiPromptImplementation}
                    </div>

                    <div className="text-stone-500 text-[10px]">
                      <strong className="text-emerald-400">Slop Avoided: </strong>{rule.failureModeAvoided}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PROMPT GENERATOR FOR RIDEWIRE WRENCHIES & OILFIELD BRANDING */}
      {activeTab === 'generator' && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-rose-500/40 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-400" /> Award-Winning Poster Prompt Generator
              </h2>
              <p className="text-xs font-mono text-stone-400 mt-0.5">
                Automatically formats prompt parameters to emulate historic debut art schools and $1M auction lithographs for RideWire.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-rose-500/10 text-rose-400 border border-rose-500/30 font-bold">
              ZERO AI SLOP FORMULA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="space-y-1.5">
              <label className="text-stone-400">Debut Art School / Archetype</label>
              <select
                value={selectedArchetype}
                onChange={(e) => setSelectedArchetype(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-rose-500"
              >
                <option value="Vkhutemas Constructivist Steel ($1.2M Record Impact)">Vkhutemas Constructivist Steel</option>
                <option value="Weimar Bauhaus High-Precision Grid (Swiss Fiduciary)">Bauhaus High-Precision Grid</option>
                <option value="WWII Nose-Art & Wrenchie Morale (American Grit)">WWII Nose-Art & Wrenchie Morale</option>
                <option value="Metropolis 1927 ($1.2M German Expressionism)">Metropolis 1927 ($1.2M Expressionism)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-stone-400">Strict Tri-Color Palette</label>
              <select
                value={selectedPalette}
                onChange={(e) => setSelectedPalette(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-rose-500"
              >
                <option value="Permian Red Ochre, Graphite Steel, Transducer Amber">Permian Red, Graphite, Amber</option>
                <option value="Technical Blueprint Navy, Desert Bone, Cadmium Orange">Blueprint Navy, Bone, Cadmium</option>
                <option value="Forged Anvil Steel, High-Desert Copper, Deep Void">Anvil Steel, Desert Copper, Void</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-stone-400">Brand Subject Hook</label>
              <input
                type="text"
                value={customBrandHook}
                onChange={(e) => setCustomBrandHook(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <button
            onClick={handleBuildPrompt}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-stone-950 font-bold font-mono text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-rose-500/20"
          >
            <Sparkles className="w-4 h-4 fill-current" /> GENERATE AWARD-WINNING PROMPT SPECIFICATION
          </button>

          {generatedPrompt && (
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> READY FOR AI IMAGE / LITHOGRAPH ENGINE
                </span>
                <button
                  onClick={() => handleCopyPrompt(generatedPrompt, 'generator-prompt')}
                  className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 flex items-center gap-1 cursor-pointer font-bold text-xs"
                >
                  {copiedPromptId === 'generator-prompt' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  Copy Master Prompt
                </button>
              </div>
              <p className="text-stone-300 font-mono text-xs leading-relaxed bg-stone-900 p-3 rounded border border-stone-800/80">
                {generatedPrompt}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
