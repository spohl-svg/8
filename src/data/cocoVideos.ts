export interface CocoVideoAsset {
  id: string;
  title: string;
  cycle: string;
  duration: string;
  aspectRatio: '16:9' | '9:16';
  thumbnailUrl: string;
  videoSrc: string; // playable mp4/webm or animated generative stream
  campaignTheme: string;
  targetAudience: string;
  status: 'READY' | 'STREAMING' | '1.8h ACTIVE';
  description: string;
  metrics: {
    views: number;
    completionRate: string;
    shares: number;
  };
}

export const COCO_VIDEOS_DATA: CocoVideoAsset[] = [
  {
    id: 'coco-vid-01',
    title: '1.8-Hour Velocity Mandate vs 24-Hour Legacy Lag',
    cycle: 'Cycle 01: The 1.8h Mandate',
    duration: '0:34',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    campaignTheme: 'Velocity Dominance',
    targetAudience: 'Permian Basin Operators & VPs of Exploration',
    status: 'READY',
    description: 'Kinematic motion graphic breaking down the multi-million dollar cost of waiting 24 hours for oilfield telemetry while RideWire settles anomaly circuit breakers in under 1.8 hours.',
    metrics: { views: 14820, completionRate: '88.4%', shares: 312 },
  },
  {
    id: 'coco-vid-02',
    title: '13=1 Planetary Consensus: Subsurface Truth',
    cycle: 'Cycle 02: 13=1 Truth',
    duration: '0:42',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    campaignTheme: 'Subsurface 13=1 Sensor Fusion',
    targetAudience: 'Reservoir Engineers & Data Brokers',
    status: 'STREAMING',
    description: 'Visual 3D orbital scan transitioning from outer space into the Rio Grande rift and Delaware basin crustal fissures, demonstrating how 13 distinct telemetry feeds fuse into 1 ground truth.',
    metrics: { views: 22400, completionRate: '91.2%', shares: 645 },
  },
  {
    id: 'coco-vid-03',
    title: 'DevilsQC Vanguard: Real-Time Anomaly Circuit Breaker',
    cycle: 'Cycle 03: DevilsQC & CostShield',
    duration: '0:28',
    aspectRatio: '9:16',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    campaignTheme: 'Zero Hallucinations',
    targetAudience: 'Institutional Investors & Energy CTOs',
    status: 'READY',
    description: 'High-speed vertical mobile sprint showing the DevilsQC automated circuit breaker halting corrupted scada telemetry before it impacts drilling operations.',
    metrics: { views: 18950, completionRate: '84.6%', shares: 420 },
  },
  {
    id: 'coco-vid-04',
    title: 'Mapping Earth: 110 Alignment Harmonic Vectors',
    cycle: 'Cycle 04: Mapping The Earth',
    duration: '0:56',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    campaignTheme: 'Planetary Crustal Harmonics',
    targetAudience: 'Geophysicists & Macro Natural Resource Funds',
    status: '1.8h ACTIVE',
    description: 'Cinematic drone visualization tracking geological fracture lineaments across New Mexico and Texas, synchronized to 12.4Hz to 21.0Hz acoustic crustal frequencies.',
    metrics: { views: 31200, completionRate: '94.1%', shares: 890 },
  },
  {
    id: 'coco-vid-05',
    title: 'North Valley ABQ Hub: High-Desert Deep Tech Parity',
    cycle: 'Cycle 05: Albuquerque Hub',
    duration: '0:38',
    aspectRatio: '9:16',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    campaignTheme: '50/50 Founder Equity & Fiduciary Discipline',
    targetAudience: 'Venture Capital Partners & Strategic Energy LPs',
    status: 'READY',
    description: 'Ground-level dispatch from North Valley, Albuquerque showing hardware transducers, pumpjack telemetry rigs, and the fiduciary balance sheet of RideWire LLC.',
    metrics: { views: 16400, completionRate: '86.7%', shares: 280 },
  },
];
