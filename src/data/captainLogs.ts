export interface CaptainLogEntry {
  id: string;
  reportNumber: string;
  stardate: string; // ISO date / cycle identifier
  title: string;
  basin: 'Permian' | 'San Juan' | 'Delaware' | 'Global Planetary Grid';
  vectorCoordinates: string; // Alignment vector mapping
  researchSummary: string; // Daily summary of pure research (not system telemetry)
  earthMappingBullets: string[];
  findings: string;
  velocityBenchmark: '1.8h Velocity (RideWire Speed)' | '24h Legacy Industrial Standard';
  quantumVelocityDelta: string;
  classification: 'CONFIDENTIAL EXECUTIVE' | 'CAPTAIN EYES ONLY' | 'FIELD DISPATCH';
}

export interface MarketingCampaign18 {
  day: number;
  dateStr: string;
  cycle18hSlot: string; // e.g. "Cycle 01: 00:00 - 01:48"
  focusTheme: string;
  headline18: string;
  narrative18h: string;
  legacy24hContrast: string;
  tacticalChannel: 'LinkedIn Executive' | 'Subsurface Tech Memo' | 'Venture Syndicate Brief' | 'Global Geological Dispatch';
  selfHealingTrigger: string;
  metricsTarget: string;
}

export const INITIAL_BLACK_BOOK_LOGS: CaptainLogEntry[] = [
  {
    id: 'log-001',
    reportNumber: 'RPT-110-VEC-01',
    stardate: '2026-09-27',
    title: 'Subsurface Permian Fracture Lineaments & 110 Alignment Harmonics',
    basin: 'Permian',
    vectorCoordinates: '32.1844° N, 103.5412° W (Vector #14 & #88 Resonant Node)',
    researchSummary: 'Investigation into micro-gravitational variations correlating with pre-Cambrian crystalline basement faulting beneath the Delaware Basin. Observation indicates natural acoustic resonance frequencies between 14.2 Hz and 18.6 Hz precede tectonic fluid pressurization by 4.3 cycles.',
    earthMappingBullets: [
      'Mapped 4,200 sq. km subsurface lithological density matrix across Lea & Eddy County boundary.',
      'Identified 7 primary fracture propagation corridors running at 34.6° azimuth aligned with Vector 14 harmonic baseline.',
      'Correlated ancient Paleozoic sedimentary compaction layers with real-time hydraulic casing strain indicators.',
      'Constructed predictive stress-vector topography: reveals zero-strain pockets ideal for non-invasive extraction.'
    ],
    findings: 'Traditional seismic mapping requires 24 to 72 hours of post-processing. Under RideWire 13=1 telemetry, the subterranean stress gradient was synthesized in 41 minutes, yielding a 13.3x velocity advantage.',
    velocityBenchmark: '1.8h Velocity (RideWire Speed)',
    quantumVelocityDelta: '41m achieved vs 24h industry baseline (35.1x acceleration)',
    classification: 'CAPTAIN EYES ONLY'
  },
  {
    id: 'log-002',
    reportNumber: 'RPT-110-VEC-02',
    stardate: '2026-09-26',
    title: 'San Juan Deep Gas Thermal Plumes & Subterranean Hydrogeology',
    basin: 'San Juan',
    vectorCoordinates: '36.7281° N, 107.9814° W (Vector #33 Ancient Meridian)',
    researchSummary: 'Empirical cross-examination of Cretaceous Fruitland coalbed methane desorptive thermal signatures against historical hydrogeological aquifers. Discovery of an interconnected subterranean geothermal aquifer regulating natural gas migration.',
    earthMappingBullets: [
      'Digitized 3D geological boundary of the Pictured Cliffs sandstone reservoir interface.',
      'Mapped geothermal aquifer convective loops providing natural cooling to heavy machinery telemetry.',
      'Overlaid USGS historical borehole logs (1954-2024) onto real-time multi-spectral sensor matrix.',
      'Proved that 110 alignment vectors pinpoint geothermal fissures with 99.4% spatial precision.'
    ],
    findings: 'The data indicates subterranean aquifer flow alters localized seismic shear velocities. By integrating continuous scada telemetry, reservoir depletion curves can be forecasted 14 months ahead of conventional decline-curve analysis.',
    velocityBenchmark: '1.8h Velocity (RideWire Speed)',
    quantumVelocityDelta: '58m achieved vs 24h industry baseline (24.8x acceleration)',
    classification: 'CONFIDENTIAL EXECUTIVE'
  },
  {
    id: 'log-003',
    reportNumber: 'RPT-110-VEC-03',
    stardate: '2026-09-25',
    title: 'Global Earth Crustal Pulsing & 13=1 Planetary Quorum',
    basin: 'Global Planetary Grid',
    vectorCoordinates: 'Planetary Baseline Alignment (Rio Grande Rift Axis - ABQ Hub)',
    researchSummary: 'Fundamental physics research exploring earth tidal deformation harmonics. The Rio Grande rift acts as a natural continental tuning fork whose ultra-low frequency micro-vibrations synchronize with Permian and San Juan basin extraction dynamics.',
    earthMappingBullets: [
      'Calibrated Albuquerque North Valley base seismometer against Rio Grande crustal rift tension.',
      'Mapped crustal dilation vectors extending from Colorado plateau down to Chihuahua terrain.',
      'Linked 13 distributed telemetry stations to a single zero-drift planetary state coordinate.',
      'Demonstrated that mechanical pumpjack wear correlates with 12.4-hour lunar-solar crustal tides.'
    ],
    findings: 'Mechanical failure is not random wear; it is non-synchronized mechanical resistance against earth tidal pulsation. Aligning pump strokes to 110 resonance vectors reduces mechanical fatigue by 28.4%.',
    velocityBenchmark: '1.8h Velocity (RideWire Speed)',
    quantumVelocityDelta: '1h 12m achieved vs 24h industry baseline (20x acceleration)',
    classification: 'CAPTAIN EYES ONLY'
  }
];

