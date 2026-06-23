const projectsData = [
  {
    id: 1,
    title: "Aetheria Cosmetics",
    category: "Brand Identity & Packaging",
    client: "Aetheria Beauty",
    year: "2026",
    layoutType: "wide",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Premium visual identity and luxury packaging design for a holistic skincare brand. The project features clean typography, a warm color palette, and gold-foiled tactile print finishes.",
    details: "Logo design, bottle and box packaging, typography guidelines, brand strategy, social media kit."
  },
  {
    id: 2,
    title: "Solstice Magazine",
    category: "Editorial & Layout Design",
    client: "Solstice Publishing",
    year: "2025",
    layoutType: "standard",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A complete redesign of an architecture and design publication. Grid systems, custom headlines, and large white space bring focus to high-end architectural works.",
    details: "Magazine layout, typography hierarchy, cover design, prepress curation, paper stock consultation."
  },
  {
    id: 3,
    title: "Komorebi Tea Co.",
    category: "Packaging & Illustration",
    client: "Komorebi Group",
    year: "2026",
    layoutType: "accent",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1598063414123-d7fc146c8fa8?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Eco-friendly, hand-illustrated packaging for organic Japanese matcha and loose-leaf teas. The design reflects the light filtering through trees.",
    details: "Custom illustrations, box die-cuts, label typography, material sourcing, sustainable design."
  },
  {
    id: 4,
    title: "Neo-Grotesk Typeface",
    category: "Typography Design",
    client: "Personal Project",
    year: "2025",
    layoutType: "tall",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A custom display sans-serif font designed for modern editorial layouts. Features heavy ink traps, high-contrast curves, and a wide posture.",
    details: "Glyph set creation, kerning pairs, web font conversion, specimen sheet poster design."
  },
  {
    id: 5,
    title: "Framer's Guild",
    category: "Brand Identity",
    client: "Framer's Guild Studio",
    year: "2026",
    layoutType: "standard",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Minimalist visual identity and website design for a workshop of modern woodworking artisans. Leverages woodgrain textures and robust structural grids.",
    details: "Logo suite, stationery design, digital guidelines, responsive website design."
  },
  {
    id: 6,
    title: "Vortex Music Festival",
    category: "Key Art & Motion Design",
    client: "Vortex Events",
    year: "2025",
    layoutType: "wide",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600"
    ],
    description: "High-energy poster series and digital promotional assets for an electronic music festival. Animated visual loops interact with heavy typography.",
    details: "Key art creation, typography animation, poster printing, event merchandise design."
  },
  {
    id: 7,
    title: "Verdant Estate",
    category: "Branding & Signage",
    client: "Verdant Realty",
    year: "2025",
    layoutType: "standard",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Sophisticated and classic branding for a luxury real estate development company. Features blind-embossed stationery and architectural site signage.",
    details: "Crest design, letterpress business cards, outdoor signs, brochure layout."
  },
  {
    id: 8,
    title: "Aero Wearable",
    category: "UI/UX & App Design",
    client: "Aero Tech Inc.",
    year: "2026",
    layoutType: "tall",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Design of a mobile application interface for tracking bio-metric performance from wearable sensors, emphasizing readability on the move.",
    details: "Wireframing, UI style guide, dark mode layout, interaction prototyping."
  },
  {
    id: 9,
    title: "L'Obsidienne",
    category: "Luxury Packaging",
    client: "Maison de Parfum",
    year: "2026",
    layoutType: "wide",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Geometric glass bottle design and luxury case structure for a unisex, dark-themed fragrance. Combines black obsidian glass with embossed cream sleeves.",
    details: "3D rendering art direction, box structure, typography lockup, foil stamp printing."
  },
  {
    id: 10,
    title: "Mantra Cafe",
    category: "Branding & Collateral",
    client: "Mantra Coffee Co.",
    year: "2025",
    layoutType: "standard",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Warm, inviting visual identity for a craft coffee shop and roastery. Includes custom coffee bag labels, paper cups, menus, and shop facade mockups.",
    details: "Iconography, color scheme, stamp designs, takeaway cup styling, interior mural assets."
  },
  {
    id: 11,
    title: "Chronos Watch",
    category: "Art Direction & Web Layout",
    client: "Chronos Horology",
    year: "2026",
    layoutType: "accent",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Creative direction and editorial typography layout for a high-end watchmaker's catalog and landing page. Minimalist design highlight.",
    details: "Grid framework, lookbook layout, UI/UX concept, photographic styling guidelines."
  },
  {
    id: 12,
    title: "Helix Biotech",
    category: "Corporate Identity",
    client: "Helix Research Lab",
    year: "2025",
    layoutType: "standard",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A clean, modern brand identity system for a cutting-edge genetics research facility. Focuses on data density and clear information architecture.",
    details: "Logo design, presentation deck design, scientific poster layout guidelines."
  },
  {
    id: 13,
    title: "Atlas Travel Guide",
    category: "Book Design & Maps",
    client: "Atlas Press",
    year: "2025",
    layoutType: "tall",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Cover design and interior layouts for a series of pocket travel guides, with hand-drawn minimalist maps and a bespoke travel icon set.",
    details: "Cover illustration, typesetting, custom map rendering, color coding by country."
  },
  {
    id: 14,
    title: "Lunar Cider",
    category: "Packaging & Illustration",
    client: "Lunar Brewing",
    year: "2026",
    layoutType: "wide",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1528823872057-9c018a7a72b5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1566980789828-21127e72784d?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Mystical, night-sky-themed illustrations and labels for a boutique microbrewery cider. Gold foil detailing on dark matte paper wraps.",
    details: "Label illustrations, packaging palette, typography layouts, carton box prints."
  },
  {
    id: 15,
    title: "Aura Wellness App",
    category: "UI/UX Design",
    client: "Aura Life",
    year: "2026",
    layoutType: "standard",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A soothing, visual-heavy design for a mental wellness app. The layout uses gradient blurs, soft shapes, and highly legible typography.",
    details: "Figma wireframes, interaction animations, custom SVG icons, components system."
  },
  {
    id: 16,
    title: "Zettabyte Studio",
    category: "Kinetic Typography",
    client: "Zettabyte Co.",
    year: "2025",
    layoutType: "standard",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Creative direction and title design for an indie tech studio. Relies on digital noise, bold grids, and fast-paced text transitions.",
    details: "Title sequence, logo animation, website header animation, brand deck."
  },
  {
    id: 17,
    title: "Hana Florist",
    category: "Visual Identity",
    client: "Hana Botanicals",
    year: "2026",
    layoutType: "accent",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600"
    ],
    description: "An elegant, botanically inspired brand system utilizing eco-friendly, biodegradable papers, textured stamps, and graceful organic line illustrations.",
    details: "Custom monoline emblem, business card stamps, wrapping paper pattern, brand site design."
  },
  {
    id: 18,
    title: "Oasis Vinyl Records",
    category: "Album Cover Art",
    client: "Oasis Collective",
    year: "2025",
    layoutType: "tall",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1539628399243-73401140326b?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1484755560695-a4c7300c5c29?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Art direction, sleeve packaging design, and visual art for a vinyl release by a synth-wave collective. Retro-futuristic typography and glass textures.",
    details: "Vinyl sleeve layout, label art, promotional poster design, digital streaming graphics."
  },
  {
    id: 19,
    title: "Abstract Realities",
    category: "Exhibition Poster Curation",
    client: "Modern Gallery NYC",
    year: "2025",
    layoutType: "wide",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Bespoke print design and poster layout for an abstract art collection. Playing with layering, gradients, and contrasting serif headlines.",
    details: "Exhibition posters, gallery guide pamphlet, digital billboard ads, invitation card design."
  },
  {
    id: 20,
    title: "Ignis Hot Sauce",
    category: "Packaging Design",
    client: "Ignis Foods",
    year: "2026",
    layoutType: "standard",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1587981424418-c2b6279f000b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1594972108742-02d547b5833d?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Bright, retro-inspired labels and custom box packaging for a line of artisanal hot sauces. Playful typography and hot contrast coloring.",
    details: "Logo illustration, sticker design, carton design, website style setup."
  },
  {
    id: 21,
    title: "Nova Craft Brewery",
    category: "Can Label Design",
    client: "Nova Brewing Co.",
    year: "2026",
    layoutType: "tall",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1608270176050-1b77582173f9?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Psychedelic and retro layouts for a line of craft IPA cans. Custom typography wraps around the cylindrical cans with eye-catching colors.",
    details: "IPAs can graphics, cardboard case wrapper, website product visuals."
  },
  {
    id: 22,
    title: "Studio Shift",
    category: "Web Portfolio UI",
    client: "Shift Architecture",
    year: "2025",
    layoutType: "wide",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Responsive showcase design for an architectural studio. Uses strict geometric grid alignment, high-contrast imagery, and micro-interactions.",
    details: "Figma UI prototype, motion interactions, typographic system, coding handoff."
  },
  {
    id: 23,
    title: "Monolith Furniture",
    category: "Catalog Design",
    client: "Monolith Design Group",
    year: "2025",
    layoutType: "standard",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A hardbound catalog for a minimalist furniture collection, utilizing thick matte cotton paper, subtle grays, and highly structured photography grids.",
    details: "Book structure layout, prepress checking, material advisory, cover debossing logo."
  },
  {
    id: 24,
    title: "Zephyr Cycling",
    category: "Apparel & Lookbook",
    client: "Zephyr Apparel",
    year: "2026",
    layoutType: "standard",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Visual identity, cycling kit textile designs, and high-contrast photography layout for a performance cycling apparel startup.",
    details: "Textile graphic templates, digital lookup brochure, marketing emails styling."
  },
  {
    id: 25,
    title: "Nectar Juice Bar",
    category: "Identity & Signage",
    client: "Nectar Refreshments",
    year: "2025",
    layoutType: "accent",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1525385133772-2abd8869f29d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600"
    ],
    description: "A punchy, colorful typography-led brand system for an organic juice bar chain. Includes bold signage, menus, and reusable bottle graphics.",
    details: "Custom lettering, store facade layout, custom cups, glass container stickers."
  },
  {
    id: 26,
    title: "Paradox Theater",
    category: "Exhibition Poster",
    client: "Paradox Playhouse",
    year: "2025",
    layoutType: "tall",
    animationType: "slide-up",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Bespoke print design for a seasonal play lineup, experimenting with screenprinting overlays and dynamic font weights.",
    details: "Screenprint layouts, event brochures, tickets styling, social banner sets."
  },
  {
    id: 27,
    title: "Terra Ceramic Studio",
    category: "Identity & Branding",
    client: "Terra Art Studio",
    year: "2026",
    layoutType: "standard",
    animationType: "slide-left",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1576016770956-debb63d90029?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Tactile, textured brand assets featuring handmade ceramic motifs, custom letterpress stationery, and biological earth tone colors.",
    details: "Handmade stamps, organic palette cards, minimalist logo badge, label tags."
  },
  {
    id: 28,
    title: "Zenith Smart Glasses",
    category: "Product Launch UI",
    client: "Zenith Devices",
    year: "2026",
    layoutType: "wide",
    animationType: "fade-tilt",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Highly technical product presentation page design featuring interactive 3D components overlays, grid outlines, and bright neon typography highlights.",
    details: "Website design wireframes, dynamic interactive states, typography system."
  },
  {
    id: 29,
    title: "Kismet Gin",
    category: "Spirits Packaging",
    client: "Kismet Distillers",
    year: "2026",
    layoutType: "standard",
    animationType: "scale-in",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1471440671318-55ddd97f9fdf?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Intricately detailed gold-foil and floral design labels for premium dry gin. Traditional typography combined with modern bottle silhouette selection.",
    details: "Glass shape consultation, label embossing die-cut, custom botany drawings."
  },
  {
    id: 30,
    title: "Pixel Art Expo",
    category: "Event Identity & Web",
    client: "Pixel Expo Group",
    year: "2025",
    layoutType: "tall",
    animationType: "slide-right",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600"
    ],
    description: "Visual identity and digital hub layout for a retro game and pixel art convention. Merging modern grids with playful pixel typography.",
    details: "Virtual badge designs, web landing page, promotional poster series."
  }
];

export default projectsData;
