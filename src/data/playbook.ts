export interface PlaybookSection {
  id: string;
  title: string;
  category: 'governance' | 'ai_matrix' | 'mathematics' | 'operations' | 'telemetry' | 'capitalization';
  summary: string;
  content: string;
  metrics?: { label: string; value: string; detail?: string }[];
}

export interface NodeStatus {
  id: string;
  name: string;
  layer: 'Consensus Core' | 'Analytical Edge' | 'Governance & QC' | 'Cost Optimization';
  role: string;
  model: string;
  velocity: string;
  status: 'OPTIMAL' | 'ACTIVE' | 'SUPERVISING' | 'SYNCED';
  specs: string;
}

export const PLAYBOOK_SECTIONS: PlaybookSection[] = [
  {
    id: 'executive-summary',
    title: 'Executive Mission & Entity Profile',
    category: 'governance',
    summary: 'Democratizing natural resource & industrial intelligence via unified telemetry & 17-node AI matrix.',
    content: `RideWire LLC & Action Intell operate under Document Control RIDEWIRE-BINDER-2026-v1 out of North Valley, Albuquerque, New Mexico. Founded on the proprietary 13=1 Unity State Framework™, the enterprise bridges public geological databases, environmental monitoring feeds, and deep mechanical telemetry into real-time venture-grade operational intelligence.

Mission Charter:
"To democratize natural resource and industrial intelligence by making public geological, environmental, and mechanical telemetry accessible, unified, and actionable through AI-orchestrated analysis."

Classification: Confidential & Proprietary Institutional Grade Playbook. Designed for institutional scale, strategic acquirers, and tier-1 venture syndicates seeking automated telemetry supremacy in natural resource basins.`,
    metrics: [
      { label: 'Document Control', value: 'RIDEWIRE-BINDER-2026-v1', detail: 'Confidential' },
      { label: 'Operational Hub', value: 'North Valley, ABQ, NM', detail: 'Primary Base' },
      { label: 'Core Architecture', value: '13=1 Unity State Framework™', detail: 'Proprietary' },
      { label: 'Telemetry Basins', value: 'Permian, San Juan & Delaware', detail: 'Live Ingestion' }
    ]
  },
  {
    id: 'equity-cap-table',
    title: 'Equal Founder Equity & Capitalization',
    category: 'capitalization',
    summary: '10,000,000 Authorized Shares with strict 50/50 founder parity, 15% ESOP pool, and 10% SAFE reserves.',
    content: `The capital structure enforces disciplined equity allocation designed for institutional venture readiness, protecting founder control while reserving substantial equity pools for key AI engineering talent and seed venture syndicates.

Equal Founder Partnership:
• S. Pohl: 3,000,000 Common Shares (50% of Founder Equity)
• Steve McCarty: 3,000,000 Common Shares (50% of Founder Equity)
• Equal 50/50 Managing Partners with reciprocal voting parity.

Capital Structure Summary:
• Total Authorized Common Stock: 10,000,000 Shares
• Founder Issued Common: 6,000,000 Shares (60.0%)
• Employee Stock Option Plan (ESOP Pool): 1,500,000 Shares (15.0%)
• Seed / SAFE Convertible Reserve: 1,000,000 Shares (10.0%)
• Unallocated Treasury Reserve: 1,500,000 Shares (15.0%)

Venture Readiness:
Clean cap table without toxic liquidation preferences or debt encumbrances. Qualified Small Business Stock (QSBS) eligible under US IRC §1202.`,
    metrics: [
      { label: 'Authorized Shares', value: '10,000,000', detail: 'Clean Cap Table' },
      { label: 'S. Pohl (Partner)', value: '3,000,000', detail: '50% Founder Equity' },
      { label: 'Steve McCarty (Partner)', value: '3,000,000', detail: '50% Founder Equity' },
      { label: 'ESOP Talent Pool', value: '15.0%', detail: '1,500,000 Shares' },
      { label: 'Seed / SAFE Reserve', value: '10.0%', detail: '1,000,000 Shares' }
    ]
  },
  {
    id: 'profit-allocation',
    title: '50% Net Corporate Profit Allocation',
    category: 'governance',
    summary: 'Institutional profit allocation charter establishing permanent endowment and resilience reserves.',
    content: `RideWire LLC bylaws and partnership charters mandate a disciplined, transparent 50% net corporate profit allocation mechanism:

1. Corporate Net Profit Allocation:
• 50% of Audited Net Corporate Profits allocated to designated capital and trust reserves.
• Dual-signatory fiduciary governance established in Albuquerque, New Mexico.

2. Fiduciary Safeguards & Treasury Mechanics:
• Quarterly distributions calculated post-depreciation and operational working capital buffers.
• Independent escrow oversight ensuring compliance with commercial lender covenants and state fiduciary requirements.
• Scalable structure that seamlessly accommodates institutional preferred share dividend mechanics upon venture financing close.`,
    metrics: [
      { label: 'Profit Allocation', value: '50% Net Corporate', detail: 'Charter Mandated' },
      { label: 'Audit Cadence', value: 'Quarterly GAAP Review', detail: 'Independent CPA' },
      { label: 'Fiduciary Seat', value: 'Albuquerque, NM', detail: 'Dual Partner Signature' }
    ]
  },
  {
    id: 'ai-matrix',
    title: '17-Node Autonomous AI Matrix & DevilsQC',
    category: 'ai_matrix',
    summary: 'Proprietary 17-agent neural matrix with DevilsQC (<1.8h velocity) and CostShield local inference.',
    content: `The heart of RideWire & Action Intell is the 17-Node Autonomous AI Matrix. Unlike monolithic models, the matrix distributes cognitive load across 17 specialized nodes partitioned across 4 tactical layers:

Key Nodes & Protocols:
• DevilsQC Node: Hard real-time quality control engine executing automated verification cycles in <1.8 hours velocity. Any anomaly detected triggers instant circuit breaking.
• CostShield Node: Intelligent model arbitration engine that dynamically shifts workloads between ultra-low-cost local open-source models and frontier reasoning models (Gemini Pro/Flash), keeping inference OPEX <8% of gross margin.
• Permian Sync Node: Real-time telemetry ingestion from public USGS, NM OCD, and private scada sensors.
• Consensus Core: 13-node mathematical quorum enforcing zero-drift algorithmic integrity.`,
    metrics: [
      { label: 'Autonomous Nodes', value: '17 Active Nodes', detail: '4 Tactical Layers' },
      { label: 'DevilsQC Velocity', value: '< 1.8 Hours', detail: 'Verification Loop' },
      { label: 'CostShield Target', value: '< 8% OPEX Ratio', detail: 'Hybrid Open-Source' },
      { label: 'Telemetry Frequency', value: 'Sub-second Scada', detail: 'Permian Field Grid' }
    ]
  },
  {
    id: 'math-cycles',
    title: '13=1 Consensus Core & 110 Alignment Vectors',
    category: 'mathematics',
    summary: 'The 13=1 Unity State Framework™ combining 110 ancient alignment vectors with Permian Basin telemetry.',
    content: `The mathematical foundation is governed by the 13=1 Unity State Framework™:

Mathematical Principles:
• 13=1 Consensus Core: 13 decentralized telemetry sensors vote on ground-truth geological and mechanical state; 1 single unified deterministic truth is rendered per epoch.
• 110 Ancient Alignment Vectors: Geometrical and mathematical harmonics mapping natural fractures, seismic harmonics, and reservoir pressure gradients against historical topological baselines.
• Permian Basin Telemetry: Integrates drilling dynamics, fluid pressures, gamma ray logging, and seismic micro-tremors to predict pumpjack failure and optimize extraction yields with 99.4% telemetry accuracy.`,
    metrics: [
      { label: 'Unity Consensus', value: '13 = 1 Quorum', detail: 'Zero-Fault Determinism' },
      { label: 'Alignment Vectors', value: '110 Harmonic Axes', detail: 'Fracture / Seismic Map' },
      { label: 'Telemetry Accuracy', value: '99.42%', detail: 'Subsurface Ground Truth' }
    ]
  },
  {
    id: 'operational-calendar',
    title: 'Four-Season Operational Rhythm',
    category: 'operations',
    summary: 'Terracotta/Copper Execution, Turquoise Deep R&D, Sandstone Capital, and Desert Sage Rest.',
    content: `RideWire LLC structures its operational cadence around the high-desert Albuquerque seasonal quad-cycle:

1. Southwest Terracotta / Copper (Q1 / Sprint):
• Aggressive operational execution, hardware deployment, field transducer calibration, and Permian telemetry node expansion.

2. Turquoise (Q2 / Exploration):
• Deep mathematical R&D, 13=1 model backtesting, autonomous agent matrix upgrades, and algorithmic alignment testing.

3. Sandstone (Q3 / Capital & Syndication):
• Venture syndication, institutional LP briefings, SAFE conversion audits, and commercial license contracting.

4. Desert Sage (Q4 / Renewal):
• System pause, scheduled hardware maintenance, CostShield cluster optimization, governance audits, and strategic rest.`,
    metrics: [
      { label: 'Terracotta / Copper', value: 'Sprint & Field Deploy', detail: 'Permian Field Grid' },
      { label: 'Turquoise', value: 'Deep Math & R&D', detail: '13=1 Vector Tuning' },
      { label: 'Sandstone', value: 'Capital & Expansion', detail: 'Institutional SAFE' },
      { label: 'Desert Sage', value: 'Audit & Resilience', detail: 'System Hardening' }
    ]
  }
];

