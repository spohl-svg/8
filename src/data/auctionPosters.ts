export interface RecordAuctionPoster {
  id: string;
  title: string;
  year: number;
  artistOrDesigner: string;
  auctionHammerPrice: string;
  auctionDateOrHouse: string;
  category: 'Sci-Fi Classic' | 'Universal Horror' | 'Silent Film Expressionism' | 'Propaganda & Modern' | 'Rock & Cultural';
  imageUrl: string;
  psychologicalHook: string; // The deep human emotional reaction trigger
  visualArchitecture: string; // Why it's award winning / museum grade
  aiReplicationPromptRules: string; // How AI Media can achieve this every time
  brandApplication: string; // How RideWire / Action Intell applies it for roughnecks & investors
}

export const MOST_EXPENSIVE_POSTERS_DATA: RecordAuctionPoster[] = [
  {
    id: 'exp-01',
    title: 'Metropolis (3-Sheet German Release)',
    year: 1927,
    artistOrDesigner: 'Heinz Schulz-Neudamm',
    auctionHammerPrice: '$690,000 – $1,200,000 (Record Valuation)',
    auctionDateOrHouse: 'Reel Poster Gallery / London Collector Quorum',
    category: 'Silent Film Expressionism',
    // Architectural Art Deco geometric monolith
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Existential Awe & The Clash of Humanity vs Machine. The monolithic verticality triggers primal feelings of towering power, impending destiny, and technological transcendence.',
    visualArchitecture: 'Art Deco geometric skyscrapers converging upwards toward the glowing metallic humanoid Machine-Man (Maschinenmensch). Monochromatic bronze, charcoal, and ochre with sharp diagonal typography.',
    aiReplicationPromptRules: 'Enforce single-point upward forced perspective (75-degree angle), 3-color limited palette (metallic ochre, graphite, stark amber backlight), avoid busy clutter, use constructivist geometric architectural planes.',
    brandApplication: 'RideWire Subsurface Matrix: Replaces the industrial dystopia with our 13=1 Planetary Consensus and 110 Alignment Vectors towering above the Permian basin.'
  },
  {
    id: 'exp-02',
    title: 'Dracula (Style A One-Sheet)',
    year: 1931,
    artistOrDesigner: 'Karoly Grosz (Universal Art Director)',
    auctionHammerPrice: '$525,800',
    auctionDateOrHouse: 'Heritage Auctions, Dallas TX',
    category: 'Universal Horror',
    // Dark gothic architecture & high-contrast shadow chiaroscuro
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Hypnotic Dominance & Unspoken Danger. The piercing gaze directly engages the viewer’s amygdala — impossible to scroll past without freezing attention.',
    visualArchitecture: 'Looming green-tinted spectral portrait dominating the upper two-thirds, juxtaposed against high-contrast theatrical lemon-yellow typography and bottom vignette of vulnerable mortal victims.',
    aiReplicationPromptRules: 'Apply the "Dominant Gaze" rule: Subject face occupies 45% of canvas, eyes dead-center on upper third intersection, high chiaroscuro under-lighting, emerald green split with warm cadmium accents.',
    brandApplication: 'DevilsQC Vanguard Circuit Breaker: Commands immediate visceral respect — halting anomalies under 1.8h with unwavering watchful vigilance over SCADA telemetry.'
  },
  {
    id: 'exp-03',
    title: 'The Mummy (Original Lithograph)',
    year: 1932,
    artistOrDesigner: 'Karoly Grosz',
    auctionHammerPrice: '$435,500 – $453,500',
    auctionDateOrHouse: 'Sotheby\'s New York',
    category: 'Universal Horror',
    // Authentic desert sandstone strata & ancient geology
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Ancient Secrets & Entombed Truth. The fear and fascination of buried knowledge waiting thousands of years to awaken.',
    visualArchitecture: 'Terracotta and desert-ochre earthen tones. Textured ancient papyrus grain texture, dynamic diagonal brush strokes of Boris Karloff’s wrapped visage.',
    aiReplicationPromptRules: 'Incorporate authentic organic mineral textures (desert sand, distressed zinc litho grain), use asymmetrical dramatic diagonal tension, prioritize emotional dread over physical gore.',
    brandApplication: 'Subsurface Geological Truth: Translates ancient strata and Permian sedimentary rock secrets into undeniable modern telemetry consensus.'
  },
  {
    id: 'exp-04',
    title: 'Frankenstein (Style A One-Sheet)',
    year: 1931,
    artistOrDesigner: 'Universal Pictures Studio Art Guild',
    auctionHammerPrice: '$358,500',
    auctionDateOrHouse: 'Heritage Auctions',
    category: 'Universal Horror',
    // High-voltage electrical spark & galvanic energy
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Raw Mechanical Creation & Unbridled Energy. Triggers human empathy blended with primal terror of technological life spark.',
    visualArchitecture: 'Electric galvanic cyan background with violent yellow lightning bolts slashing across a towering blocky silhouette. Bold slab-serif typography.',
    aiReplicationPromptRules: 'Electrical volumetric lightning, stark silhouette thresholding, primary color clash (cobalt blue vs lightning sulfur yellow), no soft airbrushing — strict hard-edge lithography.',
    brandApplication: 'Field Transducers & North Valley Hub: The moment raw high-voltage field telemetry ignites the 17-node AI matrix into autonomous life.'
  },
  {
    id: 'exp-05',
    title: 'Bride of Frankenstein (Style D One-Sheet)',
    year: 1935,
    artistOrDesigner: 'Karoly Grosz',
    auctionHammerPrice: '$334,600',
    auctionDateOrHouse: 'Heritage Auctions',
    category: 'Universal Horror',
    // Lightning electrical storm & high contrast monochrome
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Defiant Beauty & Electric Shock. The unforgettable silhouette of Elsa Lanchester with lightning-streaked hair combines elegance with lethal energy.',
    visualArchitecture: 'Dynamic S-curve lightning hair silhouette cutting through midnight black space, framed by bold German-Expressionist typography angled at 15 degrees.',
    aiReplicationPromptRules: 'Emphasize high-contrast profile contouring, stark black negative space (>40% of canvas), iconic silhouette recognition test (readable at 16x16 thumbnail size).',
    brandApplication: 'Autonomous COCO Marketing Machine: Bold, unmistakable branding presence that stops enterprise buyers in their tracks within 0.4 seconds.'
  },
  {
    id: 'exp-06',
    title: 'The Black Cat (Style B One-Sheet)',
    year: 1934,
    artistOrDesigner: 'Universal Art Guild (Bela Lugosi & Boris Karloff)',
    auctionHammerPrice: '$334,600',
    auctionDateOrHouse: 'Heritage Auctions',
    category: 'Universal Horror',
    // Heavy industrial steel & high-contrast dark tones
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    psychologicalHook: 'Psychological Duality & Strategic Rivalry. Two opposing titans locked in a battle of intellect and will.',
    visualArchitecture: 'Split-canvas diagonal tension with overlapping profile shadows, heavy woodcut ink relief, and blood-orange typography.',
    aiReplicationPromptRules: 'Employ rule of opposing diagonals, dual-tone split complementary palette, heavy ink block printing grain, zero gradient smoothing.',
    brandApplication: '50/50 Founder Equity Parity (S. Pohl & Steve McCarty): Balanced institutional governance where opposing vectors form indestructible structural unity.'
  }
];

