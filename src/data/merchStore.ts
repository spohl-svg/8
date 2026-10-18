export interface DropShipProduct {
  id: string;
  name: string;
  category: 'Diagnostic Hardware & Rig Tools' | 'Apparel & Field Gear' | 'Custom Branded Memorabilia' | 'Prints & Posters';
  tagline: string;
  description: string;
  wholesaleCost: number; // What we pay print-on-demand / drop-ship factory
  fairMarketRetailPrice: number; // Fair market retail price
  introductoryRate: number; // Introductory special rate for roughnecks & early supporters
  grossMarginPercent: number; // Profit margin at intro rate
  customizable: boolean; // Can customer put their own rig/company/crew name on it
  mockupImageUrl: string;
  sku: string;
  specs: string[];
  coBrandingOptions: string[];
}

export interface ToolPricingTier {
  tierName: string;
  targetAudience: string;
  retailPrice: string;
  introductorySpecial: string;
  hardwareOrSoftware: string;
  valueJustification: string;
  competitorComparison: string;
}

export const DROP_SHIP_CATALOG: DropShipProduct[] = [
  {
    id: 'tool-01',
    name: 'RideWire "The Fixer" Heavy Rig Diagnostic Transducer & Torque Gauge',
    category: 'Diagnostic Hardware & Rig Tools',
    tagline: 'The Tool to Fix the Fixing: 13=1 Telemetry & Sensor Circuit Validator',
    description: 'Industrial-grade drop-forged alloy multi-wrench and Bluetooth vibration/pressure diagnostic analyzer. Unlike gimmicky $400 tools that do nothing, "The Fixer" directly measures flange torque, pipe wall resonance, and DevilsQC anomaly frequency with LED status rings.',
    wholesaleCost: 28.50,
    fairMarketRetailPrice: 189.00,
    introductoryRate: 89.00,
    grossMarginPercent: 68,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-FIXER-TOOL-V1',
    specs: [
      'Alloy steel body drop-tested to 20 feet',
      'Dual optical & acoustic vibration sensor probe (12.4Hz - 21.0Hz)',
      'Subsurface pressure & torque calibration display',
      'Pairs with RideWire Mobile & Action Intell SCADA'
    ],
    coBrandingOptions: [
      'RideWire LLC & Action Intell Official Emblem',
      'Customer / Crew Custom Laser Engraving (e.g. "Pohl & McCarty Crew #1")',
      'Permian Basin Operator Syndicate Co-Brand'
    ]
  },
  {
    id: 'tool-02',
    name: 'Wrenchies Heavy Canvas Rig Jacket & High-Torque Field Hoodie',
    category: 'Apparel & Field Gear',
    tagline: '12oz Duck Canvas • Flame-Resistant Finish • Co-Branded Chest Patch',
    description: 'Built for freezing Delaware basin winter winds and desert sun. Heavyweight triple-stitched canvas jacket with high-brass zippers and customizable company patch pocket.',
    wholesaleCost: 24.00,
    fairMarketRetailPrice: 110.00,
    introductoryRate: 59.00,
    grossMarginPercent: 59,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-CANVAS-JKT-01',
    specs: [
      '12oz cotton duck water-repellent shell',
      'Quilted flannel lining with internal phone/radio pouch',
      'Reinforced elbows and tool pockets',
      'Embroidered chest and full-back patch'
    ],
    coBrandingOptions: [
      'RideWire Eagle & Wrench Crest',
      'Custom Operator Rig Name & Unit Number',
      'Wrenchies "Keep \'Em Pumpin\'" WWII Emblem'
    ]
  },
  {
    id: 'tool-03',
    name: 'Delaware Basin Heavy Trucker Snapback & Rig Cap',
    category: 'Apparel & Field Gear',
    tagline: 'Structured 5-Panel with Laser-Etched Genuine Leather Patch',
    description: 'Premium breathable mesh-back trucker hat featuring a genuine oil-tanned leather patch laser-etched with RideWire or your own custom brand/rig logo.',
    wholesaleCost: 6.80,
    fairMarketRetailPrice: 38.00,
    introductoryRate: 22.00,
    grossMarginPercent: 69,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-CAP-LEATHER-01',
    specs: [
      'Heavy cotton twill front, breathable mesh back',
      'Genuine full-grain oil-tanned leather badge',
      'High-contrast brass eyelets and snapback closure',
      'Sweat-wicking interior band'
    ],
    coBrandingOptions: [
      'RideWire "13=1" Planetary Consensus Stamp',
      'Custom Crew Name / Individual Call-Sign',
      'Permian Roughnecks Association Badge'
    ]
  },
  {
    id: 'tool-04',
    name: '32oz Vacuum-Insulated Titanium-Coated Rig Flask & Thermos',
    category: 'Custom Branded Memorabilia',
    tagline: 'Keeps Ice Cold 48h / Piping Hot 24h Under Permian 115°F Heat',
    description: 'Double-wall 18/8 food-grade stainless steel with heavy powder coat. Survives drops onto steel grating and rough truck beds.',
    wholesaleCost: 8.50,
    fairMarketRetailPrice: 48.00,
    introductoryRate: 28.00,
    grossMarginPercent: 70,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-THERM-32OZ',
    specs: [
      'Triple-insulated copper lining',
      'Spill-proof magnetic chug cap & carry handle',
      'Laser-etched high-contrast vector art',
      'BPA-free & dishwasher safe'
    ],
    coBrandingOptions: [
      'RideWire LLC & Action Intell Dual Shield',
      'Personalized Roughneck Name & Well API#',
      'DevilsQC 1.8h Anomaly Seal'
    ]
  },
  {
    id: 'tool-05',
    name: 'Award-Winning WWII Nose Art & AI Sovereign Museum-Grade Lithograph (24x36)',
    category: 'Prints & Posters',
    tagline: 'Heavy 300gsm Rag Cotton Paper • Archival Pigment Inks • Matte Finish',
    description: 'The $1.2M Metropolis & WWII Wrenchies inspired fine-art print. Shipped in reinforced heavy mailing tubes. Perfect for field offices, mancaves, and boardroom walls.',
    wholesaleCost: 7.20,
    fairMarketRetailPrice: 65.00,
    introductoryRate: 35.00,
    grossMarginPercent: 79,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-POSTER-LITHO-36',
    specs: [
      'Museum-grade 300 gsm acid-free rag paper',
      'Archival 12-color giclée ink process',
      'Fingerprint-resistant velvet matte coating',
      'Hand-numbered limited series certificate'
    ],
    coBrandingOptions: [
      'Official RideWire Document Control Binder Stamp',
      'Custom Operator Dedication Plate',
      '50/50 Equity Parity Signature Series'
    ]
  },
  {
    id: 'tool-06',
    name: 'Heavy Duty 3M Vinyl Decal & Rig Hard-Hat Sticker Pack (10-Pack)',
    category: 'Custom Branded Memorabilia',
    tagline: 'UV-Proof • Oil & Diesel Resistant • Aggressive Adhesion',
    description: 'Die-cut vinyl stickers engineered for drill pipe, hard hats, toolboxes, and truck tailgates. Does not peel, fade, or blister when exposed to crude oil or solvent wash.',
    wholesaleCost: 2.10,
    fairMarketRetailPrice: 24.00,
    introductoryRate: 12.00,
    grossMarginPercent: 82,
    customizable: true,
    mockupImageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    sku: 'RW-STICKER-10PK',
    specs: [
      '6 mil ultra-tack outdoor cast vinyl',
      'Gloss lamination protects against diesel, acetone & sun',
      '10 unique vector designs per pack',
      'Custom crew name printed on 2 special stickers'
    ],
    coBrandingOptions: [
      'RideWire "13=1" & DevilsQC Hard Hat Badges',
      'Custom Rig Crew Identification',
      '"The Fixer: We Fix What Others Broke"'
    ]
  }
];

