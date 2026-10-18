export interface PinUpPoster {
  id: string;
  title: string;
  era: 'WWII Morale Era' | 'Atomic & Cold War Era' | 'Retro Wrenchies Field Era' | 'AI Sovereign Time';
  timeframe: string;
  wrenchieTheme: string;
  description: string;
  artStyle: string;
  imageUrl: string;
  aspectRatio: '2:3' | '3:4';
  tagline: string;
  telemetryVector: string;
}

export const PINUP_WAR_TO_AI_POSTERS: PinUpPoster[] = [
  {
    id: 'poster-01',
    title: 'Wrenchies on the Flightline: "Keep \'Em Pumpin\'!"',
    era: 'WWII Morale Era',
    timeframe: 'Circa 1943 War Effort',
    wrenchieTheme: 'Rig Floor Wrenchies & Heavy Equipment Mechanics',
    artStyle: '1940s Vintage Aircraft Nose-Art & Steel Wrench Lithograph',
    // Authentic heavy oilfield machinery & mechanical pumpjack rig
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: 'TIGHTEN THAT FLANGE! ZERO PRESSURE LEAKS FOR FREEDOM.',
    telemetryVector: 'Vector 110: High-Torque Mechanical Parity',
    description: '1940s wartime morale illustration honoring roughnecks and wrenchies with heavy steel spud wrenches, grease-stained denim, and diesel engine manifolds under the Permian pumpjack horizon.',
  },
  {
    id: 'poster-02',
    title: 'Rosie the Wrenchie: "We Drill the Truth"',
    era: 'WWII Morale Era',
    timeframe: 'Circa 1944 Homefront Dispatch',
    wrenchieTheme: 'Industrial Assembly & Pressure Gauges',
    artStyle: 'J. Howard Miller Patriotic Industrial Lithograph',
    // Authentic industrial welding/rigging worker
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: '13 SENSORS ASSEMBLED AS ONE — VICTORY IN EVERY BARREL!',
    telemetryVector: '13=1 Unity State Core Calibration',
    description: 'Iconic wartime industrial morale poster for RideWire roughnecks and field technicians torquing down casing bolts and testing high-pressure wellhead lines.',
  },
  {
    id: 'poster-03',
    title: 'Atomic Velocity: "1.8 Hours or Bust!"',
    era: 'Atomic & Cold War Era',
    timeframe: 'Circa 1957 Space Age Sprint',
    wrenchieTheme: 'Sub-1.8h Anomaly Circuit Breaker',
    artStyle: 'Retro-Futuristic Mid-Century Radar & Telemetry Dials',
    // Oscilloscope / telemetry dials / radar field engineer station
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: 'DON’T SLEEP ON SENSOR ANOMALIES! BEAT THE 108-MINUTE COUNTDOWN.',
    telemetryVector: 'DevilsQC Vanguard Speed Standard',
    description: 'Mid-century atomic era telemetry station with brass oscilloscopes, analog dials, and high-frequency circuit breakers tracking Delaware Basin faults.',
  },
  {
    id: 'poster-04',
    title: 'Permian Roughneck Wrenchies: Desert Chrome & Torque',
    era: 'Retro Wrenchies Field Era',
    timeframe: 'Circa 1978 Hard-Hat Renaissance',
    wrenchieTheme: 'Heavy Pipe Fitting & Valve Rebuilding',
    artStyle: 'Vintage Hard-Hat Permian Oilfield Oil-on-Canvas',
    // Authentic oil rig pumpjack roughnecks
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: 'HEAVY CREWS, TRUE EQUITY — 50/50 ON EVERY DROP.',
    telemetryVector: 'CapTable Fiduciary Parity Line',
    description: '1970s Permian oilfield poster featuring hard-hat rig wrenchies in leather gloves rebuilding heavy casing valves beside a pumping unit.',
  },
  {
    id: 'poster-05',
    title: 'Cyber-Wrenchie 2026: AI Sovereign Neural Rig',
    era: 'AI Sovereign Time',
    timeframe: 'Present & AI Horizon (2026+)',
    wrenchieTheme: 'Autonomous Sensor Nodes & 100% Open-Source Weights',
    artStyle: 'Neo-Industrial Cyber-Telemetry Blueprint with Copper Hues',
    // Technical circuit telemetry schematic / high-tech hardware
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: 'LOCAL WEIGHTS, ZERO SLEEP, ZERO HALLUCINATION.',
    telemetryVector: 'DeepSeek-R1 + Llama 3.3 Neural Rig Grid',
    description: 'High-desert Albuquerque field technician telemetry blueprint with digital HUD, titanium torque sensor, and open-source model weights tuned to 13=1 planetary consensus.',
  },
  {
    id: 'poster-06',
    title: 'The Free Credit Sprint: "Burn \'Em Before Month End!"',
    era: 'AI Sovereign Time',
    timeframe: 'September 2026 Monthly Renewal Horizon',
    wrenchieTheme: 'Zero-Waste Credit Utilization & 24/7 AI Synthesis',
    artStyle: 'High-Energy Industrial Propaganda & Neon Schematic',
    // Server cluster / compute engine / high-voltage infrastructure
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    aspectRatio: '2:3',
    tagline: 'LEAVE NO FREE TOKEN UNSPENT! MAXIMIZE INFERENCE VELOCITY.',
    telemetryVector: 'CostShield 100% Free Tier Optimization',
    description: 'High-voltage compute engine rally poster directing RideWire and Action Intell operators to maximize all free platform compute credits across all 17 nodes before monthly reset.',
  },
];
