export interface CloudProjectRecord {
  id: string;
  projectName: string;
  projectId: string;
  projectNumber: string;
  provider: 'Google Cloud Platform' | 'Firebase Console' | 'Google AI Studio';
  status: 'ACTIVE' | 'CREDITS_AVAILABLE' | 'PROVISIONED';
  allocatedCredits: string;
  estimatedRemainingBalance: string;
  consoleUrl: string;
  billingAccountHint: string;
  servicesEnabled: string[];
}

export interface DeveloperGrantResource {
  id: string;
  programName: string;
  funder: string;
  fundingValue: string; // e.g. "$2,000 to $100,000 Cloud Credits" or "$50,000 Non-dilutive Grant"
  eligibility: string;
  applicationUrl: string;
  status: 'OPEN & ACCEPTING' | 'FAST-TRACK' | 'ANNUAL COHORT';
  bestFor: string;
  applicationTips: string[];
}

export const USER_CLOUD_PROJECTS: CloudProjectRecord[] = [
  {
    id: 'proj-01',
    projectName: 'RideWire AI Studio Sovereign Core',
    projectId: 'linen-waters-506109-q3',
    projectNumber: '450771773607',
    provider: 'Google Cloud Platform',
    status: 'CREDITS_AVAILABLE',
    allocatedCredits: '$300 Google Cloud Free Trial / $200 Monthly API Tier',
    estimatedRemainingBalance: '$200.00 – $285.40 In Flight Credits',
    consoleUrl: 'https://console.cloud.google.com/billing?project=linen-waters-506109-q3',
    billingAccountHint: 'Linked to s.pohl@ridewires.com primary billing account',
    servicesEnabled: [
      'Cloud Run (Zero-Server Architecture)',
      'Cloud Firestore (Subsurface 13=1 Telemetry Database)',
      'Firebase Auth & Google Workspace OAuth 2.0',
      'Vertex AI & Gemini Flash Multi-Model Telemetry'
    ]
  },
  {
    id: 'proj-02',
    projectName: 'AI Studio Workspace Applet Hub',
    projectId: 'ai-studio-0c13bd3b-5815-4462-a609-8ec9571cb0bc',
    projectNumber: '465629417591',
    provider: 'Google AI Studio',
    status: 'ACTIVE',
    allocatedCredits: 'Daily & Monthly Free Tier Compute Quota (15 RPM / 1M TPM)',
    estimatedRemainingBalance: 'Refreshes Monthly (Zero Direct Billing Draw)',
    consoleUrl: 'https://aistudio.google.com/app/plan_and_billing',
    billingAccountHint: 'Autonomous Developer Sandbox / AI Studio Workspace Applet Tier',
    servicesEnabled: [
      'Gemini 3.8 Flash Streaming Inference',
      'Google Workspace Google Drive v3 Auto-Filing',
      'Gemini Reasoning & Multimodal Telemetry Analysis'
    ]
  },
  {
    id: 'proj-03',
    projectName: 'RideWires Production Domain Routing',
    projectId: 'ridewires-prod-nm',
    projectNumber: '450771-RID-01',
    provider: 'Google Cloud Platform',
    status: 'ACTIVE',
    allocatedCredits: '$200.00 Monthly Free Google Maps Platform Credits',
    estimatedRemainingBalance: '$200.00 recurring credit active every month',
    consoleUrl: 'https://console.cloud.google.com/google/maps-apis/overview',
    billingAccountHint: 'Recurring $200/mo automated credit for Permian GIS Geocoding & Maps',
    servicesEnabled: [
      'Google Maps JavaScript API (Permian Basin Satellite View)',
      'Geocoding API (Wellhead & Tank Battery Coordinates)',
      'Places API (North Valley ABQ Field Transducer Logistics)'
    ]
  }
];

