// ============================================================
// HEX Hardware 产品清单
// ============================================================
// 怎么加产品? 复制下面任何一个 { ... } 区块, 改内容, 存档就好。
// 网页会自动生成产品卡片, 不用碰其他代码。
//
// 每个产品的字段:
//   name     : 产品名 (必填)
//   brand    : 品牌名 (可不填, 填 "" 就好)
//   desc     : 一句简短说明 (可不填)
//   category : 类别, 只能填以下其中一个:
//              cement / waterproofing / timber / bricks /
//              roofing / tanks / boards / hardware
//   img      : 照片文件名 (照片放进 assets/products/ 文件夹)
//              没有照片就填 "" — 会自动显示类别icon, 不会坏
//   price    : 价钱, 例如 "RM 18.50" 。不想显示价钱就填 ""
//              (填 "" 按钮会显示 WhatsApp询价)
//   options  : 颜色/包装等规格 (可不填)。客户会在卡片上用下拉选,
//              按Enquire时WhatsApp信息自动带上他选的规格。格式:
//              options: {
//                "Size": ["2kg", "5kg", "23kg"],
//                "Colour": ["100 White", "110 Manhattan Grey", "113 Cement Grey"]
//              },
//              组名(Size/Colour)和选项都可以自由改, 可以只有一组。
//   hot      : 热卖产品。加一行  hot: true,  这个产品就会出现在
//              Home page 的 "Hot Selling" 区。不想显示就整行删掉。
//   series   : 系列/分支 (可不填)。同一个类别里产品多的时候用,
//              客户选了类别后会出现第二排小按钮按系列筛选。
//              Water Tanks 目前用这些系列名 (要一模一样):
//                "SS — Deluxe Vertical (With Stand)"
//                "SS — Deluxe Vertical (Without Stand)"
//                "SS — Deluxe Horizontal"
//                "SS — SSDWT"
//                "SS — Treinz"
//                "Poly Water Tank \u2014 Slim & Tall"
//                "Poly Water Tank \u2014 Round"
//                "Poly Septic Tank"
//                "Rain Harvest Tank"
//                "DOS Water Tank"
//
// 注意: 每个区块之间要有逗号, 文字要用引号包住。
// ============================================================

