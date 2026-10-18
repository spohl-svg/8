export interface DebutArtSchoolDoctrine {
  id: string;
  schoolName: string;
  historicDebutYear: string;
  historicImpact: string;
  whyItMakesUsMostWanted: string; // The core debut trigger
  visualCodesForRideWire: string; // Exact physical visual language for RideWire
  debutPosterConcepts: {
    title: string;
    tagline: string;
    hook: string;
    palette: string;
    compositionPrompt: string;
  }[];
}

export const DEBUT_ART_SCHOOLS: DebutArtSchoolDoctrine[] = [
  {
    id: 'school-01',
    schoolName: 'Vkhutemas & Constructivist Steel School',
    historicDebutYear: '1920s Moscow & Berlin Industrial Debut',
    historicImpact: 'Replaced ornamental European luxury with raw industrial steel, functional machinery, and massive worker solidarity. Spawned the greatest recruitment and cultural fervor in 20th century history.',
    whyItMakesUsMostWanted: 'Makes RideWire look like an unshakeable technological titan rather than a fragile software startup. Roughnecks and energy investors are drawn to raw industrial competence, hard angles, and physical dominance.',
    visualCodesForRideWire: 'Drop-forged carbon steel, 22-degree diagonal vector lines, hydraulic pressure gauges, pumpjack counterweights, and Permian red rock silhouette. Zero pastel colors, zero decorative curls.',
    debutPosterConcepts: [
      {
        title: 'THE STEEL CONSENSUS: 13 BECOMES 1',
        tagline: 'WE DO NOT GUESS SUBSURFACE PRESSURE. WE ENFORCE IT.',
        hook: 'Towering pumpjack walking beam thrusting skyward at 22 degrees against an obsidian sky, backlit by glowing sulfur-amber transducer telemetry.',
        palette: 'Permian Red Ochre (#9E2A2B), Machine Steel Graphite (#1A1A1A), Transducer Amber (#F4A261)',
        compositionPrompt: 'Heroic low-angle constructivist industrial poster. Massive Permian pumpjack steel walking beam slicing across frame at 22-degree diagonal. Foreground: heavy-duty spud wrench and high-pressure flange with glowing digital telemetry circuit lines. High-contrast limited 3-color palette (rust ochre, graphite, electrical amber). Authentic 1920s heavy offset lithograph texture, sharp angular geometry, bold constructivist slab typography.'
      },
      {
        title: 'THE 108-MINUTE CIRCUIT BREAKER',
        tagline: 'THE DEVIL LIVES IN 24-HOUR LAG. DEVILSQC STOPS IT IN 1.8 HOURS.',
        hook: 'A massive industrial breaker switch shearing a glowing corrupted SCADA wave in two, restoring pure laminar oil telemetry.',
        palette: 'Signal Sulfur Yellow (#E9C46A), Carbon Black (#101010), Deep Cyan Galvanic (#2A9D8F)',
        compositionPrompt: 'Bold constructivist industrial debut poster. A heavy steel industrial electrical knife switch snapping shut, severing a red corrupted anomaly waveform into calm cyan telemetry vectors. Hard geometric angles, stark silhouette of Delaware basin drilling rig in background, zero soft gradients, authentic screen-print paper tooth.'
      }
    ]
  },
  {
    id: 'school-02',
    schoolName: 'Weimar Bauhaus & High-Precision Telemetry School',
    historicDebutYear: '1919 – 1933 Dessau Geometric Revolution',
    historicImpact: 'Eliminated all decorative nonsense in favor of mathematical perfection, grid systems, and pure structural utility. Everything that is famous in modern engineering design traces back to Bauhaus.',
    whyItMakesUsMostWanted: 'Signals institutional authority and Swiss-grade mathematical precision to Tier-1 energy funds, sovereign wealth investors, and major E&P operators. It screams "this technology is scientifically flawless."',
    visualCodesForRideWire: 'Strict mathematical grid, geometric circle-and-line vector harmonies, cross-sectional subsurface strata diagrams, monochromatic precision with single cadmium-orange telemetry focal point.',
    debutPosterConcepts: [
      {
        title: 'THE 110 ALIGNMENT HARMONIC GRID',
        tagline: 'THE PLANET SPEAKS IN 12.4 HZ. RIDEWIRE IS THE RECEIVER.',
        hook: 'Subsurface Permian Basin cross-section broken down into pure geometric acoustic harmonics and fault-line vector geometry.',
        palette: 'Technical Blueprint Navy (#1D3557), Desert Bone Sand (#F1FAEE), Cadmium Telemetry Orange (#E76F51)',
        compositionPrompt: 'Bauhaus high-precision technical debut poster. Strict Swiss grid layout showing a geological cross-section of Delaware Basin strata rendered in clean geometric vector lines. 110 harmonic alignment vectors radiating from wellhead coordinate. Clean circular acoustic wave rings (12.4Hz to 21.0Hz). Monochromatic indigo and off-white with piercing cadmium-orange sensor node. Museum-grade archival technical print.'
      }
    ]
  },
  {
    id: 'school-03',
    schoolName: 'WWII Flightline & Heavy Rig "Rosie & Wrenchie" Morale School',
    historicDebutYear: '1942 – 1945 Aircraft Nose-Art & Ordnance Guild',
    historicImpact: 'The morale art that won WWII. Unified 16 million workers and soldiers behind raw mechanical pride. Created the most collectible and emotionally beloved commercial art in American history.',
    whyItMakesUsMostWanted: 'Instantly wins the hearts of the field mechanics, roughnecks, and toolpushers who actually run the Permian Basin. They despise Silicon Valley fluff—they revere blue-collar defiance and authentic grease-and-wrench brotherhood.',
    visualCodesForRideWire: 'Leather bomber patches, stencil spray-paint numbers, heavy canvas duck workwear, pneumatic torque wrenches, diesel-oil smudges, and unapologetic American industrial defiance.',
    debutPosterConcepts: [
      {
        title: 'WRENCHIES OF THE PERMIAN: WE FIX WHAT OTHERS BROKE',
        tagline: 'KEEP \'EM PUMPIN\' • 24/7/365 UNBREAKABLE FIELD TELEMETRY',
        hook: 'Gritty roughneck with a heavy torque wrench grinning with quiet pride beside a roaring Delaware basin wellhead, certified with Document Control Stamp.',
        palette: 'Vintage Khaki Olive (#386641), Distressed Zinc White (#F2E8CF), Texas Crude Ochre (#BC4749)',
        compositionPrompt: '1940s wartime nose-art morale debut poster. A rugged oilfield Wrenchie in oil-stained duck canvas jacket holding a heavy steel pneumatic wrench over shoulder with quiet confidence. Background shows a roaring pumpjack under sunset desert clouds. Authentic gouache painting style, hand-stenciled serial numbers "RIDEWIRE-NM-13=1", weathered hangar wall paper texture, zero modern CGI sheen.'
      },
      {
        title: 'THE 50/50 EQUITY COMPACT',
        tagline: 'TWO FOUNDERS. ONE VECTOR. ZERO DILUTION NONSENSE.',
        hook: 'Two heavy industrial steel gears interlocking with perfect 1.000 tolerance, forged under the high-desert Albuquerque sun.',
        palette: 'Forged Anvil Steel (#2B2D42), High-Desert Copper (#D4A373), Deep Void (#0B090A)',
        compositionPrompt: 'Heavy American industrial propaganda debut poster. Two monolithic drop-forged steel spur gears interlocking with razor precision, labeled "POHL" and "MCCARTY", driving a massive planetary telemetry shaft. Heroic upward angle, dramatic chiaroscuro foundry light, bold slab-serif typography "HONOR • EQUITY • CONSENSUS", authentic vintage silkscreen print.'
      }
    ]
  }
];
