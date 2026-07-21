// ============================================================
// HEX Hardware 品牌页资料 (brand.html 用)
// ============================================================
// 每个品牌的隐藏页网址 = brand.html#品牌key
// 例如: brand.html#mapei  /  brand.html#sika
//
// 想改内容? 每个品牌可以改:
//   name    - 品牌显示名
//   filter  - 用来在产品库里找该品牌产品的关键词 (通常别动)
//   logo    - assets/brands/ 里的logo文件名
//   color   - 品牌主色 (广告横幅背景色)
//   tagline - 横幅上的一句介绍
//   lines   - 马来西亚常用产品线清单 (横幅上的小卡片, 想加就加一行)
//
// 想用自己Canva做的横幅图代替自动生成的?
//   把图存为 assets/brands/pages/{key}-banner.jpg (横向 1600x500 左右)
//   例如 assets/brands/pages/mapei-banner.jpg — 有图就自动用图。
// ============================================================

const HEX_BRAND_PAGES = {
  "mapei": {
    name: "Mapei", filter: "Mapei", logo: "mapei.png", color: "#0B5CAB",
    tagline: "Mapei Malaysia dealer — Italian adhesives, grouts & waterproofing the pros actually use.",
    lines: ["Tile adhesives — Keraflex / Keraflex Maxi S1 / Mapeset", "Coloured grouts — Ultracolor Plus, Keracolor SF, Fuga Fresca", "Waterproofing — Aquaflex Roof 77 & 99+, Planiseal, Mapeband", "Levelling & primers — Novoplan 200 MY, Primer G, Mapelatex"]
  },
  "sika": {
    name: "Sika", filter: "Sika", logo: "sika.png", color: "#B71C1C",
    tagline: "Sika Malaysia dealer — Swiss construction chemicals trusted on Malaysian sites.",
    lines: ["Sealants — Sikaflex PU range", "Roof & wet-area waterproofing", "Concrete repair & bonding", "Tile adhesives & grouts"]
  },
  "bostik": {
    name: "Bostik", filter: "Bostik", logo: "bostik.png", color: "#1B2A6B",
    tagline: "Bostik Malaysia — waterproofing membranes and sealants for wet areas & roofs.",
    lines: ["Cementitious waterproofing — Boscocem C350 / C388 / C550", "Membranes — Boscoseal RC2, Boscolastic C750, AC2", "PU & silicone sealants — Seal-N-Flex, N310, S736, Smartflex", "Grouts & adhesives — FAG A326"]
  },
  "pentens": {
    name: "Pentens", filter: "Pentens", logo: "pentens.png", color: "#0E7A3D",
    tagline: "Pentens Malaysia — locally-made waterproofing coatings and construction chemicals.",
    lines: ["Waterproofing coatings & membranes", "Epoxy & PU systems", "Tile adhesives & grouts"]
  },
  "obaproof": {
    name: "Obaproof", filter: "Obaproof", logo: "obaproof.png", color: "#1E88C7",
    tagline: "Obaproof Malaysia — waterproofing and premix solutions for local jobs, big or small.",
    lines: ["Waterproofing — WP-500 Fiber, F2-288, Flexxi 2-in-1", "Skim coat & premix plaster", "White cement, silica sand & aggregates", "Fibreglass reinforcement mat"]
  },
  "sun-foil": {
    name: "Sun-Foil", filter: "Sun-Foil", logo: "sun-foil.png", color: "#C62828",
    tagline: "Reflective roof insulation for the Malaysian heat.",
    lines: ["Double-sided reflective foil", "Woven & bubble insulation", "Roofing accessories"]
  },
  "sunway-detail": {
    name: "Sunway Detail", filter: "Sunway", logo: "sunway-detail.png", color: "#D84315",
    tagline: "Quality building products from a name Malaysians know.",
    lines: ["Paving & precast products", "Quarry & construction materials"]
  },
  "ytl-cement": {
    name: "YTL Cement", filter: "YTL", logo: "ytl-cement.png", color: "#0288D1",
    tagline: "YTL Cement price Malaysia — Castle, Phoenix & Walcrete, since 1955.",
    lines: ["Castle OPC cement 50kg", "Blended & masonry cement", "Bagged & bulk supply"]
  },
  "quickmix": {
    name: "QuickMix", filter: "QuickMix", logo: "quickmix.png", color: "#455A64",
    tagline: "Premixed plaster & render — open the bag, add water, start work.",
    lines: ["Renders — QuickRender 387 / 387+", "Plaster & skim — QuickPlast 399, QuickSkim 388, QuickCoat+ 389", "Base coat & bonding — Base Grey 380, SuperBond 369", "Non-Shrink Grout 218"]
  },
  "greencon": {
    name: "Greencon", filter: "Greencon", logo: "greencon.png", color: "#7CB342",
    tagline: "Greencon AAC block price Malaysia — lighter, faster, cooler walls.",
    lines: ["AAC lightweight blocks", "Block adhesive & accessories"]
  },
  "uac": {
    name: "UAC", filter: "UAC", logo: "uac.png", color: "#D32F2F",
    tagline: "UAC board Malaysia — PrimaFlex fibre cement boards for ceiling, partition & flooring.",
    lines: ["PrimaFlex flat sheets", "Ceiling & partition boards", "Flooring boards"]
  },
  "gci": {
    name: "GCI", filter: "GCI", logo: "gci.png", color: "#AD1B3E",
    tagline: "GCI roofing Malaysia — metal roofing solutions built for Malaysian weather.",
    lines: ["Metal roof sheets", "Roofing accessories & flashings"]
  },
  "mt-bricks": {
    name: "MT Bricks", filter: "MT Bricks", logo: "mt-bricks.png", color: "#8D4A2F",
    tagline: "MT Bricks price Malaysia — clay bricks for every build.",
    lines: ["Common clay bricks", "Facing bricks"]
  },
  "henner-bricks": {
    name: "Henner Bricks", filter: "Henner", logo: "henner-bricks.png", color: "#C62828",
    tagline: "Henner brick Malaysia — reliable bricks, ready stock.",
    lines: ["Clay bricks", "Cement sand bricks"]
  },
  "saga-paver": {
    name: "Saga Paver", filter: "Saga", logo: "saga-paver.png", color: "#37474F",
    tagline: "Saga Paver price Malaysia — pavers for driveways, walkways & landscapes.",
    lines: ["Interlocking pavers", "Grass pavers & kerbs"]
  },
  "bmi-monier": {
    name: "BMI Monier", filter: "BMI", logo: "bmi-monier.png", color: "#0288D1",
    tagline: "BMI Monier roof tiles Malaysia — trusted for decades.",
    lines: ["Concrete roof tiles", "Ridges & roofing components"]
  },
  "deluxe": {
    name: "Deluxe (Conlex)", filter: "Deluxe", logo: "deluxe.png", color: "#1470E1",
    tagline: "Water tank price Malaysia — PE poly, stainless steel & SPAN-approved septic tanks.",
    lines: ["Stainless steel — Deluxe, SSDWT & TReinz 304 / Premium 316", "PE poly tanks — round & slim, vertical & horizontal", "DOS Life & SPAN-approved septic tanks", "Rain harvesting & industrial tanks"]
  },
  "nietz": {
    name: "Nietz", filter: "Nietz", logo: "nietz.png", color: "#263238",
    tagline: "Power tools & accessories.",
    lines: ["Power tools", "Accessories & consumables"]
  },
  "hardwares": {
    name: "Tools & Hardware", filter: "Hardware", logo: "hardwares.png", color: "#16202C",
    tagline: "The everyday hardware wall — from one screw up.",
    lines: ["Hand tools & scrapers", "Fasteners & fittings", "Site consumables"]
  }
};