const HEX_PRODUCTS = [
  {
    name: "Deluxe Stainless Steel Tank CL 10KT — 500L (110 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d8760mm (30\") \u00d7 1,956mm (77\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    hot: true,
    img: "deluxe-ss-500l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 20K — 850L (190 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d8910mm (36\") \u00d7 1,956mm (77\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-850l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 25K — 1,000L (220 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d81,060mm (42\") \u00d7 1,956mm (77\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-1000l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 30K — 1,250L (275 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d81,060mm (42\") \u00d7 1,956mm (77\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-1250l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 40K — 1,600L (350 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d81,290mm (51\") \u00d7 1,956mm (77\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-1600l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 50K — 2,000L (440 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d81,290mm (51\") \u00d7 2,260mm (89\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-2000l.jpg",
    price: ""
  },
  {
    name: "Deluxe Stainless Steel Tank CL 60K — 3,000L (660 gal)",
    brand: "Deluxe (Conlex)",
    desc: "\u00d81,480mm (58\") \u00d7 2,616mm (103\") H, with stand",
    category: "tanks",
    series: "SS \u2014 Deluxe Vertical (With Stand)",
    img: "deluxe-ss-3000l.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N70A RD \u2014 100 gal (455L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 70 gal (318L) \u00b7 \u00d8940mm \u00d7 965mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    hot: true,
    img: "deluxe-pe-n70a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N100A RD \u2014 150 gal (682L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 100 gal (455L) \u00b7 \u00d81,092mm \u00d7 991mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n100a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N150A RD \u2014 200 gal (909L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 150 gal (682L) \u00b7 \u00d81,245mm \u00d7 991mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n150a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N200A RD \u2014 250 gal (1,137L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 200 gal (909L) \u00b7 \u00d81,295mm \u00d7 1,219mm H",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n200a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N250A RD \u2014 300 gal (1,365L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 250 gal (1,137L) \u00b7 \u00d81,295mm \u00d7 1,372mm H",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n250a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N300AP RD \u2014 350 gal (1,590L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 300 gal (1,365L) \u00b7 \u00d81,422mm \u00d7 1,321mm H",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n300ap.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N300A RD \u2014 400 gal (1,820L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 300 gal (1,365L) \u00b7 \u00d81,422mm \u00d7 1,397mm H",
    category: "tanks",
    series: "Poly Water Tank \u2014 Slim & Tall",
    img: "deluxe-pe-n300a.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N70 RD \u2014 100 gal (455L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 70 gal (318L) \u00b7 \u00d81,067mm \u00d7 711mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n70.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N100 RD \u2014 150 gal (682L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 100 gal (455L) \u00b7 \u00d81,168mm \u00d7 762mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n100.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N150 RD \u2014 200 gal (909L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 150 gal (682L) \u00b7 \u00d81,295mm \u00d7 838mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n150.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N200 RD \u2014 250 gal (1,137L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 200 gal (909L) \u00b7 \u00d81,448mm \u00d7 914mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n200.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N250 RD \u2014 300 gal (1,365L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 250 gal (1,137L) \u00b7 \u00d81,448mm \u00d7 965mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n250.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N300 RD \u2014 400 gal (1,820L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 300 gal (1,365L) \u00b7 \u00d81,524mm \u00d7 1,092mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    hot: true,
    img: "deluxe-pe-round-n300.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N350 RD \u2014 450 gal (2,043L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 350 gal (1,590L) \u00b7 \u00d81,575mm \u00d7 1,270mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n350.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N400 RD \u2014 500 gal (2,270L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 400 gal (1,820L) \u00b7 \u00d81,727mm \u00d7 1,321mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n400.jpg",
    price: ""
  },
  {
    name: "Deluxe PE Water Tank N500 RD \u2014 600 gal (2,730L)",
    brand: "Deluxe (Conlex)",
    desc: "Effective 500 gal (2,270L) \u00b7 \u00d81,778mm \u00d7 1,499mm H, cover included",
    category: "tanks",
    series: "Poly Water Tank \u2014 Round",
    img: "deluxe-pe-round-n500.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 10F \u2014 500L (110 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d8700mm \u00d7 1,420mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-10f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 20F \u2014 850L (190 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d8850mm \u00d7 1,520mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-20f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 25F \u2014 1,000L (220 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d8990mm \u00d7 1,520mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-25f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 30F \u2014 1,250L (275 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d81,060mm \u00d7 1,520mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-30f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 40F \u2014 1,500L (330 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d81,200mm \u00d7 1,520mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-40f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 50F \u2014 2,000L (440 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d81,200mm \u00d7 1,880mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-50f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 60F \u2014 3,000L (660 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d81,420mm \u00d7 2,140mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-60f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 80F \u2014 4,000L (880 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical without stand \u00b7 \u00d81,420mm \u00d7 2,700mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-80f.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 10KH \u2014 500L (110 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 760mm \u00d7 1,090mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-10kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 20KH \u2014 850L (190 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 910mm \u00d7 1,220mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-20kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 25KH \u2014 1,000L (220 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 1,020mm \u00d7 1,370mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-25kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 30KH \u2014 1,250L (275 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 1,110mm \u00d7 1,420mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-30kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 40KH \u2014 1,600L (350 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 1,250mm \u00d7 1,550mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-40kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 50KH \u2014 2,000L (440 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 1,250mm \u00d7 1,600mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-50kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 60KH \u2014 3,000L (660 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Horizontal with stand \u00b7 1,270mm \u00d7 1,625mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-60kh.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 10K \u2014 500L (110 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d8760mm \u00d7 1,905mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-10k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 20K \u2014 850L (190 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d8910mm \u00d7 1,905mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-20k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 25K \u2014 1,000L (220 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,040mm \u00d7 1,905mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-25k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 30K \u2014 1,250L (275 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,120mm \u00d7 1,905mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-30k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 40K \u2014 1,500L (330 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,240mm \u00d7 1,905mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-40k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 50K \u2014 2,000L (440 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,240mm \u00d7 2,083mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-50k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 60K \u2014 3,000L (660 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,480mm \u00d7 2,560mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-60k.jpg",
    price: ""
  },
  {
    name: "SSDWT Stainless Steel Tank DLE 80K \u2014 4,000L (880 gal)",
    brand: "SSDWT (Deluxe)",
    desc: "Vertical with stand \u00b7 \u00d81,480mm \u00d7 3,100mm H",
    category: "tanks",
    series: "SS \u2014 SSDWT",
    img: "ssdwt-dle-80k.jpg",
    price: ""
  }
,
  {
    name: "Mapei Mapeband Easy",
    brand: "Mapei",
    desc: "Waterproofing sealing tape",
    category: "waterproofing",
    img: "mapei-mapeband-easy.jpg",
    price: ""
  },
  {
    name: "Mapei Mapegrout Patch 218",
    brand: "Mapei",
    desc: "Patch repair mortar",
    category: "cement",
    img: "mapei-mapegrout-patch-218.jpg",
    price: ""
  },
  {
    name: "Mapei Keraflex",
    brand: "Mapei",
    desc: "Cementitious tile adhesive",
    category: "cement",
    options: {
      "Colour": ["Grey"]
    },
    img: "mapei-keraflex.jpg",
    price: ""
  },
  {
    name: "Mapei Ultracolor Plus",
    brand: "Mapei",
    desc: "Fast setting & drying grout, anti-efflorescence",
    category: "cement",
    options: {
      "Size": ["5kg"],
      "Colour": ["100 White", "110 Manhattan 2000", "111 Silver Grey", "112 Medium Grey", "113 Cement Grey", "114 Anthracite", "120 Black", "130 Jasmine", "137 Caribean"]
    },
    hot: true,
    img: "mapei-ultracolor-plus.jpg",
    price: ""
  },
  {
    name: "Mapei Planiseal 223",
    brand: "Mapei",
    desc: "Cementitious waterproofing coating",
    category: "waterproofing",
    hot: true,
    img: "mapei-planiseal-223.jpg",
    price: ""
  },
  {
    name: "Mapei NOVOPLAN 200 MY",
    brand: "Mapei",
    desc: "Self-levelling compound",
    category: "cement",
    img: "mapei-novoplan-200-my.jpg",
    price: ""
  },
  {
    name: "Mapei-Fuga Fresca",
    brand: "Mapei",
    desc: "Grout reviver",
    category: "cement",
    options: {
      "Size": ["160ml"],
      "Colour": ["100 White", "110 Manhattan 2000", "111 Silver Grey", "112 Medium Grey", "113 Cement Grey", "114 Anthracite", "120 Black", "130 Jasmine", "137 Caribean"]
    },
    img: "mapei-fuga-fresca.jpg",
    price: ""
  },
  {
    name: "Mapei Keraflex Maxi S1",
    brand: "Mapei",
    desc: "Deformable S1 adhesive for large-format tiles",
    category: "cement",
    options: {
      "Colour": ["Grey", "White"]
    },
    hot: true,
    img: "mapei-keraflex-maxi-s1.jpg",
    price: ""
  },
  {
    name: "Mapei Keracolor SF",
    brand: "Mapei",
    desc: "Fine cementitious grout",
    category: "cement",
    options: {
      "Size": ["2kg"],
      "Colour": ["100 White", "110 Manhattan 2000", "111 Silver Grey", "112 Medium Grey", "113 Cement Grey", "114 Anthracite", "120 Black", "130 Jasmine", "137 Caribean"]
    },
    hot: true,
    img: "mapei-keracolor-sf.jpg",
    price: ""
  },
  {
    name: "Mapei Aquaflex Roof 99 Plus",
    brand: "Mapei",
    desc: "Liquid waterproofing membrane for roofs",
    category: "waterproofing",
    options: {
      "Size": ["4kg", "18kg"]
    },
    img: "mapei-aquaflex-roof-99-plus.jpg",
    price: ""
  },
  {
    name: "Mapei Grout Float",
    brand: "Mapei",
    desc: "Tiling tool",
    category: "hardware",
    img: "mapei-grout-float.jpg",
    price: ""
  },
  {
    name: "Mapei Mapeset 222",
    brand: "Mapei",
    desc: "Tile adhesive (Grey)",
    category: "cement",
    img: "mapei-mapeset-222.jpg",
    price: ""
  },
  {
    name: "Mapei Mapeset 111",
    brand: "Mapei",
    desc: "Tile adhesive",
    category: "cement",
    img: "mapei-mapeset-111.jpg",
    price: ""
  },
  {
    name: "Mapei Primer G",
    brand: "Mapei",
    desc: "Synthetic resin primer",
    category: "cement",
    options: {
      "Size": ["5kg", "25kg"]
    },
    img: "mapei-primer-g.jpg",
    price: ""
  },
  {
    name: "Mapei Mapelatex 119",
    brand: "Mapei",
    desc: "Latex additive for mortars",
    category: "cement",
    options: {
      "Size": ["4kg", "18kg"]
    },
    img: "mapei-mapelatex-119.jpg",
    price: ""
  },
  {
    name: "Mapei Aquaflex Roof 77",
    brand: "Mapei",
    desc: "Liquid waterproofing membrane for roofs",
    category: "waterproofing",
    options: {
      "Size": ["4kg", "18kg"]
    },
    img: "mapei-aquaflex-roof-77.jpg",
    price: ""
  },
  {
    name: "Mapei Floor Trowel",
    brand: "Mapei",
    desc: "Tiling tool",
    category: "hardware",
    img: "mapei-floor-trowel.jpg",
    price: ""
  },
  {
    name: "Bostik AC2",
    brand: "Bostik",
    desc: "Acrylic waterproofing membrane",
    category: "waterproofing",
    options: {
      "Size": ["5kg"]
    },
    img: "bostik-ac2.jpg",
    price: ""
  },
  {
    name: "Bostik RC2",
    brand: "Bostik",
    desc: "Boscoseal RC2 waterproofing membrane",
    category: "waterproofing",
    options: {
      "Size": ["5kg"]
    },
    img: "bostik-rc2.jpg",
    price: ""
  },
  {
    name: "Bostik C350 boscocem slurry block",
    brand: "Bostik",
    desc: "Cementitious waterproofing slurry",
    category: "waterproofing",
    img: "bostik-c350-boscocem-slurry-block.jpg",
    price: ""
  },
  {
    name: "Bostik Block C388 Boscocem Flexi",
    brand: "Bostik",
    desc: "Flexible cementitious waterproofing, 22.7kg/set",
    category: "waterproofing",
    options: {
      "Size": ["22.7/set"]
    },
    img: "bostik-block-c388-boscocem-flexi.jpg",
    price: ""
  },
  {
    name: "Bostik Block C550 Boscoflex",
    brand: "Bostik",
    desc: "30KG/SET",
    category: "waterproofing",
    img: "bostik-block-c550-boscoflex.jpg",
    price: ""
  },
  {
    name: "Bostik C750 Boscolastic",
    brand: "Bostik",
    desc: "Elastomeric waterproofing membrane",
    category: "waterproofing",
    img: "bostik-c750-boscolastic.jpg",
    price: ""
  },
  {
    name: "Bostik Smartflex PU",
    brand: "Bostik",
    desc: "Polyurethane sealant",
    category: "waterproofing",
    img: "bostik-smartflex-pu.jpg",
    price: ""
  },
  {
    name: "Bostik A326",
    brand: "Bostik",
    desc: "Fine adhesive grout (FAG)",
    category: "cement",
    img: "bostik-a326.jpg",
    price: ""
  },
  {
    name: "Bostik S736 Silicone",
    brand: "Bostik",
    desc: "Silicone sealant",
    category: "waterproofing",
    img: "bostik-s736-silicone.jpg",
    price: ""
  },
  {
    name: "Bostik Seal-N-Flex-FC",
    brand: "Bostik",
    desc: "Polyurethane joint sealant",
    category: "waterproofing",
    img: "bostik-seal-n-flex-fc.jpg",
    price: ""
  },
  {
    name: "Bostik N310",
    brand: "Bostik",
    desc: "Neutral cure silicone sealant",
    category: "waterproofing",
    img: "bostik-n310.jpg",
    price: ""
  },
  {
    name: "Bostik P310",
    brand: "Bostik",
    desc: "Sealant",
    category: "waterproofing",
    img: "bostik-p310.jpg",
    price: ""
  },
  {
    name: "QuickMix Base Grey 380",
    brand: "QuickMix",
    desc: "Base coat render",
    category: "cement",
    img: "quickmix-base-grey-380.jpg",
    price: ""
  },
  {
    name: "QuickMix Non-Shrink Grout 218",
    brand: "QuickMix",
    desc: "Non-shrink grout",
    category: "cement",
    img: "quickmix-non-shrink-grout-218.jpg",
    price: ""
  },
  {
    name: "QuickMix Quick Render+ (387+)",
    brand: "QuickMix",
    desc: "Premixed cement render",
    category: "cement",
    img: "quickmix-quick-render-387.jpg",
    price: ""
  },
  {
    name: "QuickMix QuickCoat+ 389",
    brand: "QuickMix",
    desc: "Finishing coat",
    category: "cement",
    img: "quickmix-quickcoat-389.jpg",
    price: ""
  },
  {
    name: "QuickMix QuickPlast 399",
    brand: "QuickMix",
    desc: "Premixed plaster",
    category: "cement",
    img: "quickmix-quickplast-399.jpg",
    price: ""
  },
  {
    name: "QuickMix QuickRender 387",
    brand: "QuickMix",
    desc: "Premixed cement render",
    category: "cement",
    img: "quickmix-quickrender-387.jpg",
    price: ""
  },
  {
    name: "QuickMix QuickSkim 388",
    brand: "QuickMix",
    desc: "Skim coat",
    category: "cement",
    img: "quickmix-quickskim-388.jpg",
    price: ""
  },
  {
    name: "QuickMix SuperBond (369)",
    brand: "QuickMix",
    desc: "Bonding agent",
    category: "cement",
    img: "quickmix-superbond-369.jpg",
    price: ""
  },
  {
    name: "Obaproof Concrete Stone 3/4",
    brand: "Obaproof",
    desc: "Concrete aggregate 3/4\"",
    category: "cement",
    img: "obaproof-concrete-stone-3-4.jpg",
    price: ""
  },
  {
    name: "Obaproof F2-288",
    brand: "Obaproof",
    desc: "Waterproofing membrane",
    category: "waterproofing",
    img: "obaproof-f2-288.jpg",
    price: ""
  },
  {
    name: "Obaproof Fiber Glass Remat",
    brand: "Obaproof",
    desc: "Fibreglass reinforcement mat",
    category: "waterproofing",
    img: "obaproof-fiber-glass-remat.jpg",
    price: ""
  },
  {
    name: "Obaproof Flexxi 2 in 1",
    brand: "Obaproof",
    desc: "2-in-1 flexible waterproofing",
    category: "waterproofing",
    img: "obaproof-flexxi-2-in-1.jpg",
    price: ""
  },
  {
    name: "Obaproof Grey Cement Sand Media 30/60",
    brand: "Obaproof",
    desc: "Grey cement sand, media 30/60",
    category: "cement",
    img: "obaproof-grey-cement-sand-media-30-60.jpg",
    price: ""
  },
  {
    name: "Obaproof Premix Plaster 9921",
    brand: "Obaproof",
    desc: "Premixed plaster",
    category: "cement",
    img: "obaproof-premix-plaster-9921.jpg",
    price: ""
  },
  {
    name: "Obaproof Silica Sand Fine 50/100",
    brand: "Obaproof",
    desc: "Silica sand, fine 50/100",
    category: "cement",
    img: "obaproof-silica-sand-fine-50-100.jpg",
    price: ""
  },
  {
    name: "Obaproof Silica Sand Media 30/60",
    brand: "Obaproof",
    desc: "Silica sand, media 30/60",
    category: "cement",
    img: "obaproof-silica-sand-media-30-60.jpg",
    price: ""
  },
  {
    name: "Obaproof Skim Coat 168 2KG",
    brand: "Obaproof",
    desc: "Skim coat, 2kg",
    category: "cement",
    img: "obaproof-skim-coat-168-2kg.jpg",
    price: ""
  },
  {
    name: "Obaproof White Cement",
    brand: "Obaproof",
    desc: "White cement",
    category: "cement",
    img: "obaproof-white-cement.jpg",
    price: ""
  },
  {
    name: "Obaproof WP-500 FIBER",
    brand: "Obaproof",
    desc: "Fibre-reinforced waterproofing membrane",
    category: "waterproofing",
    img: "obaproof-wp-500-fiber.jpg",
    price: ""
  },
  {
    name: "Bath Tub",
    desc: "Bath tub",
    category: "hardware",
    img: "bath-tub.jpg",
    price: ""
  },
  {
    name: "Toilet Bowl Seat Cover",
    desc: "Toilet bowl seat cover",
    category: "hardware",
    img: "toilet-bowl-seat-cover.jpg",
    price: ""
  },
  {
    name: "M10 Scraper 2\"",
    category: "hardware",
    img: "m10-scraper-2.jpg",
    price: ""
  },
  {
    name: "M10 Scraper 2.5\"",
    category: "hardware",
    img: "m10-scraper-2-5.jpg",
    price: ""
  },
  {
    name: "M10 Scraper 3\"",
    category: "hardware",
    img: "m10-scraper-3.jpg",
    price: ""
  },
  {
    name: "M10 Scraper 4\"",
    category: "hardware",
    img: "m10-scraper-4.jpg",
    price: ""
  },
  {
    name: "M10 Scraper 5\"",
    category: "hardware",
    img: "m10-scraper-5.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 10K \u2014 500L (110 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-10k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 20K \u2014 850L (190 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-20k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 25K \u2014 1,000L (220 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-25k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 30K \u2014 1,250L (275 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-30k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 40K \u2014 1,500L (330 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-40k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 50K \u2014 2,000L (440 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-50k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 60K \u2014 3,000L (660 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-60k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 80K \u2014 4,000L (880 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-80k.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 10F \u2014 500L (110 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-10f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 20F \u2014 850L (190 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-20f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 25F \u2014 1,000L (220 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-25f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 30F \u2014 1,250L (275 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-30f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 40F \u2014 1,500L (330 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-40f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 50F \u2014 2,000L (440 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-50f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 60F \u2014 3,000L (660 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-60f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 80F \u2014 4,000L (880 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Vertical without stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-80f.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 10KH \u2014 500L (110 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-10kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 20KH \u2014 850L (190 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-20kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 25KH \u2014 1,000L (220 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-25kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 30KH \u2014 1,250L (275 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-30kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 40KH \u2014 1,600L (350 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-40kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 50KH \u2014 2,000L (440 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-50kh.jpg",
    price: ""
  },
  {
    name: "Treinz Stainless Steel Tank SM 60KH \u2014 3,000L (660 gal)",
    brand: "Treinz (Deluxe)",
    desc: "Horizontal with stand",
    category: "tanks",
    series: "SS \u2014 Treinz",
    img: "treinz-sm-60kh.jpg",
    price: ""
  }
];