export const AI_NODES_DATA: NodeStatus[] = [
  { id: 'NODE-01', name: 'DevilsQC Vanguard', layer: 'Governance & QC', role: 'Real-time anomaly circuit breaker & code/data verification', model: 'Llama-3.3-70B-Instruct (Ollama OSS)', velocity: '< 1.8h (Avg: 42m)', status: 'OPTIMAL', specs: 'Continuous OSS Liveness' },
  { id: 'NODE-02', name: 'COCO Self-Healing Marketing Engine & CostShield', layer: 'Cost Optimization', role: 'Autonomous self-healing marketing machine running on persistent warm container (min-instances=1, NEVER scale-to-zero) with local open-source models', model: 'Gemma-2-27B-IT + Llama-3.3-70B (Local Weights)', velocity: '1.8h Self-Healing Loop (0ms cold start)', status: 'OPTIMAL', specs: 'min-instances=1 Persistent • 100% OSS Weights • OPEX < 7.8%' },
  { id: 'NODE-03', name: '13=1 Consensus Master', layer: 'Consensus Core', role: '13-sensor state arbiter and deterministic truth synthesizer', model: 'DeepSeek-R1-Distill-Llama-70B (High Reasoning)', velocity: '120ms', status: 'ACTIVE', specs: '13=1 Unity Kernel' },
  { id: 'NODE-04', name: 'Permian Telemetry Harvester', layer: 'Analytical Edge', role: 'Sub-second scada pumpjack & pressure ingest', model: 'Gemma-2-9B-IT (vLLM Ingest)', velocity: '45ms', status: 'ACTIVE', specs: 'NM OCD / USGS feeds' },
  { id: 'NODE-05', name: 'Vector 110 Alignment Engine', layer: 'Analytical Edge', role: 'Subsurface geological fracture and seismic harmonic tracker', model: 'Mistral-Large-Instruct (OSS Engine)', velocity: '190ms', status: 'ACTIVE', specs: '110 Vector Matrix' },
  { id: 'NODE-06', name: 'North Valley Field Dispatch', layer: 'Governance & QC', role: 'Albuquerque operations hub automated routing & crew alert', model: 'Qwen-2.5-72B-Instruct (Local Container)', velocity: '60ms', status: 'OPTIMAL', specs: 'GPS & Telemetry Geo' },
  { id: 'NODE-07', name: 'CapTable Fiduciary Sentry', layer: 'Governance & QC', role: 'Equity governance, ESOP ledger, and 50/50 parity enforcement', model: 'Llama-3.3-70B-Instruct (Governance)', velocity: '85ms', status: 'SUPERVISING', specs: 'Strict Parity Audit' },
  { id: 'NODE-08', name: 'Thermal & Mechanical Telemetry', layer: 'Analytical Edge', role: 'Pumpjack bearing temperature, torque, and vibration spectrum', model: 'Llama-3.2-11B-Vision (OSS Multimodal)', velocity: '40ms', status: 'ACTIVE', specs: 'Real-time FFT Sensor' },
  { id: 'NODE-09', name: 'Geological Stratigraphy Mapper', layer: 'Analytical Edge', role: 'Gamma ray, porosity, and permeability 3D reconstruction', model: 'Stable-Diffusion-3.5-Large (Open Source)', velocity: '1.4s', status: 'ACTIVE', specs: '4K Geological Canvas' },
  { id: 'NODE-10', name: 'Venture Metrics & SAFE Engine', layer: 'Cost Optimization', role: 'Runway, unit economics, and data monetization modeling', model: 'DeepSeek-V3-671B / Llama-70B', velocity: '140ms', status: 'OPTIMAL', specs: 'VC Deck Automation' },
  { id: 'NODE-11', name: 'Public Geological Crawler', layer: 'Analytical Edge', role: 'Continuous search grounding on regulatory changes and new filings', model: 'SearXNG + Gemma-2-27B Crawler', velocity: '280ms', status: 'ACTIVE', specs: 'Federal & NM Bureau' },
  { id: 'NODE-12', name: 'Veo Telemetry Visualizer', layer: 'Analytical Edge', role: 'Kinematic 3D drone & aerial subsurface visualization', model: 'CogVideoX-5B / LTX-Video (Open Source)', velocity: 'Async OSS Video Pipeline', status: 'ACTIVE', specs: '16:9 / 9:16 Video' },
  { id: 'NODE-13', name: 'Hydraulic Fracture Pulse Sentry', layer: 'Consensus Core', role: 'Acoustic micro-seismic wave detection and pipe stress', model: 'Whisper-Large-v3 + Gemma-9B', velocity: '25ms', status: 'OPTIMAL', specs: 'Sensor Quorum Node' },
  { id: 'NODE-14', name: 'San Juan Basin Extender', layer: 'Analytical Edge', role: 'Gas shale and coalbed methane telemetry expansion', model: 'Mistral-Nemo-12B (Local Edge)', velocity: '65ms', status: 'ACTIVE', specs: 'Regional Expansion' },
  { id: 'NODE-15', name: 'Delaware Basin Node', layer: 'Analytical Edge', role: 'High-salinity water disposal and pipeline telemetry', model: 'Llama-3.1-8B-Instruct (Low-Power Edge)', velocity: '40ms', status: 'ACTIVE', specs: 'Pipeline Telemetry' },
  { id: 'NODE-16', name: 'Executive Multi-Turn Strategist', layer: 'Governance & QC', role: 'Conversational business binder co-pilot for Managing Partners', model: 'Llama-3.3-70B-Instruct (Open Source Sovereign)', velocity: 'Streaming', status: 'OPTIMAL', specs: 'Interactive Partner Chat' },
  { id: 'NODE-17', name: 'Seasonal Cycle Clockkeeper', layer: 'Governance & QC', role: 'Four-Season operational calendar phase transitions & rest triggers', model: 'Gemma-2-9B-IT (Kernel Clock)', velocity: '8ms', status: 'SYNCED', specs: 'Terracotta to Desert Sage' }
];