export interface AwardWinningAiRule {
  step: string;
  title: string;
  secret: string;
  humanEmotionalTrigger: string;
  aiPromptImplementation: string;
  failureModeAvoided: string; // What makes amateur AI art look cheap ("AI slop")
}

export const AWARD_WINNING_AI_RULES: AwardWinningAiRule[] = [
  {
    step: 'RULE 01',
    title: 'The 3-Second Amygdala Spike (Visual Dominance)',
    secret: 'Award-winning posters never ask the viewer to search for the subject. A single heroic silhouette or piercing gaze occupies the primary focal node immediately.',
    humanEmotionalTrigger: 'Fight-or-flight freeze reflex and social gaze-tracking. Humans instinctively lock eyes with strong silhouettes and high-contrast facial contours.',
    aiPromptImplementation: '"Heroic single-subject centered on upper Golden Ratio intersection, extreme silhouette legibility at thumbnail scale, 45% negative space in obsidian black, razor-sharp edge contrast."',
    failureModeAvoided: 'Avoids "AI Slop" — hyper-cluttered busy scenes with 50 competing elements, muddy backgrounds, and no clear focal hierarchy.'
  },
  {
    step: 'RULE 02',
    title: 'Strict Tri-Chromatic Discipline (The 3-Color Rule)',
    secret: 'The highest-auction posters in history (Metropolis, Dracula, War Bonds) used 2 to 3 ink plates max due to lithograph constraints. This forced extreme chromatic impact.',
    humanEmotionalTrigger: 'Cognitive ease and memory retention. The human brain catalogs simple, stark color relationships (e.g. Ochre + Charcoal + Blood Orange) 700% faster than rainbows.',
    aiPromptImplementation: '"Strict three-tone limited palette: Terracotta copper #C85A17, weathered desert sand #D2B48C, and deep void charcoal #141414. Flat ink lithography wash, zero rainbow aberration."',
    failureModeAvoided: 'Eliminates plastic oversaturated rainbow gradients and generic neon AI glow that instantly signals cheap automated filters.'
  },
  {
    step: 'RULE 03',
    title: 'Grounded Tangible Texture (Physical Tactility)',
    secret: 'True value lives in physical presence. Museum-grade posters have zinc-plate tooth, deckled cotton paper grain, ink bleed, and subtle pressure debossing.',
    humanEmotionalTrigger: 'Nostalgia, craftsmanship respect, and institutional permanence. It feels like an authentic artifact rescued from a 1940s flight hangar or 1920s cinema vault.',
    aiPromptImplementation: '"Authentic vintage 1940s offset lithograph texture, subtle rag cotton paper grain, vintage halftone dot screening, organic ink absorption, archival vintage poster print."',
    failureModeAvoided: 'Banishes the greasy, hyper-smooth plastic 3D CGI airbrushed sheen that plagues amateur Midjourney/DALL-E generations.'
  },
  {
    step: 'RULE 04',
    title: 'Constructivist Dynamic Diagonal Tension (The 15° Slant)',
    secret: 'Static horizontal layouts feel passive. Award-winning posters use 15-degree to 35-degree diagonal vector thrusts (arrows, beams of light, raised wrenches, soaring planes).',
    humanEmotionalTrigger: 'Urgency, motion, and triumph. Primal kinetic response that compels the viewer to take action or join the cause.',
    aiPromptImplementation: '"Strong diagonal compositional thrust from bottom-left to top-right at 22-degree angle, dramatic upward motion, constructivist propaganda poster geometry, heroic low-angle camera perspective."',
    failureModeAvoided: 'Prevents flat, boring centered portrait poses that feel like passport photos or lifeless product catalogs.'
  },
  {
    step: 'RULE 05',
    title: 'Emotional Archetype Storytelling (The "Us Against the Void")',
    secret: 'Every poster that sold for $300K+ told a complete myth in one frame: The lone scientist conquering the lightning, the Wrenchie keeping the engine roaring, the worker building the future.',
    humanEmotionalTrigger: 'Tribal pride, worker solidarity, and legendary ambition. It makes the viewer feel like an elite insider in a monumental movement.',
    aiPromptImplementation: '"Story-driven character portrayal: A gritty, resolute Permian oilfield mechanic with oil-stained canvas workwear and steel wrench, smiling with quiet defiance under high-desert sun, legendary aura."',
    failureModeAvoided: 'Stops meaningless decorative generic models and replaces them with authentic character, grit, and purpose.'
  }
];
