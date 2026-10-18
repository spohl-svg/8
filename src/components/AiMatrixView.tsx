import React, { useState } from 'react';
import { AI_NODES_DATA, NodeStatus } from '../data/playbook';
import { Cpu, ShieldAlert, Zap, Activity, Filter, RefreshCw, CheckCircle, Clock } from 'lucide-react';
import { ScreenVoiceNarrator } from './ScreenVoiceNarrator';

export const AiMatrixView: React.FC<{
  onInspectNode: (node: NodeStatus) => void;
}> = ({ onInspectNode }) => {
  const [selectedLayer, setSelectedLayer] = useState<string>('ALL');

  const layers = ['ALL', 'Consensus Core', 'Analytical Edge', 'Governance & QC', 'Cost Optimization'];

  const filteredNodes = selectedLayer === 'ALL'
    ? AI_NODES_DATA
    : AI_NODES_DATA.filter((n) => n.layer === selectedLayer);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              AUTONOMOUS MATRIX v2.6
            </span>
            <span className="text-xs font-mono text-stone-500">17 ACTIVE AGENTS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
            17-Node Autonomous AI Matrix
          </h1>
          <p className="text-stone-400 text-sm max-w-2xl mt-1">
            Real-time telemetry, model routing, DevilsQC verification loops (&lt;1.8h velocity), and CostShield inference optimization.
          </p>
        </div>

        {/* Screen Voice Narrator */}
        <ScreenVoiceNarrator
          screenTitle="17-Node Autonomous AI Matrix (100% Open Source Models Only)"
          narrativeText="The seventeen node autonomous matrix now executes strictly on open source model weights. Every layer runs self-hosted weights including Llama 3.3, DeepSeek R1, Gemma 2, and Mistral, completely independent of closed third party APIs."
          defaultVoice="Fenrir"
        />

        {/* DevilsQC & CostShield Status Chips */}
        <div className="flex flex-wrap gap-2">
          <div className="px-3.5 py-2 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
            <div>
              <div className="font-bold">DevilsQC Loop</div>
              <div className="text-[10px] text-rose-400/80">&lt; 1.8h Velocity (Current: 42m)</div>
            </div>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="font-bold">100% Open Source Only</div>
              <div className="text-[10px] text-emerald-400/80">Llama 3.3 • DeepSeek R1 • Gemma 2 • Mistral</div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-800">
        <Filter className="w-4 h-4 text-stone-500 ml-1" />
        {layers.map((layer) => (
          <button
            key={layer}
            onClick={() => setSelectedLayer(layer)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
              selectedLayer === layer
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            {layer}
          </button>
        ))}
      </div>

      {/* Grid of 17 Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNodes.map((node) => (
          <div
            key={node.id}
            onClick={() => onInspectNode(node)}
            className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-900 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">{node.id}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                  node.status === 'OPTIMAL'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : node.status === 'ACTIVE'
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                }`}>
                  {node.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-stone-400" /> {node.name}
              </h3>

              <div className="text-xs text-stone-400 font-mono">
                Layer: <span className="text-stone-300">{node.layer}</span>
              </div>

              <p className="text-xs text-stone-400 line-clamp-2">
                {node.role}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div>
                <div className="text-stone-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Velocity
                </div>
                <div className="text-stone-200 font-semibold">{node.velocity}</div>
              </div>
              <div>
                <div className="text-stone-500">Telemetry Specs</div>
                <div className="text-amber-400/90 truncate">{node.specs}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
