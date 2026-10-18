import React, { useState } from 'react';
import { Cloud, Server, Cpu, CheckCircle2, Shield, Zap, Globe, Layers, ArrowRight } from 'lucide-react';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const DeploymentEnvironmentDiligence: React.FC = () => {
  const [selectedEnv, setSelectedEnv] = useState<'cloudrun' | 'workspace'>('cloudrun');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              INFRASTRUCTURE BENCHMARK
            </span>
            <span className="text-xs font-mono text-stone-500">CLOUD RUN VS. GOOGLE WORKSPACE PRO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            Enterprise Architecture &amp; Hosting Runtime Analysis
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Direct comparison matrix for RideWire LLC &amp; Action Intell: Evaluating Google Cloud Run (Containerized Microservices &amp; Sub-Second Telemetry) vs Google Workspace Pro (AppSheet &amp; Collaborative Enterprise Workspace).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ScreenVoiceNarrator
            screenTitle="Infrastructure Benchmark: Cloud Run vs Workspace Pro"
            narrativeText="Architectural analysis between Google Cloud Run and Google Workspace Pro. Cloud Run delivers containerized microservice execution and sub-second scada ingestion, while Google Workspace Pro provides seamless executive collaboration for partners S. Pohl and Steve McCarty."
            defaultVoice="Zephyr"
          />

          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setSelectedEnv('cloudrun')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedEnv === 'cloudrun'
                  ? 'bg-cyan-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Google Cloud Run (Recommended)
            </button>
            <button
              onClick={() => setSelectedEnv('workspace')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedEnv === 'workspace'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Google Workspace Pro
            </button>
          </div>
        </div>
      </div>

      {/* Side-by-Side Architectural Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cloud Run Card */}
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          selectedEnv === 'cloudrun'
            ? 'bg-gradient-to-br from-cyan-950/30 via-stone-900 to-stone-900 border-cyan-500/50 shadow-2xl'
            : 'bg-stone-900/60 border-stone-800'
        }`}>
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-100">Google Cloud Run</h3>
                <div className="text-xs text-stone-400 font-mono">Serverless Container Runtime</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
              VERIFIED OPTIMAL FOR 1.8h MATRIX
            </span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-cyan-400 font-bold">1. Zero Cold-Start Telemetry Engine (min-instances=1):</div>
              <div className="text-stone-300 font-sans text-xs">
                Configured with <span className="text-emerald-400 font-bold">min-instances=1 (NEVER scale-to-zero)</span>. Ensures a warm, dedicated container running 24/7/365 to instantly ingest Permian Basin scada telemetry, evaluate DevilsQC circuit breakers, and run the COCO autonomous sales loop with zero cold-start delay.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-cyan-400 font-bold">2. Open-Source Local Weights &amp; Sovereign AI Stack:</div>
              <div className="text-stone-300 font-sans text-xs">
                Integrates open-source model execution (<span className="text-amber-400 font-bold">Ollama / vLLM / Gemma 2 / Llama 3.3 / Mistral</span>) running directly inside the container alongside frontier Gemini APIs. High-volume routine telemetry runs 100% on self-hosted open-source weights for sovereignty and cost immunity.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-cyan-400 font-bold">3. Native Gemini 3.X Full-Stack Express Server:</div>
              <div className="text-stone-300 font-sans text-xs">
                Hosts custom Node.js/TypeScript backend running the `@google/genai` SDK with secure environment variable isolation (`process.env.GEMINI_API_KEY`) and zero client-side credential exposure.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-cyan-400 font-bold">4. CostShield OPEX Sovereign Arbitrator:</div>
              <div className="text-stone-300 font-sans text-xs">
                Dynamic routing keeps OPEX &lt;8% of revenue: Routine telemetry and copy rewriting is handled by open-source weights in the warm container, escalating to frontier Gemini models only for deep 13=1 mathematical synthesis.
              </div>
            </div>
          </div>
        </div>

        {/* Google Workspace Pro Card */}
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          selectedEnv === 'workspace'
            ? 'bg-gradient-to-br from-amber-950/30 via-stone-900 to-stone-900 border-amber-500/50 shadow-2xl'
            : 'bg-stone-900/60 border-stone-800'
        }`}>
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-100">Google Workspace Pro</h3>
                <div className="text-xs text-stone-400 font-mono">AppSheet &amp; Document Ecosystem</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
              OPTIMAL FOR PARTNER WORKFLOWS
            </span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-amber-400 font-bold">1. Governance &amp; Partner Collaboration:</div>
              <div className="text-stone-300 font-sans text-xs">
                Exceptional for shared 50/50 cap table spreadsheets in Google Sheets, binder governance files in Google Drive, and partner dispatch syncs in Google Meet and Gmail.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-amber-400 font-bold">2. Apps Script Execution Limits:</div>
              <div className="text-stone-300 font-sans text-xs">
                Apps Script has strict 6-minute maximum script execution limits and limited concurrent WebSocket telemetry handling, making it inadequate as the primary real-time 17-node AI matrix core.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-amber-400 font-bold">3. No Native Containerization:</div>
              <div className="text-stone-300 font-sans text-xs">
                Cannot host custom full-stack Docker containers, WebAssembly geological libraries, or low-level serial scada gateways.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1">
              <div className="text-amber-400 font-bold">4. The Unified Synthesis:</div>
              <div className="text-stone-300 font-sans text-xs">
                The winning institutional setup: <span className="text-emerald-400 font-bold">Cloud Run</span> powers the core AI matrix, telemetry pipeline, and Black Book API, while exporting summaries and reports seamlessly to <span className="text-amber-400 font-bold">Google Workspace Pro</span> for managing partners S. Pohl and Steve McCarty.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
