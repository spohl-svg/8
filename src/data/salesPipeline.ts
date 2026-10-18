export interface AutonomousSalePipeline {
  id: string;
  reportId: string;
  reportTitle: string;
  basin: string;
  format: 'B2B Enterprise License' | 'Technical Article Syndicate' | 'Operator Daily Subscription';
  buyerLead: {
    company: string;
    contactName: string;
    contactEmail: string;
    category: 'E&P Permian Operator' | 'Energy Hedge Fund' | 'Geological Data Broker' | 'Midstream Logistics';
  };
  pricingTier: {
    amount: number;
    currency: string;
    licenseTerms: string;
  };
  stages: {
    driveDiscovery: 'FOUND_IN_DRIVE' | 'PENDING';
    articlePackaging: 'PACKAGED' | 'PROCESSING';
    emailOutreach: 'TRANSMITTED' | 'PENDING';
    b2bContractLock: 'EXECUTED_DIGITALLY' | 'PENDING';
    receiptDelivered: 'RECEIPT_GENERATED' | 'PENDING';
  };
  driveFileId?: string;
  driveFileName: string;
  generatedArticleHeadline: string;
  emailPitchBody: string;
  receiptNumber: string;
  settlementTimestamp: string;
  status: 'COMPLETED_ZERO_HUMAN' | 'EXECUTING_AUTONOMOUS_CYCLE';
}

export const INITIAL_SALES_PIPELINE: AutonomousSalePipeline[] = [
  {
    id: 'pipe-01',
    reportId: 'RPT-110-VEC-01',
    reportTitle: 'Subsurface Permian Fracture Lineaments & 110 Alignment Harmonics',
    basin: 'Permian (Lea & Eddy Counties)',
    format: 'B2B Enterprise License',
    buyerLead: {
      company: 'Permian Basin Horizon E&P Partners LLC',
      contactName: 'Executive VP of Reservoir Exploration',
      contactEmail: 'acquisitions@permian-horizon-energy.com',
      category: 'E&P Permian Operator'
    },
    pricingTier: {
      amount: 14500,
      currency: 'USD',
      licenseTerms: 'Single Basin Multi-Well Predictive Telemetry Rights'
    },
    stages: {
      driveDiscovery: 'FOUND_IN_DRIVE',
      articlePackaging: 'PACKAGED',
      emailOutreach: 'TRANSMITTED',
      b2bContractLock: 'EXECUTED_DIGITALLY',
      receiptDelivered: 'RECEIPT_GENERATED'
    },
    driveFileName: 'RIDEWIRE_PERMIAN_FRACTURE_110VEC_CONFIDENTIAL.gdoc',
    generatedArticleHeadline: 'Permian Subsurface Telemetry: How Acoustic Frequencies Prevent Multi-Million Dollar Casing Collapse',
    emailPitchBody: `Dear Acquisitions & Reservoir Engineering Team,\n\nRideWire LLC & Action Intell has autonomous telemetry surveillance operating across the Lea County fracture boundary. Our 17-node AI matrix synthesized real-time acoustic harmonics (14.2 Hz) identifying critical stress lineaments ahead of conventional 24-hour logs.\n\nWe have secured your commercial license packet in Google Drive. Attached is the digital subscription voucher and corporate dispatch.\n\nRespectfully,\nRideWire LLC Autonomous Sales Machine\nNorth Valley, Albuquerque, NM`,
    receiptNumber: 'RW-REC-2026-88941',
    settlementTimestamp: '2026-09-27T00:18:42Z',
    status: 'COMPLETED_ZERO_HUMAN'
  },
  {
    id: 'pipe-02',
    reportId: 'RPT-110-VEC-02',
    reportTitle: 'San Juan Deep Gas Thermal Plumes & Subterranean Hydrogeology',
    basin: 'San Juan Basin',
    format: 'Technical Article Syndicate',
    buyerLead: {
      company: 'Global Energy Intelligence Media & Research Syndicate',
      contactName: 'Managing Bureau Editor',
      contactEmail: 'syndications@globalenergyintel-bureau.com',
      category: 'Geological Data Broker'
    },
    pricingTier: {
      amount: 4800,
      currency: 'USD',
      licenseTerms: 'Exclusive Global Technical Journaling & Data Rights'
    },
    stages: {
      driveDiscovery: 'FOUND_IN_DRIVE',
      articlePackaging: 'PACKAGED',
      emailOutreach: 'TRANSMITTED',
      b2bContractLock: 'EXECUTED_DIGITALLY',
      receiptDelivered: 'RECEIPT_GENERATED'
    },
    driveFileName: 'SAN_JUAN_COALBED_THERMAL_PLUME_RESEARCH.pdf',
    generatedArticleHeadline: 'Subterranean Geothermal Aquifers: The Hidden Driver of Cretaceous Coalbed Methane Desorption',
    emailPitchBody: `To the Energy Syndicate Editorial Board,\n\nRideWire LLC & Action Intell has completed an empirical study on Fruitland thermal aquifers using 110 Alignment Vectors. This report maps the hydrothermal flow regulating natural gas migration months before decline-curve models.\n\nArticle and syndication license have been packaged from our Google Drive data vault and cleared for commercial distribution.\n\nAutonomous Sales Engine (Zero Human In The Loop)\nRideWire LLC`,
    receiptNumber: 'RW-REC-2026-90412',
    settlementTimestamp: '2026-09-27T00:24:19Z',
    status: 'COMPLETED_ZERO_HUMAN'
  },
  {
    id: 'pipe-03',
    reportId: 'RPT-110-VEC-03',
    reportTitle: 'Global Earth Crustal Pulsing & 13=1 Planetary Quorum',
    basin: 'Global Planetary Grid (Rio Grande Rift Axis)',
    format: 'Operator Daily Subscription',
    buyerLead: {
      company: 'Apex Macro Natural Resources Fund LP',
      contactName: 'Head of Quantitative Energy Commodities',
      contactEmail: 'quant-telemetry@apex-macrofunds.com',
      category: 'Energy Hedge Fund'
    },
    pricingTier: {
      amount: 28000,
      currency: 'USD',
      licenseTerms: 'Quarterly Telemetry Data Feed & Planetary Stress API'
    },
    stages: {
      driveDiscovery: 'FOUND_IN_DRIVE',
      articlePackaging: 'PACKAGED',
      emailOutreach: 'TRANSMITTED',
      b2bContractLock: 'EXECUTED_DIGITALLY',
      receiptDelivered: 'RECEIPT_GENERATED'
    },
    driveFileName: 'GLOBAL_CRUSTAL_PULSING_13_EQUALS_1_MODEL.gdoc',
    generatedArticleHeadline: 'Planetary Earth Tides & Mechanical Pumpjack Stress: A New Quantitative Frontier for Oilfield Yields',
    emailPitchBody: `Apex Macro Commodities Desk,\n\nMechanical pumpjack breakdown follows predictable 12.4-hour lunar-solar crustal tides along the Rio Grande rift and Permian basin. RideWire\'s 13=1 Planetary Quorum synchronizes extraction dynamics to eliminate failure windows.\n\nData package is provisioned in Google Drive with instant zero-touch execution.\n\nRideWire LLC & Action Intell Fiduciary Treasury\nAlbuquerque, New Mexico`,
    receiptNumber: 'RW-REC-2026-92105',
    settlementTimestamp: '2026-09-27T00:39:05Z',
    status: 'COMPLETED_ZERO_HUMAN'
  }
];