export const STARTUP_DEVELOPER_GRANTS: DeveloperGrantResource[] = [
  {
    id: 'grant-01',
    programName: 'Google for Startups Cloud Program (AI-First Track)',
    funder: 'Google Cloud & Alphabet',
    fundingValue: 'Up to $250,000 in Google Cloud & Vertex AI Credits (Year 1: up to $100k, Year 2: 20% match up to $150k)',
    eligibility: 'Early-stage tech startups founded within 5 years with proprietary AI tech (Perfect for RideWire & Action Intell).',
    applicationUrl: 'https://cloud.google.com/startup',
    status: 'OPEN & ACCEPTING',
    bestFor: 'Hosting all 17 AI nodes, Cloud Run, high-throughput Gemini Pro inference, and big data SCADA processing.',
    applicationTips: [
      'Highlight our 13=1 planetary consensus architecture and 1.8-hour anomaly circuit breaker.',
      'List s.pohl@ridewires.com as founder email with ridewires.com domain.',
      'State that we use Cloud Run, Firestore, and Vertex AI models to process industrial Permian basin telemetry.'
    ]
  },
  {
    id: 'grant-02',
    programName: 'Microsoft for Startups Founders Hub (Azure OpenAI & Compute)',
    funder: 'Microsoft for Startups',
    fundingValue: 'Up to $150,000 in Azure Cloud Credits + $2,500 OpenAI Credits + Free GitHub Enterprise',
    eligibility: 'Any tech startup with an MVP or working prototype. No institutional VC funding required to enter Level 1 ($1,000 - $5,000 instant credits).',
    applicationUrl: 'https://foundershub.startups.microsoft.com',
    status: 'FAST-TRACK',
    bestFor: 'Redundant backup cloud for our open-source weights (DeepSeek, Llama 3.3) and enterprise investor demo hosting.',
    applicationTips: [
      'Instant approval tier grants $1,000 to $5,000 within 48 hours with just a LinkedIn & pitch brief.',
      'Grants free LinkedIn Premium, Microsoft 365, and GitHub Enterprise seats for Steve McCarty and S. Pohl.'
    ]
  },
  {
    id: 'grant-03',
    programName: 'AWS Activate Founders Program',
    funder: 'Amazon Web Services',
    fundingValue: '$1,000 to $25,000 in AWS Cloud Credits + $350 Developer Support Credits',
    eligibility: 'Self-funded / bootstrapped startups with a functional website or working product.',
    applicationUrl: 'https://aws.amazon.com/activate/founders/',
    status: 'OPEN & ACCEPTING',
    bestFor: 'GPU instance hosting (EC2 G5/P4) for heavy seismic 3D rendering and long-term time-series cold storage.',
    applicationTips: [
      'Apply under the "Founders" track (no accelerator code required).',
      'Takes 7-10 business days for automated approval.'
    ]
  },
  {
    id: 'grant-04',
    programName: 'NVIDIA Inception Program (Cutting-Edge AI Hardware & Compute)',
    funder: 'NVIDIA',
    fundingValue: 'Preferred GPU Cloud Pricing, Deep Learning Institute Credits, Hardware Discounts & Investor Intros',
    eligibility: 'AI startups building computer vision, time-series forecasting, or edge AI appliances.',
    applicationUrl: 'https://www.nvidia.com/en-us/startups/',
    status: 'OPEN & ACCEPTING',
    bestFor: 'Edge hardware deployment: Placing NVIDIA Jetson / sensor units directly on Permian pumpjacks for "The Fixer" real-time edge processing.',
    applicationTips: [
      'Emphasize our real-time mechanical vibration sensor (12.4Hz - 21.0Hz) running edge inference.',
      'Gives direct access to NVIDIA venture capital introductions and technical architects.'
    ]
  },
  {
    id: 'grant-05',
    programName: 'New Mexico Small Business Assistance (NMSBA) Program',
    funder: 'Los Alamos National Laboratory (LANL) & Sandia National Laboratories',
    fundingValue: '$20,000 to $40,000 in Non-Dilutive Engineering & Laboratory Assistance (Zero Cost to RideWire)',
    eligibility: 'New Mexico for-profit small businesses (RideWire LLC in North Valley Albuquerque qualifies 100%).',
    applicationUrl: 'https://www.nmsba.org',
    status: 'OPEN & ACCEPTING',
    bestFor: 'Rigorous geological validation: Sandia and Los Alamos scientists test and certify our 110 alignment vectors and Permian seismic telemetry for institutional oilfield operators.',
    applicationTips: [
      'Zero equity taken, 100% free technical support funded by NM state tax credits.',
      'Partner directly with LANL/Sandia geophysicists to stamp our Document Control Binder.'
    ]
  }
];
