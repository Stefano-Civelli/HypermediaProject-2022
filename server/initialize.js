// initialized the DB ??

export default async (models) => {
  const poiList = [
    {
      address: 'Piazza del Duomo',
      position: '45.4642267830368, 9.191878527990449',
      name: 'Milan Cathedral',
      practical_info: 'Closed during religious functions',
      ticket_price: 2.0,
      long_description: 
        "The Duomo of Milano, the Cathedral at the heart of the city, is an architectural masterpiece that remains imprinted in the memory of all those who visit Milano. The thousands of intricately carved spires and statues, like a marble forest, are an awesome sight for those exiting the Metro or arriving from Galleria Vittorio Emanuele. It is not surprising to learn that its construction, which began in 1386 and lasted almost half a millennium, was commissioned by the Duke of Milano Gian Galeazzo Visconti as a symbol of the glory and grandeur of the city. \n \n Milano’s Duomo is the largest and most elaborate Gothic building in Italy: made of pink-hued white marble from a dedicated quarry, it is 157 meters in length and 108.5 meters high at the top of the main spire, where rests the glistening golden statue of the Madonnina, an evocative symbol much-loved both by all Milanese and visitors. It is not generally known that there are quite a few copies of Milano’s Madonnina around the world, including one on Mount Everest.",
      description:
        'Milan cathedral is the largest and most complex Gothic building in Italy. The entire city of Milan can be admired from the rooftop terraces.',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2798.2787111624275!2d9.1897542!3d45.4641892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ac28236193%3A0x34a0550ec03673e6!2sDuomo!5e0!3m2!1sen!2sit!4v1654619505067!5m2!1sen!2sit',
      
    },
    {
      address: 'Piazza Castello',
      position: '45.470566444203996, 9.179364689786672',
      name: 'Castello Sforzesco',
      practical_info: 'Always open',
      ticket_price: 0.0,
      long_description: '',
      description: 'At the end of via Dante, near Parco Sempione',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.966627459925!2d9.17714381549889!3d45.470476179101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786fcb60ea97b3d%3A0x6556dd66c472c29b!2sSforzesco%20Castle!5e0!3m2!1sen!2sit!4v1654619619289!5m2!1sen!2sit',
    },
    {
      address: 'Piazza del Duomo',
      position: '45.46592042541375, 9.189978903229967',
      name: 'Galleria Vittorio Emanuele II',
      practical_info: 'Always open',
      ticket_price: 0.0,
      long_description: '',
      description: 'Started builiding in the first part of XX century',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.196600450955!2d9.187751417443847!3d45.46584340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47793506fd86b6c3%3A0x270b9ca95809d416!2sGalleria%20Vittorio%20Emanuele%20II!5e0!3m2!1sen!2sit!4v1654619666739!5m2!1sen!2sit',
    },
    {
      address: 'Via Filodrammatici, 2',
      position: '45.467488618531526, 9.189594117010872',
      name: 'Teatro alla scala',
      practical_info: 'Buy tickets online',
      ticket_price: 0.0,
      long_description: '',
      description: 'Opened in 1778',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1192290445406!2d9.187362515498796!3d45.46740207910103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ad891a5757%3A0x1bade948102e834f!2sTeatro%20alla%20Scala!5e0!3m2!1sen!2sit!4v1654619729531!5m2!1sen!2sit',
    },
    {
      address: 'Via Brera, 28',
      position: '45.47205226635634, 9.187803774608213',
      name: 'Piancoteca di Brera',
      practical_info: 'Opening hours may vary',
      ticket_price: 15.0,
      long_description: '',
      description: 'Largest art gallery in Milan',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.893240211957!2d9.185625815498893!3d45.471954479101115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ee11587e4e1f%3A0x1b367a8e2cb13736!2sPinacoteca%20di%20Brera!5e0!3m2!1sen!2sit!4v1654619761194!5m2!1sen!2sit',
    },
    {
      address: 'Piazza di Santa Maria delle Grazie',
      position: '45.46609839939233, 9.170940647188639',
      name: 'Santa Maria delle Grazie',
      practical_info: 'Closed during religious functions',
      ticket_price: 0.0,
      long_description: '',
      description: 'Started building in 1463',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1906647269816!2d9.168773415498706!3d45.465962979101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c15a44bf1c83%3A0xed5bcdc4d3c75a59!2sSanta%20Maria%20delle%20Grazie!5e0!3m2!1sen!2sit!4v1654619791964!5m2!1sen!2sit',
    },
    {
      address: 'Piazza del Duomo',
      position: '45.46320036231736, 9.191152164496938',
      name: 'Palazzo Reale',
      practical_info: 'Closed on Mondays',
      ticket_price: 10.0,
      long_description: '',
      description: 'Used for different exhibitions',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.169686088783!2d9.190202658235588!3d45.46296709477524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec57575a1%3A0xdd579e63ba086381!2sRoyal%20Palace!5e0!3m2!1sen!2sit!4v1654619820537!5m2!1sen!2sit',
    },
    {
      address: 'Piazza Pio XI, 2',
      position: '45.4635617005393, 9.185713003312502',
      name: 'Biblioteca Pinacoteca Academia Ambrosiana',
      practical_info: 'Closed on Mondays',
      ticket_price: 10.0,
      long_description: '',
      description: "Musem inside Palazzo dell'Ambrosiana",
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3139592270863!2d9.183599415498627!3d45.463479079100914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ac88b2ca9f%3A0xcc86bf5e7ffbd36e!2sAmbrosian%20Library!5e0!3m2!1sen!2sit!4v1654619856970!5m2!1sen!2sit',
    },
    {
      address: 'Via San Vittore, 21',
      position: '45.46199333483703, 9.170248649800742',
      name: 'Science and Technology Museum',
      practical_info: 'Closed on mondays',
      ticket_price: 7.0,
      long_description: '',
      description: 'Biggest tech-related museum in Italy',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.397788938599!2d9.16808141549859!3d45.46179017910095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c159c26cee9b%3A0x72458fca19e5eb92!2sMuseo%20Nazionale%20della%20Scienza%20e%20della%20Tecnologia%20Leonardo%20da%20Vinci!5e0!3m2!1sen!2sit!4v1654619886737!5m2!1sen!2sit',
    },
    {
      address: 'Via Gaetano di Castillia, 11',
      position: '45.485746630096656, 9.19038297577184',
      name: 'Bosco Verticale',
      practical_info: 'Private building',
      ticket_price: 0.0,
      long_description: '',
      description: 'More than 2000 different tree species',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.214815188939!2d9.188205015499387!3d45.48561877910131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c132b4a49b21%3A0x545068687f3a217b!2sBosco%20Verticale!5e0!3m2!1sen!2sit!4v1654619924198!5m2!1sen!2sit',
    },
    {
      address: 'Largo Isarco, 2',
      position: '45.444267579507446, 9.205304363472345',
      name: 'Fondazione Prada',
      practical_info: 'Closed on Tuesdays',
      ticket_price: 5.00,
      long_description: '',
      description: 'Permanent contemporary art gallery',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.2774993125945!2d9.202628415497975!3d45.44406387910073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c69ef804a0d7%3A0x1545d69fc021179f!2sFondazione%20Prada!5e0!3m2!1sen!2sit!4v1654619965440!5m2!1sen!2sit',
    },
    {
      address: 'Piazza Sempione',
      position: '45.475767888845766, 9.17251577578839',
      name: "Peace's Arch",
      practical_info: 'Always open',
      ticket_price: 0.0,
      long_description: '',
      description: 'Started builiding in 1807',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.7076564368494!2d9.170262715499053!3d45.47569267910106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c147aa41b7cf%3A0xfbbcb44d7ec5c615!2sArco%20della%20Pace!5e0!3m2!1sen!2sit!4v1654619992451!5m2!1sen!2sit',
    },
    {
      address: 'Via Alessandro Manzoni, 12',
      position: '45.46865556548935, 9.191853637789972',
      name: 'Poldi Pezzoli Museum',
      practical_info: 'Closed on Tuesdays',
      ticket_price: 5.0,
      long_description: '',
      description: 'Home-Museum',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0633540013337!2d9.189504015498803!3d45.468527679100944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b1f202e397%3A0x849898e3faf27d6e!2sPoldi%20Pezzoli%20Museum!5e0!3m2!1sen!2sit!4v1654620020314!5m2!1sen!2sit',
    },
    {
      address: 'Via Monte Napoleone',
      position: '45.468521860391824, 9.195240395867035',
      name: 'Via Monte Napoleone',
      practical_info: 'Always Open',
      ticket_price: 0.0,
      long_description: '',
      description: 'Shopping street',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.072979318978!2d9.19294441549881!3d45.46833377910094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b046e886ed%3A0x30dd2847bfbfd4b4!2sVia%20Monte%20Napoleone%2C%2020121%20Milano%20MI!5e0!3m2!1sen!2sit!4v1654620048945!5m2!1sen!2sit',
    },
    {
      address: 'Via Tortona, 56',
      position: '45.45170137476576, 9.16165642996037',
      name: 'Mudec',
      practical_info: 'Opening hours: 9.30-19.30',
      ticket_price: 4.0,
      long_description: '',
      description: 'Cultures museum',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9063388014106!2d9.15934971549821!3d45.45154347910079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3e618f2c2c1%3A0x72134ad9d5328077!2sMudec!5e0!3m2!1sen!2sit!4v1654620078083!5m2!1sen!2sit',
    },
    {
      address: 'Via Palestro, 16',
      position: '45.472920704503096, 9.2000858362569',
      name: 'GAM',
      practical_info: 'Closed on Mondays',
      ticket_price: 3.0,
      long_description: '',
      description: 'Modern Art Gallery',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8523683219664!2d9.197811315498951!3d45.47277777910098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b9166aa2d1%3A0xc193980dc5f1bc0b!2sModern%20Art%20Gallery!5e0!3m2!1sen!2sit!4v1654620108016!5m2!1sen!2sit',
    },
    {
      address: 'Corso di Porta Ticinese, 35',
      position: '45.45835574292603, 9.182088334113653',
      name: "San Lorenzo Maggiore's Chatedral",
      practical_info: 'Always Open',
      ticket_price: 0.0,
      long_description: '',
      description: 'One of the oldest churc in Milan',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5753476147893!2d9.17988891549843!3d45.458212779100904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3fff8fa2aa5%3A0x84e38da300dd3a16!2sBasilica%20San%20Lorenzo%20Maggiore!5e0!3m2!1sen!2sit!4v1654620136876!5m2!1sen!2sit',
    },
    {
      address: 'Piazza Gae Aulenti',
      position: '45.48382174654862, 9.18955578800788',
      name: 'Piazza Gae Aulenti',
      practical_info: 'Always open',
      ticket_price: 0.0,
      long_description: '',
      description: 'Designed by archi-star Gae Aulenti',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.3089004747517!2d9.187410015499344!3d45.48372397910119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c133391261d1%3A0xb55f65872cb8ba7!2sPiazza%20Gae%20Aulenti%2C%2020124%20Milano%20MI!5e0!3m2!1sen!2sit!4v1654620167119!5m2!1sen!2sit',
    },
    {
      address: 'Via Palestro, 14',
      position: '45.47305972394653, 9.19949749609419',
      name: 'PAC',
      practical_info: 'Closed on Mondays',
      ticket_price: 2.0,
      long_description: '',
      description: 'Contemporary Art Gallery',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.844716474281!2d9.19498062979565!3d45.47293191225567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b9bc18b95b%3A0x95c3d804f41744c2!2sPAC%20-%20Padiglione%20d&#39;Arte%20Contemporanea!5e0!3m2!1sen!2sit!4v1654620193332!5m2!1sen!2sit',
    },
    {
      address: "Via Sant'Arialdo, 102",
      position: '45.41597418798737, 9.236105733521573',
      name: 'Chiaravalle Abbey',
      practical_info: 'Opening Hours: 9-12 15-18',
      ticket_price: 0.0,
      long_description: '',
      description: 'Founded in the XII Century',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.6773179308657!2d9.233906315497016!3d45.4158461791005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c5a079ba2cef%3A0xac1eadfbc364324b!2sChiaravalle%20Abbey!5e0!3m2!1sen!2sit!4v1654620219258!5m2!1sen!2sit',
    },
  ]
  const poi_img_list = [
    {
      poiId: 1,
      alt_desc: '',
      img_path:'poi_group_page/MilanCathedral.jpg',
    },
    {
      poiId: 1,
      alt_desc: '',
      img_path:'poi_background/MilanCathedral1.jpg',
    },
    {
      poiId: 1,
      alt_desc: '',
      img_path:'poi_background/MilanCathedral2.jpg',
    },
    {
      poiId: 2,
      alt_desc: '',
      img_path:'poi_group_page/Sforzesco.jpg',
    },
    {
      poiId: 2,
      alt_desc: '',
      img_path:'poi_background/Sforzesco.webp',
    },
    {
      poiId: 2,
      alt_desc: '',
      img_path:'poi_background/Sforzesco.webp',
    },
    {
      poiId: 3,
      alt_desc: '',
      img_path:'poi_group_page/Galleria.jpg',
    },
    {
      poiId: 3,
      alt_desc: '',
      img_path:'poi_background/Galleria.jpg',
    },
    {
      poiId: 3,
      alt_desc: '',
      img_path:'poi_background/Galleria.jpg',
    },
    {
      poiId: 4,
      alt_desc: '',
      img_path:'poi_group_page/TeatroAllaScala.jpg',
    },
    {
      poiId: 4,
      alt_desc: '',
      img_path:'poi_background/TeatroAllaScala.webp',
    },
    {
      poiId: 4,
      alt_desc: '',
      img_path:'poi_background/TeatroAllaScala.webp',
    },
    {
      poiId: 5,
      alt_desc: '',
      img_path:'poi_group_page/Pinacoteca.jpg',
    },
    {
      poiId: 5,
      alt_desc: '',
      img_path:'poi_background/Pinacoteca.jpg',
    },
    {
      poiId: 5,
      alt_desc: '',
      img_path:'poi_background/Pinacoteca.jpg',
    },
    {
      poiId: 6,
      alt_desc: '',
      img_path:'poi_group_page/SantaMaria.jpg',
    },
    {
      poiId: 6,
      alt_desc: '',
      img_path:'poi_background/SantaMaria.jpg',
    },
    {
      poiId: 6,
      alt_desc: '',
      img_path:'poi_background/SantaMaria.jpg',
    },
    {
      poiId: 7,
      alt_desc: '',
      img_path:'poi_group_page/Reale.jpg',
    },
    {
      poiId: 7,
      alt_desc: '',
      img_path:'poi_background/Reale.jpg',
    },
    {
      poiId: 7,
      alt_desc: '',
      img_path:'poi_background/Reale.jpg',
    },
    {
      poiId: 8,
      alt_desc: '',
      img_path:'poi_group_page/Biblioteca.jpg',
    },
    {
      poiId: 8,
      alt_desc: '',
      img_path:'poi_background/Biblioteca.jpg',
    },
    {
      poiId: 8,
      alt_desc: '',
      img_path:'poi_background/Biblioteca.jpg',
    },
    {
      poiId: 9,
      alt_desc: '',
      img_path:'poi_group_page/Scienza.jpg',
    },
    {
      poiId: 9,
      alt_desc: '',
      img_path:'poi_background/Scienza.jpg',
    },
    {
      poiId: 9,
      alt_desc: '',
      img_path:'poi_background/Scienza.jpg',
    },
    {
      poiId: 10,
      alt_desc: '',
      img_path:'poi_group_page/Bosco.jpg',
    },
    {
      poiId: 10,
      alt_desc: '',
      img_path:'poi_background/Bosco.jpg',
    },
    {
      poiId: 10,
      alt_desc: '',
      img_path:'poi_background/Bosco.jpg',
    },
    {
      poiId: 11,
      alt_desc: '',
      img_path:'poi_group_page/Prada.jpg',
    },
    {
      poiId: 11,
      alt_desc: '',
      img_path:'poi_background/Prada.jpg',
    },
    {
      poiId: 11,
      alt_desc: '',
      img_path:'poi_background/Prada.jpg',
    },
    {
      poiId: 12,
      alt_desc: '',
      img_path:'poi_group_page/Arco.jpg',
    },
    {
      poiId: 12,
      alt_desc: '',
      img_path:'poi_background/Arco.jpg',
    },
    {
      poiId: 12,
      alt_desc: '',
      img_path:'poi_background/Arco.jpg',
    },
    {
      poiId: 13,
      alt_desc: '',
      img_path:'poi_group_page/Pezzoli.jpg',
    },
    {
      poiId: 13,
      alt_desc: '',
      img_path:'poi_background/Pezzoli.webp',
    },
    {
      poiId: 13,
      alt_desc: '',
      img_path:'poi_background/Pezzoli.webp',
    },
    {
      poiId: 14,
      alt_desc: '',
      img_path:'poi_group_page/MonteNapo.jpg',
    },
    {
      poiId: 14,
      alt_desc: '',
      img_path:'poi_background/MonteNapo.jpg',
    },
    {
      poiId: 14,
      alt_desc: '',
      img_path: 'poi_background/MonteNapo.jpg',
    },
    {
      poiId: 15,
      alt_desc: '',
      img_path:'poi_group_page/Mudec.jpg',
    },
    {
      poiId: 15,
      alt_desc: '',
      img_path:'poi_background/Mudec.jpg',
    },
    {
      poiId: 15,
      alt_desc: '',
      img_path:'poi_background/Mudec.jpg',
    },
    {
      poiId: 16,
      alt_desc: '',
      img_path:'poi_group_page/GAM.jpg',
    },
    {
      poiId: 16,
      alt_desc: '',
      img_path:'poi_background/GAM.jpg',
    },
    {
      poiId: 16,
      alt_desc: '',
      img_path:'poi_background/GAM.jpg',
    },
    {
      poiId: 17,
      alt_desc: '',
      img_path:'poi_group_page/Lorenzo.jpg',
    },
    {
      poiId: 17,
      alt_desc: '',
      img_path:'poi_background/Lorenzo.jpg',
    },
    {
      poiId: 17,
      alt_desc: '',
      img_path:'poi_background/Lorenzo.jpg',
    },
    {
      poiId: 18,
      alt_desc: '',
      img_path:'poi_group_page/Gae.jpg',
    },
    {
      poiId: 18,
      alt_desc: '',
      img_path:'poi_background/Gae.webp',
    },
    {
      poiId: 18,
      alt_desc: '',
      img_path:'poi_background/Gae.webp',
    },
    {
      poiId: 19,
      alt_desc: '',
      img_path:'poi_group_page/PAC.jpeg',
    },
    {
      poiId: 19,
      alt_desc: '',
      img_path: 'poi_background/PAC.jpg',
    },
    {
      poiId: 19,
      alt_desc: '',
      img_path:'poi_background/PAC.jpg',
    },
    {
      poiId: 20,
      alt_desc: '',
      img_path:'poi_group_page/Chiaravalle.jpg',
    },
    {
      poiId: 20,
      alt_desc: '',
      img_path:'poi_background/Chiaravalle.jpg',
    },
    {
      poiId: 20,
      alt_desc: '',
      img_path:'poi_background/Chiaravalle.jpg',
    },
  ]
  const eventList = [
    {
      img: 'events_group_page/DesignWeek2022.png',
      header_img: 'events_background/DesignWeek2022.webp',
      ticket_price: 0.0,
      description: 'Exploring new design concepts',
      long_description: "Milan Design Week attracts professionals and enthusiasts from all over the world to Milan, around two key events: the Salone Internazionale del Mobile in the Rho Fiera pavilions, and the Fuorisalone in the various districts of the city. Over the years the Design Weeks have developed all over the world, since 2017 the World Design Weeks project was born, a virtual network of 40 design weeks spread all over the world. The goal is to share the knowledge, resources and good practices of the project so as to improve people's understanding and education in the world of design.",
      alt_desc: '',
      starting_date: '2022-06-06',
      ending_date: '2022-06-12',
      name: 'Milan Design Week',
      poiId: 5,
    },
    {
      img: 'events_group_page/EuroBasket.jpg',
      header_img: 'events_background/EuroBasket.png',
      ticket_price: 100.0,
      description: 'European Basketball Championship ',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-09-02',
      ending_date: '2022-09-08',
      name: 'EuroBasket',
      poiId: 1,
    },
    {
      img: 'events_group_page/NextGenATP.jpg',
      header_img: 'events_background/NextGenATP.jpg',
      ticket_price: 50.0,
      description: 'Under 21 ATP-Finals',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-11-08',
      ending_date: '2022-11-12',
      name: 'Next Gen ATP Finals',
      poiId: 3,
    },
    {
      img: 'events_group_page/Fuorisalone2022.jpg',
      header_img: 'events_background/Fuorisalone2022.webp',
      ticket_price: 10.0,
      description: 'Annual design exhibition',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-05-06',
      ending_date: '2022-06-12',
      name: 'Fuorisalone 2022',
      poiId: 6,
    },
    {
      img: 'events_group_page/BIMU.jpg',
      header_img: 'events_background/BIMU.jpg',
      ticket_price: 7.0,
      description: 'Most important italian exhibition about robots',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-10-12',
      ending_date: '2022-10-15',
      name: 'Bi-Mu',
      poiId: 10,
    },
    {
      img: 'events_group_page/EICMA.png',
      header_img: 'events_background/EICMA.jpg',
      ticket_price: 15.0,
      description: 'Largest bike and motorbike exhibition in Italy',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-11-08',
      ending_date: '2022-11-13',
      name: 'EICMA',
      poiId: 12,
    },
    {
      img: 'events_group_page/RunForTheOceans.jpg',
      header_img: 'events_background/RunForTheOceans.jpg',
      ticket_price: 0.0,
      description: 'Global event, to help clean beaches and islands',
      long_description: '',
      alt_desc: '',
      starting_date: '2020-05-23',
      ending_date: '2020-06-08',
      name: 'Run for the Oceans',
      poiId: 20,
    },
    {
      img: 'events_group_page/Artur.jpeg',
      header_img: 'events_background/Artur.jpg',
      ticket_price: 8.0,
      description: 'Contemporary art exhibition',
      long_description: '',
      alt_desc: '',
      starting_date: '2022-03-09',
      ending_date: '2022-06-12',
      name: 'Artur Zmijewski',
      poiId: 7,
    },
    {
      img: 'events_group_page/FringeMi.png',
      header_img: 'events_background/Fringe.webp',
      ticket_price: 0.0,
      description: 'Art exhibition with more than 100 events',
      long_description: '',
      alt_desc: '',
      starting_date: '2023-06-13',
      ending_date: '2023-06-19',
      name: 'FringeMi Festival',
      poiId: 7,
    },
    {
      img: 'events_group_page/MilanoVetro.jpg',
      header_img: 'events_background/MilanoVetro.jpg',
      ticket_price: 2.0,
      description: 'Annual glass art competition',
      long_description: '',
      alt_desc: '',
      starting_date: '2023-03-10',
      ending_date: '2023-06-19',
      name: 'Milano Vetro -35',
      poiId: 15,
    },
  ]
  const itineraryList = [
    {
      name: 'Must see in Milan',
      duration: 12,
      long_description: '',
      alt_desc: '',
      img: 'https://duomo.shbcdn.com/blobs/variants/8/a/5/f/8a5f9f6b-fe25-4b40-857c-b82c80126a88_medium.jpg?_636862546878987581',
      description:
        'Here are the most important attractions in Milan: Duomo di Milano, Castello Sforzesco, Galleria Vittorio Emanuele, Pinacoteca di Brera',
      map_src:
        'https://www.google.com/maps/d/u/0/embed?mid=1VGvpuzKVJxiw4KNTq0XH61-9ByHpx8k&ehbc=2E312F',
    },
    {
      name: 'Best museums in Milan',
      duration: 16,
      long_description: '',
      alt_desc: '',
      img: 'https://milanhotspots.com/wp-content/uploads/2018/01/49_d4a52ff7f5563dad5282957d6116bcda22214b.jpg',
      description:
        'These museums are a must for your first time in Milan! Palazzo reale, Pinacoteca di Brera, Mudec',
      map_src:
        'https://www.google.com/maps/d/u/0/embed?mid=1nLYSqwXK2y3YNaKtGbiKt77XlSBhH80&ehbc=2E312F',
    },
    {
      name: 'Shopping streets',
      duration: 4,
      long_description: '',
      alt_desc: '',
      img: 'https://www.divinamilano.it/wp-content/themes/yootheme/cache/Via-Montenapoleone-5ab8b757.jpeg',
      description:
        'Shopping lover? Try these streets to find all best shops in town! Via Monte Napoleone, Galleria Vittorio Emanuele, Corso Garibaldi, Corso Como',
      map_src:
        'https://www.google.com/maps/d/u/0/embed?mid=1yQnbCfJsDKpd4VPO6A8WZiSr1Bb4c4w&ehbc=2E312F',
    },
    {
      name: 'Art at its finest',
      duration: 8,
      long_description: '',
      alt_desc: '',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg/800px-El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg',
      description:
        "If you're all about art and its forms you have to visit these places",
      map_src:
        'https://www.google.com/maps/d/u/0/embed?mid=1o7WM1VOps_kWk7uQf_RJ8CmCtYIWP7o&ehbc=2E312F',
    },
    {
      name: 'Milan in a rush',
      duration: 2,
      long_description: '',
      alt_desc: '',
      img: 'https://c.tenor.com/PNmq7RhXTXYAAAAd/keemstar-im-fast-as-fuck-boi.gif',
      description: 'U have to be fast af boi?',
      map_src:
        'https://www.google.com/maps/d/u/0/embed?mid=1BKwGRd02wgFrTS35LC9BZuPHPN-zi2U&ehbc=2E312F',
    },
  ]
  const serviceTypeList = [
    {
      type: 'Hospital',
      alt_desc: '',
      description:
        'Need to book a visit? Take a look at the hospitals near to you.',
      img: 'https://www.comune.segrate.mi.it/export/sites/segrate/img/novita/Ospedale-San-Raffaele.jpg_1000484673.jpg',
    },
    {
      type: 'Bank',
      alt_desc: '',
      description: 'Check out the banks available in the city.',
      img: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      type: 'Pharmacy',
      alt_desc: '',
      description: 'Need some drugs? Find the closest pharmacy!',
      img: 'https://images.unsplash.com/photo-1622230208995-0f26eba75875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      type: 'InfoPoint',
      alt_desc: '',
      description:
        'In need of some additional informations about the city? Here are some InfoPoints.',
      img: 'https://images.unsplash.com/photo-1532256253150-2f0e4e883a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      type: 'SuperMarket',
      alt_desc: '',
      description: 'U 2 broke 2 eat in a restaurant? lol.',
      img: 'https://www.esselunga.it/cms/images/images/image-social/esselunga.png',
    },
  ]
  const serviceList = [
    {
      serviceTypeId: 1,
      name: 'Niguarda',
      timetable: 'Always Open',
      phone_number: '02 64441',
      address: "Piazza dell'Ospedale Maggiore, 3",
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.0220484085426!2d9.184995415558948!3d45.509634779101475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c0c5f04e1a71%3A0x2b20483935bf22ed!2sASST%20Grande%20Ospedale%20Metropolitano%20Niguarda!5e0!3m2!1sit!2sit!4v1655111082789!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 1,
      name: 'Ospedale Macedonio Melloni',
      timetable: 'Always Open',
      phone_number: '02 63631',
      address: 'Via Macedonio Melloni. 52',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.183983602468!2d9.214604137063768!3d45.46609757449712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c690eb4fd619%3A0x2fd9acab6ef28eeb!2sOspedale%20Macedonio%20Melloni!5e0!3m2!1sit!2sit!4v1655111119882!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 1,
      name: 'Humanitas San Pio X',
      timetable: 'Always Open',
      phone_number: '02 69511',
      address: 'Via Francesco Nava, 31',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7575850628305!2d9.187204116233024!3d45.49482613941909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12a68fe6761%3A0x505d101695045feb!2sHumanitas%20San%20Pio%20X%20Ospedale%2FPoliambulatorio!5e0!3m2!1sit!2sit!4v1655111147989!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 2,
      name: 'Bper Bank',
      timetable: 'Mon-Fry 8:30-13:30, 14:45-15:45',
      phone_number: '02 875 029',
      address: 'Piazza Giuseppe Missori, 2',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.4180517199075!2d9.185917816232434!3d45.46138194165139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7f5cc8050a9%3A0xb3ecb4fe7810ee07!2sBPER%20Banca!5e0!3m2!1sit!2sit!4v1655111178290!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 2,
      name: 'Intesa San Paolo',
      timetable: 'Mon-Fry 8:30-14, 15:00-16:45',
      phone_number: '02 5518 1901',
      address: 'Via della Commenda, 12',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5474148409253!2d9.194070737062606!3d45.458775574985545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a7729acea3%3A0x2a674a316d146b4a!2sIntesa%20Sanpaolo%20S.p.A.!5e0!3m2!1sit!2sit!4v1655111251892!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 2,
      name: 'MPS',
      timetable: 'Mon-Fry 8:35-13:35, 14:15-15:45',
      phone_number: '02 9179 6311',
      address: 'Via Gustavo Fara, 39',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.1959133051128!2d9.196778316232821!3d45.48599944000836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c761e12652cd%3A0x74506ea4ccadbb87!2sBanca%20Monte%20dei%20Paschi%20di%20Siena!5e0!3m2!1sit!2sit!4v1655111273854!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 3,
      name: 'LaFarmacia',
      timetable: 'Mon-Fry 8-20 Sat-San 10-20',
      phone_number: '02 876 457',
      address: 'Via Broletto, 1',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1966563182996!2d9.181746937063723!3d45.46584227451409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ada0dc062f%3A0xa36a983f6212e27e!2sLafarmacia.Centro%20Milano!5e0!3m2!1sit!2sit!4v1655111298384!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia Carlo Alberto',
      timetable: 'Mon-Fry 8-19',
      phone_number: '02 8646 2067',
      address: 'Via Giuseppe Mazzini, 12',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3645897808665!2d9.186220616232447!3d45.462459041579415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6abf8fb00b1%3A0x280f0218a29f1f9c!2sFarmacia%20Carlo%20Alberto%20S.a.s.%20della%20Dr.ssa%20Peviani%20Alessandra%20e%20C.!5e0!3m2!1sit!2sit!4v1655111319287!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia del Garibaldi',
      timetable: 'Mon-Fry 8:30-19:30',
      phone_number: '02 655 4250',
      address: 'Corso Garibaldi, 83',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.67136133058!2d9.181662316232675!3d45.47642374064768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c14a6857ff8b%3A0x5a1a19ae86517b10!2sFarmacia%20del%20Garibaldi!5e0!3m2!1sit!2sit!4v1655111343471!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia Olmetto',
      timetable: 'Mon-Fry 8-19',
      phone_number: '02 8645 3382',
      address: 'Via Olmetto, 21',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5458878086156!2d9.182646816232443!3d45.4588063418232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aa879bae63%3A0x9012745b3d70742e!2sFarmacia%20Olmetto%20S.A.S.%20del%20Dott.%20Selle%20Marco%20e%20C.!5e0!3m2!1sit!2sit!4v1655111365977!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point Duomo',
      timetable: 'Open every day 10-18',
      phone_number: '02 8845 5555',
      address: 'Piazza del Duomo, 14',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.545516377096!2d9.1826468162004!3d45.45881382546937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ac55555555%3A0x7e5ef10adc0a1c31!2sInfoPoint%20Ufficio%20Informazioni%20Turistiche%20Milano!5e0!3m2!1sit!2sit!4v1655111396589!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point Mercanti',
      timetable: 'Mon-Fry 10-18',
      phone_number: '02 8515 5931',
      address: 'Via dei Mercanti, 8',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2300354975796!2d9.185205416200398!3d45.4651698241966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7a1a9addb57%3A0xadee0e8b5c144c5f!2sUfficio%20Informazioni%20Turistiche%20Ufficiale%20del%20Comune%20di%20Milano%20e%20YesMilano!5e0!3m2!1sit!2sit!4v1655111437884!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point ATM',
      timetable: 'Mon-Fry 10-15:30',
      phone_number: 'No Phone Number',
      address: 'Piazza del Duomo, 1',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3827592034436!2d9.184149172170887!3d45.4620929836958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c713a3d23731%3A0xa95b02d53fd60c8e!2sInfopoint%20atm%20area%20B%20e%20area%20C!5e0!3m2!1sit!2sit!4v1655111551881!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 5,
      name: 'Esselunga Gae Aulenti',
      timetable: 'Mon-Sat 7:30-22 Sun 8-20',
      phone_number: '02 6556 0991',
      address: 'Via Luigi Sturzo, 1',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.2973926676664!2d9.187933216232722!3d45.483955740144644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c133c3f45065%3A0x1e47dc17c19959d3!2sEsselunga!5e0!3m2!1sit!2sit!4v1655111607590!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 5,
      name: 'Pam Local',
      timetable: 'Open every day 8-22',
      phone_number: '02 4540 2570',
      address: 'Piazza Santa Maria Beltrade, 1',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3405197643265!2d9.181793237063266!3d45.46294397470763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7279095a1a3%3A0xd1cd8562ce0c4338!2sPam%20Local!5e0!3m2!1sit!2sit!4v1655111642639!5m2!1sit!2sit',
    },
    {
      serviceTypeId: 5,
      name: 'Carrefour Express',
      timetable: 'Open every day 7-23',
      phone_number: '02 8909 2209',
      address: 'Via Ancona, 4',
      map_src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8029935476893!2d9.184617216232606!3d45.4737723408244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b4cb0e418f%3A0x419f28c71a756a99!2sCarrefour%20Express!5e0!3m2!1sit!2sit!4v1655111680154!5m2!1sit!2sit',
    },
  ]
  const poiItineraryList = [
    {
      poiId: 1,
      itineraryId: 1,
    },
    {
      poiId: 2,
      itineraryId: 1,
    },
    {
      poiId: 5,
      itineraryId: 1,
    },
    {
      poiId: 12,
      itineraryId: 1,
    },
    {
      poiId: 17,
      itineraryId: 1,
    },
    {
      poiId: 9,
      itineraryId: 2,
    },
    {
      poiId: 15,
      itineraryId: 2,
    },
    {
      poiId: 16,
      itineraryId: 2,
    },
    {
      poiId: 13,
      itineraryId: 2,
    },
    {
      poiId: 19,
      itineraryId: 2,
    },
    {
      poiId: 14,
      itineraryId: 3,
    },
    {
      poiId: 3,
      itineraryId: 3,
    },
    {
      poiId: 18,
      itineraryId: 3,
    },
    {
      poiId: 10,
      itineraryId: 3,
    },
    {
      poiId: 11,
      itineraryId: 3,
    },
    {
      poiId: 8,
      itineraryId: 4,
    },
    {
      poiId: 4,
      itineraryId: 4,
    },
    {
      poiId: 7,
      itineraryId: 4,
    },
    {
      poiId: 5,
      itineraryId: 4,
    },
    {
      poiId: 20,
      itineraryId: 4,
    },
    {
      poiId: 1,
      itineraryId: 5,
    },
    {
      poiId: 3,
      itineraryId: 5,
    },
    {
      poiId: 4,
      itineraryId: 5,
    },
    {
      poiId: 7,
      itineraryId: 5,
    },
    {
      poiId: 14,
      itineraryId: 5,
    },
  ]
  await models.Poi.bulkCreate(poiList)
  await models.Poi_img.bulkCreate(poi_img_list)
  await models.Event.bulkCreate(eventList)
  await models.itinerary.bulkCreate(itineraryList)
  await models.ServiceType.bulkCreate(serviceTypeList)
  await models.service.bulkCreate(serviceList)
  await models.poi_itinerary.bulkCreate(poiItineraryList)
}
