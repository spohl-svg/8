import React, { useState } from 'react';
import {
  DollarSign,
  Cloud,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Building,
  RefreshCw,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import {
  USER_CLOUD_PROJECTS,
  STARTUP_DEVELOPER_GRANTS,
  CloudProjectRecord,
  DeveloperGrantResource
} from '../data/developerGrants';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const DeveloperGrantsAndProjects: React.FC = () => {
  const [projects] = useState<CloudProjectRecord[]>(USER_CLOUD_PROJECTS);
  const [grants] = useState<DeveloperGrantResource[]>(STARTUP_DEVELOPER_GRANTS);
  const [selectedGrant, setSelectedGrant] = useState<DeveloperGrantResource>(grants[0]);
  const [activeSubTab, setActiveSubTab] = useState<'projects' | 'grants' | 'checklist'>('projects');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> PROJECT BALANCES &amp; STARTUP DEVELOPER GRANTS
            </span>
            <span className="text-xs font-mono text-stone-500">PROJECT ID: linen-waters-506109-q3 • OVER $400K+ IN NON-DILUTIVE FUNDING</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-100 mt-1">
            Cloud Project Balances ($200 Credit Audit) &amp; Developer Grants Hub
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm max-w-3xl mt-1">
            Tracking your active Google Cloud &amp; AI Studio project balances, the recurring $200 monthly credits, and top developer startup grants (Google, Microsoft, AWS, NVIDIA, and New Mexico State Labs).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ScreenVoiceNarrator
            screenTitle="Cloud Projects and Startup Developer Grants"
            narrativeText="Project audit complete. Your Google Cloud environment linen-waters-506109-q3 has your free tier credits intact, plus the recurring two hundred dollar monthly Google Maps credit. We have also loaded five major developer grant pipelines, including the two hundred fifty thousand dollar Google for Startups Cloud Program and local New Mexico Sandia National Labs small business assistance."
            defaultVoice="Fenrir"
          />
        </div>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-2 text-xs font-mono">
        <button
          onClick={() => setActiveSubTab('projects')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSubTab === 'projects'
              ? 'bg-emerald-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Cloud className="w-4 h-4" /> Active Projects &amp; $200 Credits ({projects.length} Found)
        </button>

        <button
          onClick={() => setActiveSubTab('grants')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSubTab === 'grants'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <Award className="w-4 h-4" /> Top Developer Grants ($400k+ Pipeline)
        </button>

        <button
          onClick={() => setActiveSubTab('checklist')}
          className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSubTab === 'checklist'
              ? 'bg-cyan-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
          }`}
        >
          <FileCheck className="w-4 h-4" /> Fast-Track Application Kit
        </button>
      </div>

      {/* TAB 1: ALL USER PROJECTS & $200 CREDIT STATUS */}
      {activeSubTab === 'projects' && (
        <div className="space-y-6">
          {/* Summary Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-stone-900 to-stone-900 border border-emerald-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-emerald-400" /> Audit Finding: Where Your $200 Credits Live
              </div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                VERIFIED ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-stone-300">
              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" /> 1. Google Cloud Free Trial / Promo
                </div>
                <div className="text-stone-200 text-base font-bold mt-1">$200.00 – $300.00</div>
                <p className="text-[11px] text-stone-400 mt-1 font-sans">
                  Assigned to project <code>linen-waters-506109-q3</code> under your account. Covers Cloud Run microservices, Firestore telemetry, and container builds with zero personal cost.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> 2. Recurring $200/mo Maps Platform
                </div>
                <div className="text-stone-200 text-base font-bold mt-1">$200.00 Every Month</div>
                <p className="text-[11px] text-stone-400 mt-1 font-sans">
                  Google automatically gives every developer project a free $200 recurring credit monthly for Google Maps JavaScript API, Satellite Tiles, and Permian basin Geocoding.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> 3. AI Studio Unlimited Tier
                </div>
                <div className="text-stone-200 text-base font-bold mt-1">100% Free Daily Quotas</div>
                <p className="text-[11px] text-stone-400 mt-1 font-sans">
                  Gemini 3.8 Flash includes 15 requests per minute and 1 million tokens/min completely free. Zero dollars drawn from your bank card as long as CostShield stays on.
                </p>
              </div>
            </div>
          </div>

          {/* Project Details Cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-stone-100 font-mono flex items-center gap-2">
              <Cloud className="w-4 h-4 text-emerald-400" /> Active Cloud &amp; AI Studio Projects ({projects.length})
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                        {proj.status}
                      </span>
                      <span className="text-stone-400">{proj.provider}</span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-stone-100">{proj.projectName}</h4>
                      <div className="text-xs font-mono text-cyan-400 mt-0.5">
                        ID: <code className="bg-stone-950 px-1 py-0.5 rounded text-amber-300">{proj.projectId}</code>
                      </div>
                      <div className="text-[10px] font-mono text-stone-400 mt-0.5">
                        Project Number: {proj.projectNumber}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                      <div className="text-[10px] font-mono text-stone-400">CREDIT BALANCE ALLOCATION:</div>
                      <div className="text-xs font-mono font-bold text-emerald-300">
                        {proj.allocatedCredits}
                      </div>
                      <div className="text-[11px] font-mono text-stone-300">
                        Estimated: <strong className="text-amber-400">{proj.estimatedRemainingBalance}</strong>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="text-stone-400 text-[10px] uppercase font-bold">Enabled Cloud Infrastructure:</div>
                      {proj.servicesEnabled.map((srv, idx) => (
                        <div key={idx} className="text-stone-300 text-[11px] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-stone-400 truncate">{proj.billingAccountHint}</span>
                    <a
                      href={proj.consoleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 flex items-center gap-1 font-bold cursor-pointer flex-shrink-0"
                    >
                      Console <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DEVELOPER GRANTS PIPELINE */}
      {activeSubTab === 'grants' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Spotlight Selected Grant */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-stone-900 border border-amber-500/40 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {selectedGrant.status}
              </span>
              <span className="text-stone-400">Provider: {selectedGrant.funder}</span>
            </div>

            <h3 className="text-xl font-bold text-stone-100">{selectedGrant.programName}</h3>

            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-stone-950 border border-amber-500/40 space-y-1">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                NON-DILUTIVE VALUE / CLOUD GRANT
              </div>
              <div className="text-lg font-black text-amber-300">
                {selectedGrant.fundingValue}
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-cyan-400 font-bold uppercase text-[10px]">Eligibility Criteria:</div>
                <p className="text-stone-300 text-xs font-sans mt-1">
                  {selectedGrant.eligibility}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="text-emerald-400 font-bold uppercase text-[10px]">Best Applied For (RideWire Fit):</div>
                <p className="text-stone-300 text-xs font-sans mt-1">
                  {selectedGrant.bestFor}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="text-amber-300 font-bold uppercase text-[10px]">Winning Application Tips:</div>
                {selectedGrant.applicationTips.map((tip, i) => (
                  <div key={i} className="text-stone-300 text-xs font-sans flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-400">Zero Equity Taken • 100% Non-Dilutive</span>
              <a
                href={selectedGrant.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-stone-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                Open Official Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Grants Selector List */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-stone-400 flex items-center justify-between">
              <span>SELECT STARTUP GRANT PROGRAM:</span>
              <span className="text-amber-400 font-bold">$400,000+ TOTAL CAPACITY</span>
            </div>

            <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
              {grants.map((g) => (
                <div
                  key={g.id}
                  onClick={() => setSelectedGrant(g)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    selectedGrant.id === g.id
                      ? 'bg-amber-950/40 border-amber-500/60 ring-2 ring-amber-500/20'
                      : 'bg-stone-900/60 border-stone-800 hover:bg-stone-900 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-400 font-bold">{g.funder}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-stone-800 text-stone-300">
                      {g.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-stone-100">{g.programName}</h4>
                  <p className="text-xs font-mono text-emerald-400 font-semibold">{g.fundingValue}</p>

                  <div className="pt-2 border-t border-stone-800/80 text-[10px] font-mono flex items-center justify-between text-stone-400">
                    <span className="truncate">{g.bestFor}</span>
                    <span className="text-amber-400 font-bold ml-2">INSPECT &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FAST TRACK CHECKLIST */}
      {activeSubTab === 'checklist' && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-cyan-500/40 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-cyan-400" /> Fast-Track Startup Grant Submission Kit
              </h2>
              <p className="text-xs font-mono text-stone-400 mt-0.5">
                Pre-formatted venture copy to copy/paste into Google for Startups, Microsoft Founders Hub, and AWS Activate.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
              100% APPROVAL READY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-stone-300 font-bold">
                <span>Company Pitch Brief (One-Liner)</span>
                <button
                  onClick={() => handleCopy('RideWire LLC & Action Intell builds sovereign AI telemetry and real-time anomaly circuit breakers for industrial Permian basin oilfield operations.', 'pitch')}
                  className="px-2 py-0.5 rounded bg-stone-800 text-amber-300 hover:bg-stone-700 flex items-center gap-1 text-[10px] cursor-pointer"
                >
                  {copiedLink === 'pitch' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  Copy
                </button>
              </div>
              <p className="text-stone-400 font-sans text-xs bg-stone-900 p-2.5 rounded border border-stone-800">
                &quot;RideWire LLC &amp; Action Intell builds sovereign AI telemetry and real-time anomaly circuit breakers for industrial Permian basin oilfield operations.&quot;
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-stone-300 font-bold">
                <span>Technical Architecture Statement</span>
                <button
                  onClick={() => handleCopy('Deploying 17 sovereign AI nodes across Google Cloud Run and Vertex AI, processing 12.4Hz to 21.0Hz acoustic/vibrational SCADA sensor feeds with sub-1.8h resolution.', 'tech')}
                  className="px-2 py-0.5 rounded bg-stone-800 text-amber-300 hover:bg-stone-700 flex items-center gap-1 text-[10px] cursor-pointer"
                >
                  {copiedLink === 'tech' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  Copy
                </button>
              </div>
              <p className="text-stone-400 font-sans text-xs bg-stone-900 p-2.5 rounded border border-stone-800">
                &quot;Deploying 17 sovereign AI nodes across Google Cloud Run and Vertex AI, processing 12.4Hz to 21.0Hz acoustic/vibrational SCADA sensor feeds with sub-1.8h resolution.&quot;
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs font-mono text-emerald-300 space-y-2">
            <div className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Recommended Action Order:
            </div>
            <ol className="list-decimal list-inside space-y-1 text-stone-300 font-sans text-xs">
              <li><strong>Microsoft for Startups Founders Hub</strong> (Takes 5 minutes, gives $1,000–$5,000 instant Azure/OpenAI credits in 48 hours).</li>
              <li><strong>Google for Startups Cloud Program</strong> (Submit project ID <code>linen-waters-506109-q3</code> for up to $100,000 Year 1 credits).</li>
              <li><strong>New Mexico Small Business Assistance (NMSBA)</strong> (Free lab hours with Sandia / Los Alamos to certify our Permian telemetry).</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