export const TOOL_FAIR_PRICE_ANALYSIS: ToolPricingTier[] = [
  {
    tierName: 'Scam / Empty Gimmick Tools (The "Do Nothing" Market)',
    targetAudience: 'Unsuspecting hobbyists & desperate mechanics',
    retailPrice: '$250.00 – $499.00',
    introductorySpecial: 'None (Fake "50% off" countdown timers)',
    hardwareOrSoftware: 'Plastic shell with flashing dummy LEDs & generic OBD2 scanner',
    valueJustification: 'Zero real value. Uses predatory hype marketing, provides zero diagnostic consensus or telemetry accuracy.',
    competitorComparison: 'Expensive paperweights that break in 3 months and offer zero calibration support.'
  },
  {
    tierName: 'RideWire "The Fixer" Introductory Crew Rate (FAIR PRICE)',
    targetAudience: 'Working roughnecks, independent mechanics, field operators',
    retailPrice: '$189.00',
    introductorySpecial: '$89.00 (Limited Early Run)',
    hardwareOrSoftware: 'Drop-forged alloy steel multi-tool + Bluetooth resonance sensor + mobile app',
    valueJustification: 'Fair pricing rule: 3x wholesale build cost ($28.50 × 3 = $85.50). Pays for itself on day 1 by preventing a single false valve replacement or broken casing bolt.',
    competitorComparison: 'Honest utility. High-strength physical steel + real 13=1 sensor integration. Custom engraved with your crew name.'
  },
  {
    tierName: 'RideWire Enterprise Operator Diagnostic Station',
    targetAudience: 'Energy syndicates, Permian operators, drilling contractors',
    retailPrice: '$485.00',
    introductorySpecial: '$249.00 (Introductory Pilot)',
    hardwareOrSoftware: 'Multi-tool + 4 magnetic telemetry pods + DevilsQC 1.8h cloud dashboard license',
    valueJustification: 'Replaces $12,000 legacy Baker Hughes/Schlumberger proprietary diagnostic scanners with open-source telemetry.',
    competitorComparison: 'Saves operators $18,000+ per rig per year with zero recurring mandatory extortion subscriptions.'
  }
];