export const INITIAL_MARKETING_CALENDAR: MarketingCampaign18[] = [
  {
    day: 1,
    dateStr: 'Day 01',
    cycle18hSlot: 'Cycle 01: The 1.8h Mandate',
    focusTheme: 'Velocity Dominance (1.8 Hours vs. 24 Hours)',
    headline18: 'Why Waiting 24 Hours For Geological Telemetry Is Costing Operators Millions',
    narrative18h: 'In the Permian Basin, reservoir dynamics shift by the minute. While old-guard operators wait for overnight 24-hour batch reports, RideWire LLC’s 17-Node AI Matrix decodes, validates, and circuit-breaks anomalies in under 1.8 hours. Speed is not just a metric; it is capital preservation.',
    legacy24hContrast: 'Legacy systems: Batch run at 02:00 AM, engineer reviews at 09:00 AM (31h lag). RideWire: 1.8h continuous verification and real-time dispatch.',
    tacticalChannel: 'LinkedIn Executive',
    selfHealingTrigger: 'COCO Node monitors engagement CTR. If engagement <4.2% within 1.8h, COCO automatically rewrites copy with sharper Permian case studies.',
    metricsTarget: '8,500 Executive Impressions • 34 LP Inquiries'
  },
  {
    day: 2,
    dateStr: 'Day 02',
    cycle18hSlot: 'Cycle 02: The 13=1 Mathematical Truth',
    focusTheme: 'Democratizing Resource Intelligence',
    headline18: '13 Telemetry Sensors. 1 Ground Truth. The End of Fragmented Oilfield Data.',
    narrative18h: 'Public geological databases have existed for decades, but they remain isolated in silos. RideWire’s 13=1 Unity State Framework™ fuses public USGS, state telemetry, and proprietary mechanical sensors into one undeniable operational compass.',
    legacy24hContrast: 'Legacy systems require 4 separate software dashboards and 3 consulting firms. 13=1 delivers unified clarity in real-time.',
    tacticalChannel: 'Subsurface Tech Memo',
    selfHealingTrigger: 'COCO tests dual headline variants (Deterministic Quorum vs. Unified Sensor Truth). Auto-converges on highest converting copy.',
    metricsTarget: '2,200 Technical Downloads • 15 Enterprise Demos'
  },
  {
    day: 3,
    dateStr: 'Day 03',
    cycle18hSlot: 'Cycle 03: DevilsQC & CostShield',
    focusTheme: 'Zero Hallucinations & OPEX Discipline',
    headline18: 'DevilsQC: The <1.8h Circuit Breaker Keeping Autonomous Industrial AI Honest',
    narrative18h: 'Industrial AI cannot afford hallucinations. DevilsQC runs continuous verification loops with strict <1.8h velocity limits, while CostShield dynamically routes workloads to local models, maintaining inference costs under 8% of revenue.',
    legacy24hContrast: 'Legacy enterprise AI burns $120k/month on untamed API tokens. CostShield maintains sovereign, local, lean cost architecture.',
    tacticalChannel: 'Venture Syndicate Brief',
    selfHealingTrigger: 'Self-adjusts targeting between oilfield operators and venture partners based on real-time inbound intent.',
    metricsTarget: '45 Accredited Investor Briefings Scheduled'
  },
  {
    day: 4,
    dateStr: 'Day 04',
    cycle18hSlot: 'Cycle 04: Mapping The Earth',
    focusTheme: 'Subterranean 110 Alignment Vectors',
    headline18: 'Mapping Earth From The Subsurface Out: The 110 Alignment Harmonic Matrix',
    narrative18h: 'We are not guessing where the fractures lie. We map the physical earth using 110 ancient alignment vectors overlaid with real-time pressure transducers and seismic micro-tremors.',
    legacy24hContrast: 'Legacy: Static geological surveys conducted once every 5 years. RideWire: Real-time dynamic crustal deformation mapping.',
    tacticalChannel: 'Global Geological Dispatch',
    selfHealingTrigger: 'COCO dynamically generates high-res 4K geological schematics to accompany social release.',
    metricsTarget: '12,000 Total Industry Reads'
  },
  {
    day: 5,
    dateStr: 'Day 05',
    cycle18hSlot: 'Cycle 05: The Albuquerque Hub',
    focusTheme: 'North Valley Fiduciary Parity',
    headline18: 'Built In New Mexico: Why High-Desert Deep Tech Outpaces Silicon Valley Glitz',
    narrative18h: 'Rooted in North Valley, Albuquerque, RideWire LLC pairs equal 50/50 founder parity with institutional discipline and a 50% net corporate profit allocation charter. Hardware-grounded, venture-ready.',
    legacy24hContrast: 'Overfunded coastal software with zero field hardware experience vs. real Permian basin boots on the ground.',
    tacticalChannel: 'LinkedIn Executive',
    selfHealingTrigger: 'COCO switches geo-targeting to energy corridors: Midland, Houston, Denver, and Albuquerque.',
    metricsTarget: '9,400 Reach • 28 Strategic Partnership Leads'
  }
];
