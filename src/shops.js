const shops = [
  {
    id: 1,
    category: 'Electronics',
    merchant: 'apple',
    bgImage:
      'https://www.datocms-assets.com/26641/1628694220-background-apple.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1628697195-applelogotall.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 2,
    category: 'Fashion',
    merchant: 'the bay',
    bgImage:
      'https://www.datocms-assets.com/26641/1605885827-hudson-s-bay-attachment-00p5g00000o5gbxuab.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1632853684-hbcwmen2021rgb-white.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 3,
    category: 'Home & Furniture',
    merchant: 'wayfair',
    bgImage:
      'https://www.datocms-assets.com/26641/1602251917-done-wayfair-attachment-00pf400000oqydueat.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589299208-wayfair-attachment-00pf400000lrumaeav.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 4,
    category: 'Fashion',
    merchant: 'browns shoes',
    bgImage:
      'https://www.datocms-assets.com/26641/1648508712-browns-shoes-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1612549474-browns-attachment-00p5g00000qzrnauad.svg',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 5,
    category: 'Sporting Goods',
    merchant: 'sail',
    bgImage:
      'https://www.datocms-assets.com/26641/1603742661-done-sail-attachment-00pf400000ozojpear.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1603742015-sail-attachment-00pf400000ozojoear.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 6,
    category: 'Electronics',
    merchant: 'the source',
    bgImage: 'https://www.datocms-assets.com/26641/1648506985-source-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589225937-donelogothesource.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 7,
    category: 'Fashion',
    merchant: 'shein',
    bgImage: 'https://www.datocms-assets.com/26641/1648506705-shein-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1600884974-done-shein-attachment-00pf400000ocniuead.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 8,
    category: 'Fashion',
    merchant: 'little burgundy',
    bgImage:
      'https://www.datocms-assets.com/26641/1648508690-little-burgundy-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1605200029-little-burgundy-attachment-00p5g00000o5k81uaf.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 9,
    category: 'Sporting Goods',
    merchant: 'bowflex',
    bgImage: 'https://www.datocms-assets.com/26641/1600716483-done-bowflex.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1592427214-bowflex-attachment-00pf400000mvbsmea1.svg',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 10,
    category: 'Electronics',
    merchant: 'samsung',
    bgImage:
      'https://www.datocms-assets.com/26641/1600716608-done-samsung-attachment-00pf400000lrunseaf.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589298733-samsung-attachment-00pf400000lrunreaf.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 11,
    category: 'Fashion',
    merchant: 'moose knuckles',
    bgImage:
      'https://www.datocms-assets.com/26641/1648508666-moose-knuckles-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1605221625-moose-knuckles-attachment-00p5g00000o5m8nuav.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 12,
    category: 'Fashion',
    merchant: 'steve madden',
    bgImage:
      'https://www.datocms-assets.com/26641/1648503965-stevemaddennewpic-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589299171-steve-madden-attachment-00pf400000lrun3eaf.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 13,
    category: 'Hobby & Leisure',
    merchant: 'apollo scooters',
    bgImage:
      'https://www.datocms-assets.com/26641/1589491286-apollo-scooters-attachment-00pf400000lrnvsear.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589491284-apollo-scooters-attachment-00pf400000lrnvrear.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 14,
    category: 'Electronics',
    merchant: 'apple',
    bgImage:
      'https://www.datocms-assets.com/26641/1628694220-background-apple.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1628697195-applelogotall.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 15,
    category: 'Home & Furniture',
    merchant: 'article',
    bgImage:
      'https://www.datocms-assets.com/26641/1589299281-article-attachment-00pf400000lrv1heaf.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589299278-article-attachment-00pf400000lrv1geaf.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 16,
    category: 'Home & Furniture',
    merchant: 'atlas tools & machinery',
    bgImage:
      'https://www.datocms-assets.com/26641/1595422416-atlas-tools-machinery-attachment-00pf400000nzhtrea1.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1595422413-atlas-tools-machinery-attachment-00pf400000nzhtqea1.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 17,
    category: 'Home & Furniture',
    merchant: 'auberge designs',
    bgImage:
      'https://www.datocms-assets.com/26641/1632938000-auberge-designs-attachment-00p5g00000vbglauar.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1632937996-auberge-designs-attachment-00p5g00000vbgl9uab.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 18,
    category: 'Electronics',
    merchant: 'ava technologies inc.',
    bgImage:
      'https://www.datocms-assets.com/26641/1605630233-ava-technologies-inc-attachment-00p5g00000o5vyaua3.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1605807978-done-ava-technologies-inc-attachment-00p5g00000o5vy9uan.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 19,
    category: 'Electronics',
    merchant: 'avshop',
    bgImage:
      'https://www.datocms-assets.com/26641/1595962641-avshop-ca-attachment-00pf400000mwndpeax.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1595962659-avshop-ca-attachment-00pf400000mwndoeax.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 20,
    category: 'Home & Furniture',
    merchant: 'awnings canada',
    bgImage: 'https://www.datocms-assets.com/26641/1648664939-awnings-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638475861-logopaybright-awnings-canada-png-logo.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 21,
    category: 'Beauty & Wellness',
    merchant: 'bali body',
    bgImage:
      'https://www.datocms-assets.com/26641/1601911296-done-bali-body-attachment-00pf400000opnkiea1.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1601911212-done-bali-body-attachment-00pf400000opnkhea1.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 22,
    category: 'Hobby & Leisure',
    merchant: 'bbqing',
    bgImage:
      'https://www.datocms-assets.com/26641/1589568890-bbqing-attachment-00pf400000lrs8oear.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589572079-donelogobbqing-attachment-00pf400000lrs8near.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 23,
    category: 'Beauty & Wellness',
    merchant: 'beautycounter',
    bgImage:
      'https://www.datocms-assets.com/26641/1600883997-done-beautycounter.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910403-beautycounter-logo.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 24,
    category: 'Sporting Goods',
    merchant: 'bells of steel',
    bgImage:
      'https://www.datocms-assets.com/26641/1648504764-bells-of-steel-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589315249-bells-of-steel-attachment-00pf400000lrbwaeab.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 25,
    category: 'Beauty & Wellness',
    merchant: 'belly bandit',
    bgImage:
      'https://www.datocms-assets.com/26641/1589579680-bellybandit-attachment-00pf400000lrtcleaj.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589581937-donelogobellybandit-attachment-00pf400000lrtckeaj-1.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 26,
    category: 'Hobby & Leisure',
    merchant: 'belogi arcade',
    bgImage:
      'https://www.datocms-assets.com/26641/1633032012-belogi-arcade-card1.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1632937758-belogi-arcade-attachment-00p5g00000vcepyuan.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 27,
    category: 'Electronics',
    merchant: 'better1.com',
    bgImage:
      'https://www.datocms-assets.com/26641/1648665662-cardunstoppable-min.jpeg',
    overlayImg: 'https://www.datocms-assets.com/26641/1632424636-better1.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 28,
    category: 'Sporting Goods',
    merchant: 'bicicletta',
    bgImage:
      'https://www.datocms-assets.com/26641/1605199385-done-bicicletta-attachment-00pf400000p0cqbea3.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1605199395-done-bicicletta-attachment-00pf400000p0cqaea3.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 29,
    category: 'Hobby & Leisure',
    merchant: 'bigtent outdoor equipment',
    bgImage:
      'https://www.datocms-assets.com/26641/1589390777-bigtent-outdoor-equipment-ltd-attachment-00pf400000lrcaaeab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589390774-bigtent-outdoor-equipment-ltd-attachment-00pf400000lrcazear.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 30,
    category: 'Hobby & Leisure',
    merchant: 'biktrix',
    bgImage:
      'https://www.datocms-assets.com/26641/1589491280-biktrix-attachment-00pf400000lrnvmeab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589557757-donelogobiktrix-attachment-00pf400000lrnvleab.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 31,
    category: 'Electronics',
    merchant: 'bissell canada',
    bgImage: 'https://www.datocms-assets.com/26641/1635183298-bissel.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910501-bissell-logo.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 32,
    category: 'Auto',
    merchant: 'blackcircles.ca',
    bgImage:
      'https://www.datocms-assets.com/26641/1589477139-blackcircles-ca-attachment-00pf400000lrm8veab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589477137-blackcircles-ca-attachment-00pf400000lrm8ueab.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 33,
    category: 'Fashion',
    merchant: 'boohoo',
    bgImage:
      'https://www.datocms-assets.com/26641/1600716301-done-boohoo-attachment-00pf400000lrfpmeab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1600716316-done-boohoo-attachment-00pf400000lrfpleab.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 34,
    category: 'Beauty & Wellness',
    merchant: 'boutique skin envie inc.',
    bgImage:
      'https://www.datocms-assets.com/26641/1596209017-boutique-skin-envie-inc-attachment-00pf400000napyneaj.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1596562915-donelogoboutique-skin-envie-inc-attachment-00pf400000napymeaj.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 35,
    category: 'Sporting Goods',
    merchant: 'bowflex',
    bgImage: 'https://www.datocms-assets.com/26641/1600716483-done-bowflex.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1592427214-bowflex-attachment-00pf400000mvbsmea1.svg',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 36,
    category: 'Fashion',
    merchant: 'bravo gifts',
    bgImage:
      'https://www.datocms-assets.com/26641/1628645726-bravo-gifts-attachment-00p5g00000vyln1uad.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910564-bravo-gifts-logo.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 37,
    category: 'Beauty & Wellness',
    merchant: 'browbox',
    bgImage:
      'https://www.datocms-assets.com/26641/1613085854-browbox-attachment-00p5g00000qa9tluaj.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1613085850-browbox-attachment-00p5g00000qa9tkuaj.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 38,
    category: 'Fashion',
    merchant: 'browns shoes',
    bgImage:
      'https://www.datocms-assets.com/26641/1648508712-browns-shoes-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1612549474-browns-attachment-00p5g00000qzrnauad.svg',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 39,
    category: 'Hobby & Leisure',
    merchant: 'busy bee tools',
    bgImage:
      'https://www.datocms-assets.com/26641/1615914736-busy-bee-tools-attachment-00p5g00000rmieuuaf.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1615914732-busy-bee-tools-attachment-00p5g00000rmietuaf.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 40,
    category: 'Fashion',
    merchant: 'bycassandre',
    bgImage:
      'https://www.datocms-assets.com/26641/1600716246-done-bycassandre-attachment-00pf400000odamneap.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1600715576-done-bycassandre.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 41,
    category: 'Hobby & Leisure',
    merchant: 'canada drone',
    bgImage:
      'https://www.datocms-assets.com/26641/1602708827-canada-drone-attachment-00pf400000orfxveal.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1603988853-done-canada-drone-attachment-00pf400000orfxueal.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 42,
    category: 'Sporting Goods',
    merchant: 'canadafit',
    bgImage:
      'https://www.datocms-assets.com/26641/1592242560-canadafitimage.jpg',
    overlayImg: 'https://www.datocms-assets.com/26641/1592243121-canadafit.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 43,
    category: 'Hobby & Leisure',
    merchant: 'canada greenhouse kits',
    bgImage:
      'https://www.datocms-assets.com/26641/1648664800-greenhouse-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638991242-logopaybright-canada-greenhouse-kits-png-logo.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 44,
    category: 'Auto',
    merchant: 'canadawheels.ca',
    bgImage:
      'https://www.datocms-assets.com/26641/1607460890-done-canadawheels.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1607460882-done-logocw-logo-white.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 45,
    category: 'Beauty & Wellness',
    merchant: 'canadian barista academy',
    bgImage:
      'https://www.datocms-assets.com/26641/1648668112-canadian-barista-academy-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1614799564-done-canadian-barista-academy-attachment-00p5g00000qb0kquab.png',
    status: 'featured',
    zeroInterest: true,
  },
  {
    id: 46,
    category: 'Home & Furniture',
    merchant: 'canadian bedding',
    bgImage:
      'https://www.datocms-assets.com/26641/1627674406-canadian-bedding-attachment-00p5g00000vllgsuad.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1627674403-canadian-bedding-attachment-00p5g00000vllgruad.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 47,
    category: 'Electronics',
    merchant: 'canbat',
    bgImage:
      'https://www.datocms-assets.com/26641/1608319438-canbat-attachment-00p5g00000qxtpcua1.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1608319434-canbat-attachment-00p5g00000qxtpbua1.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 48,
    category: 'Home & Furniture',
    merchant: 'candace & basil',
    bgImage:
      'https://www.datocms-assets.com/26641/1648506605-candace-basil-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589303767-donelogoc-b-v2.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 49,
    category: 'Electronics',
    merchant: 'canon',
    bgImage: 'https://www.datocms-assets.com/26641/1648666845-canon-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589315296-donelogocanon.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 50,
    category: 'Sporting Goods',
    merchant: 'cascadia board co.',
    bgImage:
      'https://www.datocms-assets.com/26641/1648667494-cascadia-board-co-min.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589230558-donelogocascadia-board-co.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 51,
    category: 'Home & Furniture',
    merchant: 'casper',
    bgImage:
      'https://www.datocms-assets.com/26641/1590168289-casper-attachment-00pf400000mtirxeaf.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1590168285-casper-attachment-00pf400000mtirweaf.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 52,
    category: 'Electronics',
    merchant: 'cellcom communications',
    bgImage:
      'https://www.datocms-assets.com/26641/1589226337-donegeneric-electronics.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1619707554-done-cellcom-communications-attachment-00p5g00000roeyeua3.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 53,
    category: 'Home & Furniture',
    merchant: 'chairs4gaming',
    bgImage:
      'https://www.datocms-assets.com/26641/1648506332-chairsforgaming-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1597678485-donelogochairs4gaming.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 54,
    category: 'Home & Furniture',
    merchant: 'choice mart',
    bgImage:
      'https://www.datocms-assets.com/26641/1613604271-choice-mart-attachment-00p5g00000qarxauav.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1613604268-choice-mart-attachment-00p5g00000qarx9uaf.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 55,
    category: 'Beauty & Wellness',
    merchant: 'ciao bella',
    bgImage:
      'https://www.datocms-assets.com/26641/1648671040-generic-wellness-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589406487-donelogociao-bella-attachment-00pf400000lrwd0eaf.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 56,
    category: 'Beauty & Wellness',
    merchant: 'citrine teeth whitening',
    bgImage:
      'https://www.datocms-assets.com/26641/1643835050-citrine-card.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1643835071-logo_citrine.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 57,
    category: 'Fashion',
    merchant: 'citylux boutique',
    bgImage:
      'https://www.datocms-assets.com/26641/1648667981-citylux-boutique-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1612061663-citylux-boutique-attachment-00p5g00000qzaq0uad.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 58,
    category: 'Beauty & Wellness',
    merchant: 'clinique virtuelle',
    bgImage:
      'https://www.datocms-assets.com/26641/1648504694-clinique-virtuelle-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589305285-donelogoclinique-virtuelle-attachment-00pf400000lrvyreav.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 59,
    category: 'Fashion',
    merchant: 'cloud footwear',
    bgImage:
      'https://www.datocms-assets.com/26641/1648670975-cloud-footwear-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1612543616-cloud-footwear-attachment-00p5g00000qzozcuat.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 60,
    category: 'Home & Furniture',
    merchant: 'coast appliances',
    bgImage:
      'https://www.datocms-assets.com/26641/1603931018-coast-appliances-attachment-00pf400000ozwpkeaz.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910602-coast-appliances-logo.png',
    status: 'featured',
    zeroInterest: false,
  },
  {
    id: 62,
    category: 'Home & Furniture',
    merchant: 'conscious water inc.',
    bgImage:
      'https://www.datocms-assets.com/26641/1648668042-conscious-water-inc-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589473750-donelogoconscious-water-logotm-e1520557394509.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 63,
    category: 'Home & Furniture',
    merchant: 'cook store inc.',
    bgImage: 'https://www.datocms-assets.com/26641/1635535882-cookcardcsbg.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1635535913-cookstore-white.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 64,
    category: 'Fashion',
    merchant: 'covogue',
    bgImage:
      'https://www.datocms-assets.com/26641/1604948031-covogue-attachment-00p5g00000o58pxuab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1605194152-done-covogue-attachment-00p5g00000o58pwuab.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 65,
    category: 'Home & Furniture',
    merchant: 'create room',
    bgImage:
      'https://www.datocms-assets.com/26641/1594743816-create-room-attachment-00pf400000mxwz4ead.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1594832123-donelogocreateroom-1.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 66,
    category: 'Home & Furniture',
    merchant: 'cybeart',
    bgImage: 'https://www.datocms-assets.com/26641/1648670692-cybeart-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1601497415-cybeart-attachment-00pf400000oputkeal.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 67,
    category: 'Fashion',
    merchant: 'dainty gal jewelry',
    bgImage:
      'https://www.datocms-assets.com/26641/1606429435-dainty-gal-jewelry-attachment-00p5g00000o5vzruaz.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1606772746-done-dainty-gal-jewelry-attachment-00p5g00000o5vzquaz.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 68,
    category: 'Fashion',
    merchant: 'dana dow jewellers',
    bgImage:
      'https://www.datocms-assets.com/26641/1648670483-doneimagedana-dow-min.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589394367-donelogodana-dow-jewellers-attachment-00pf400000lrfzreab.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 69,
    category: 'Hobby & Leisure',
    merchant: "dave's drum shop",
    bgImage:
      'https://www.datocms-assets.com/26641/1589487500-doneimagedrum.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589474963-donelogodavesdrumshop.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 70,
    category: 'Sporting Goods',
    merchant: 'delfast bikes',
    bgImage:
      'https://www.datocms-assets.com/26641/1593708818-delfast-bikes-attachment-00pf400000mwy5eeat.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1594054233-donelogodelfast.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 71,
    category: 'Home & Furniture',
    merchant: 'designrepublic',
    bgImage:
      'https://www.datocms-assets.com/26641/1648577875-design-republic-card.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1648577886-design-republic-logo.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 72,
    category: 'Home & Furniture',
    merchant: 'digby paints',
    bgImage:
      'https://www.datocms-assets.com/26641/1618360948-digby-paints-attachment-00p5g00000rnv5zuar.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1618840704-done-digby-paints-attachment-00p5g00000rnv5yuar.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 73,
    category: 'Auto',
    merchant: 'dirty diesel customs',
    bgImage:
      'https://www.datocms-assets.com/26641/1590006278-dirty-diesel-customs-attachment-00pf400000lscivea3.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1590007486-donelogodirtydiesel.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 74,
    category: 'Electronics',
    merchant: "don's photo shop",
    bgImage:
      'https://www.datocms-assets.com/26641/1589914477-don-s-photo-shop-attachment-00pf400000ls4sjear.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589918938-donelogodon-s-photo-shop-attachment-00pf400000ls4siear.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 75,
    category: 'Home & Furniture',
    merchant: 'douglas bed',
    bgImage:
      'https://www.datocms-assets.com/26641/1589390678-douglas-bed-attachment-00pf400000lrg1eeab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589398305-donelogodouglas-bed-attachment-00pf400000lrg1deab.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 76,
    category: 'Hobby & Leisure',
    merchant: 'drumland',
    bgImage:
      'https://www.datocms-assets.com/26641/1589298856-drumland-attachment-00pf400000lrvqoeaf.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589475641-donelogodrumland-attachment-00pf400000lrvqneaf.png',
    status: 'new',
    zeroInterest: false,
  },
  {
    id: 77,
    category: 'Hobby & Leisure',
    merchant: 'drummond musique',
    bgImage:
      'https://www.datocms-assets.com/26641/1645114776-card_dmusiquethumbnail.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1645114791-logo_drummond-musique-logo-renverse_blanc.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 78,
    category: 'Fashion',
    merchant: 'dynamite',
    bgImage:
      'https://www.datocms-assets.com/26641/1648503310-dynamite-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1600716343-done-dynamite-attachment-00pf400000lrfwoear.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 79,
    category: 'All',
    merchant: 'dyson',
    bgImage: 'https://www.datocms-assets.com/26641/1648506626-dyson-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910654-dyson-logo.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 80,
    category: 'Beauty & Wellness',
    merchant: 'easyfold',
    bgImage:
      'https://www.datocms-assets.com/26641/1589390809-easyfold-attachment-00pf400000lrg7eeab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589394777-donelogoeasyfold.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 81,
    category: 'All',
    merchant: 'ebay',
    bgImage:
      'https://www.datocms-assets.com/26641/1590424738-doneimageebay-our-company-buyer-photo.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1590424817-donelogoebayv2.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 82,
    category: 'Sporting Goods',
    merchant: 'echelon',
    bgImage:
      'https://www.datocms-assets.com/26641/1589403891-doneimageechelon.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589390767-echelon-attachment-00pf400000lrg0gear.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 83,
    category: 'Hobby & Leisure',
    merchant: "eevee's",
    bgImage:
      'https://www.datocms-assets.com/26641/1619709415-done-eevee-s-attachment-00p5g00000qzg2uuax.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1611357835-eevee-s-attachment-00p5g00000qzg2tuax.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 84,
    category: 'Fashion',
    merchant: 'eg bespoke ltd',
    bgImage:
      'https://www.datocms-assets.com/26641/1648671881-eg-bespoke-ltd-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1625504250-done-eg-bespoke-ltd-attachment-00p5g00000txl6duat.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 85,
    category: 'Beauty & Wellness',
    merchant: 'elite lash society',
    bgImage:
      'https://www.datocms-assets.com/26641/1619708050-done-genericbeauty.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1619708159-done-elite-lash-society-attachment-00pf400000oossueax.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 86,
    category: 'Sporting Goods',
    merchant: 'emarkh outdoor products',
    bgImage:
      'https://www.datocms-assets.com/26641/1617919904-emarkh-outdoor-products-attachment-00p5g00000rnfmquar.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1618840974-done-emarkh-outdoor-products-attachment-00p5g00000rnfmpuar.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 87,
    category: 'Beauty & Wellness',
    merchant: 'emuza mobility',
    bgImage:
      'https://www.datocms-assets.com/26641/1600886518-done-emuza-mobility.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1594594414-emuza-mobility-attachment-00pf400000mxm8sead.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 88,
    category: 'Home & Furniture',
    merchant: 'endy',
    bgImage:
      'https://www.datocms-assets.com/26641/1600716385-done-endy-attachment-00pf400000lrunoeav.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589313745-donelogoendy.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 89,
    category: 'Sporting Goods',
    merchant: 'everyday bicycles',
    bgImage:
      'https://www.datocms-assets.com/26641/1589298962-everyday-bicycles-attachment-00pf400000lrgcnea3.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589304188-donelogoeveryday-bicycles-attachment-00pf400000lrgcmea3-1.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 90,
    category: 'Beauty & Wellness',
    merchant: 'fab beauty supplies',
    bgImage: 'https://www.datocms-assets.com/26641/1648505749-fab-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1601499215-fab-beauty-supplies-attachment-00pf400000opuddead.png',
    status: 'new',
    zeroInterest: true,
  },
  {
    id: 92,
    category: 'Fashion',
    merchant: 'finders keep hers boutique',
    bgImage:
      'https://www.datocms-assets.com/26641/1600885402-done-finders-keep-hers-boutique.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1595963043-donelogofinderskeephers.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 93,
    category: 'Sporting Goods',
    merchant: 'fitness nutrition cardio',
    bgImage:
      'https://www.datocms-assets.com/26641/1589576087-fitness-nutrition-cardio-attachment-00pf400000lrsmwear.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589582339-donelogofitnesss-nutrition-equipement.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 94,
    category: 'Sporting Goods',
    merchant: 'fitness town',
    bgImage:
      'https://www.datocms-assets.com/26641/1589573795-doneimagefitnesstown.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1590009062-donelogofitnesstown-v2.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 95,
    category: 'Home & Furniture',
    merchant: 'fizzics canada',
    bgImage:
      'https://www.datocms-assets.com/26641/1638372887-cardfizzicspaybright.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638372907-logofizzicsdraftpourlogow.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 96,
    category: 'Home & Furniture',
    merchant: 'fleur & co.',
    bgImage:
      'https://www.datocms-assets.com/26641/1616708497-fleur-co-attachment-00p5g00000rmpxluab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1616708494-fleur-co-attachment-00p5g00000rmpxkuab.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 97,
    category: 'Hobby & Leisure',
    merchant: 'fluid float',
    bgImage:
      'https://www.datocms-assets.com/26641/1615585326-fluid-float-attachment-00p5g00000rmc3muav.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1617034896-done-fluid-float-attachment-00p5g00000rmc3luav-1.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 98,
    category: 'Fashion',
    merchant: 'flying7',
    bgImage:
      'https://www.datocms-assets.com/26641/1630536336-flying7-attachment-00p5g00000vajytua3.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910690-flying7-logo.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 99,
    category: 'Fashion',
    merchant: 'foot locker',
    bgImage:
      'https://www.datocms-assets.com/26641/1633637941-foot-locker-attachment-00p5g00000x0idsuaz.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1633638431-footlocker.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 100,
    category: 'Sporting Goods',
    merchant: 'foresight sports canada',
    bgImage:
      'https://www.datocms-assets.com/26641/1648667779-foresight-sports-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1622644925-foresight-sports-canada-attachment-00p5g00000txshkuah.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 101,
    category: 'Home & Furniture',
    merchant: 'furnberry inc.',
    bgImage:
      'https://www.datocms-assets.com/26641/1589477401-doneimagefurnberry.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589380348-donelogowhite-furnberry.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 102,
    category: 'Home & Furniture',
    merchant: 'furnishmyhome.ca',
    bgImage: 'https://www.datocms-assets.com/26641/1634648748-fmhcard.jpg',
    overlayImg: 'https://www.datocms-assets.com/26641/1634648767-fmhlogo.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 103,
    category: 'Sporting Goods',
    merchant: 'fxr racing',
    bgImage: 'https://www.datocms-assets.com/26641/1589488549-doneimagefxr.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589382382-donelogofxr-1.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 104,
    category: 'Home & Furniture',
    merchant: 'ga home superstore',
    bgImage:
      'https://www.datocms-assets.com/26641/1630692069-ga-home-superstore-attachment-00p5g00000varp0uaf.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1630692065-ga-home-superstore-attachment-00p5g00000varozuaf.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 105,
    category: 'Fashion',
    merchant: 'garage',
    bgImage:
      'https://www.datocms-assets.com/26641/1589390714-garage-attachment-00pf400000lrfreear.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910731-garage-logo.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 106,
    category: 'Home & Furniture',
    merchant: 'gfurn',
    bgImage:
      'https://www.datocms-assets.com/26641/1589299166-gfurn-attachment-00pf400000lrs1peav.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589230917-donelogogfurn.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 107,
    category: 'Home & Furniture',
    merchant: 'ghostbed',
    bgImage:
      'https://www.datocms-assets.com/26641/1648506651-ghostbed-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910764-ghostbed-logo.png',
    status: 'popular',
    zeroInterest: true,
  },
  {
    id: 108,
    category: 'Sporting Goods',
    merchant: 'giant bicycle canada',
    bgImage:
      'https://www.datocms-assets.com/26641/1589406908-giant-bicycle-canada-attachment-00pf400000lrigaeaj.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589475853-donelogogiant-bicycle-canada-attachment-00pf400000lrigzeaz.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 109,
    category: 'Electronics',
    merchant: 'gibbys',
    bgImage:
      'https://www.datocms-assets.com/26641/1608305034-gibbys-attachment-00p5g00000qxsjjua1.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1618841339-done-gibbys-attachment-00p5g00000qxsjiua1.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 110,
    category: 'Fashion',
    merchant: 'global diamond montreal',
    bgImage:
      'https://www.datocms-assets.com/26641/1600715802-done-global-diamond-montreal-attachment-00pf400000mwvkceap.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1594054080-donelogoglobaldiamond.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 111,
    category: 'Fashion',
    merchant: 'goodwatch',
    bgImage:
      'https://www.datocms-assets.com/26641/1637175722-cardshop-local.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1637176386-logogoodwatch-logo-white-png.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 112,
    category: 'Electronics',
    merchant: 'grand videoke canada',
    bgImage:
      'https://www.datocms-assets.com/26641/1595970374-grand-videoke-canada-attachment-00pf400000naqapea3.png',
    overlayImg:
      'https://www.datocms-assets.com/26641/1595970369-grand-videoke-canada-attachment-00pf400000naqaoea3.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 113,
    category: 'Home & Furniture',
    merchant: 'grizzly shelter',
    bgImage:
      'https://www.datocms-assets.com/26641/1589298977-grizzly-shelter-attachment-00pf400000lrg5veav.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589225774-donelogogrizzly-shelter.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 114,
    category: 'Auto',
    merchant: 'gtr auto',
    bgImage:
      'https://www.datocms-assets.com/26641/1589305915-donegeneric-auto.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589404928-donelogogtr-auto-attachment-00pf400000lrfvhea3.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 115,
    category: 'Hobby & Leisure',
    merchant: 'guitarworks',
    bgImage:
      'https://www.datocms-assets.com/26641/1589488210-doneimageguitarworks-attachment-00pf400000lrv26eaf.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589299290-guitarworks-attachment-00pf400000lrv25eaf.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 116,
    category: 'Fashion',
    merchant: 'gymshark',
    bgImage:
      'https://www.datocms-assets.com/26641/1630364661-gymshark-attachment-00p5g00000va7d5uab.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910796-gymshark-logo.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 117,
    category: 'Fashion',
    merchant: 'halifax watch company',
    bgImage:
      'https://www.datocms-assets.com/26641/1648505212-halifax-watch-company-min.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589897003-donelogohalifax-watch-company-attachment-00pf400000lrvlpeab.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 118,
    category: 'Hobby & Leisure',
    merchant: 'hammock universe',
    bgImage:
      'https://www.datocms-assets.com/26641/1589299407-hammock-universe-attachment-00pf400000lrh5heav.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589305387-donelogohammock-universe-attachment-00pf400000lrh5geav.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 119,
    category: 'Beauty & Wellness',
    merchant: 'happy face skincare co.',
    bgImage:
      'https://www.datocms-assets.com/26641/1628811799-happy-face-skincare-co-attachment-00p5g00000vyybdua1.jpeg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1638910832-happy-face-skincare-co-logo.png',
    status: 'popular',
    zeroInterest: false,
  },
  {
    id: 120,
    category: 'Fashion',
    merchant: 'h-authentica',
    bgImage:
      'https://www.datocms-assets.com/26641/1589402867-doneimageh-authentica-attachment-00pf400000lrhlxeab-1.jpg',
    overlayImg:
      'https://www.datocms-assets.com/26641/1589402778-donelogohauthentica.png',
    status: 'popular',
    zeroInterest: false,
  },
];
module.exports = shops;
