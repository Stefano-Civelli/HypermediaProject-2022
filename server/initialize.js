// initialized the DB ??

export default async (models) => {
  const poiList = [
    {
      address: 'Piazza del Duomo',
      position: '45.4642267830368, 9.191878527990449',
      name: 'Milan Cathedral',
      practical_info: 'Closed during religious functions',
      ticket_price: 2.0,
      description:
        'Il Duomo di Milano, la cattedrale cuore della città, è il luogo che rimane nella memoria di tutti coloro che hanno visitato Milano almeno una volta. Le centinaia di guglie e statue, che ricordano una vera e propria foresta di marmo, sorprendono chiunque ci arrivi uscendo dalla metropolitana o arrivando dalla Galleria Vittorio Emanuele. Non a caso la sua costruzione, iniziata nel 1386 e durata più di sei secoli, fu voluta dal signore di Milano come simbolo della forza e grandezza della città. È il più grande e complesso edificio gotico d’Italia, realizzato in marmo bianco rosato che proviene da una cava dedicata solo a questa costruzione. È lungo 157 metri e sulla guglia maggiore, alta 108,5 metri, svetta la statua dorata della Madonnina, simbolo amato da tutti i milanesi e non solo. Nel mondo infatti esistono numerose copie della Madonnina di Milano, una è persino sull’Everest! Il Duomo è anche la più grande costruzione gotica al mondo in cui è possibile camminare sul tetto. Una delle cose da non perdere nella visita è infatti salire sulle terrazze, da cui si gode una vista imperdibile sulla città e le montagne.',
    },
    {
      address: 'Piazza Castello',
      position: '45.470566444203996, 9.179364689786672',
      name: 'Castello Sforzesco',
      practical_info: 'Always open',
      ticket_price: 0.0,
      description: 'At the end of via Dante, near Parco Sempione',
    },
    {
      address: 'Piazza del Duomo',
      position: '45.46592042541375, 9.189978903229967',
      name: 'Galleria Vittorio Emanuele II',
      practical_info: 'Always open',
      ticket_price: 0.0,
      description: 'Started builiding in the first part of XX century',
    },
    {
      address: 'Via Filodrammatici, 2',
      position: '45.467488618531526, 9.189594117010872',
      name: 'Teatro alla scala',
      practical_info: 'Buy tickets online',
      ticket_price: 0.0,
      description: 'Opened in 1778',
    },
    {
      address: 'Via Brera, 28',
      position: '45.47205226635634, 9.187803774608213',
      name: 'Piancoteca di Brera',
      practical_info: 'Opening hours may vary',
      ticket_price: 15.0,
      description: 'Largest art gallery in Milan',
    },
    {
      address: 'Piazza di Santa Maria delle Grazie',
      position: '45.46609839939233, 9.170940647188639',
      name: 'Santa Maria delle Grazie',
      practical_info: 'Closed during religious functions',
      ticket_price: 0.0,
      description: 'Started building in 1463',
    },
    {
      address: 'Piazza del Duomo',
      position: '45.46320036231736, 9.191152164496938',
      name: 'Palazzo Reale',
      practical_info: 'Closed on Mondays',
      ticket_price: 10.0,
      description: 'Used for different exhibitions',
    },
    {
      address: 'Piazza Pio XI, 2',
      position: '45.4635617005393, 9.185713003312502',
      name: 'Biblioteca Pinacoteca Academia Ambrosiana',
      practical_info: 'Closed on Mondays',
      ticket_price: 10.0,
      description: "Musem inside Palazzo dell'Ambrosiana",
    },
    {
      address: 'Via San Vittore, 21',
      position: '45.46199333483703, 9.170248649800742',
      name: 'Science and Technology Museum',
      practical_info: 'Closed on mondays',
      ticket_price: 7.0,
      description: 'Biggest tech-related museum in Italy',
    },
    {
      address: 'Via Gaetano di Castillia, 11',
      position: '45.485746630096656, 9.19038297577184',
      name: 'Bosco Verticale',
      practical_info: 'Private building',
      ticket_price: 0.0,
      description: 'More than 2000 different tree species',
    },
    {
      address: 'Largo Isarco, 2',
      position: '45.444267579507446, 9.205304363472345',
      name: 'Fondazione Prada',
      practical_info: 'Closed on Tuesdays',
      ticket_price: '5.00',
      description: 'Permanent contemporary art gallery',
    },
    {
      address: 'Piazza Sempione',
      position: '45.475767888845766, 9.17251577578839',
      name: "Peace's Arch",
      practical_info: 'Always open',
      ticket_price: 0.0,
      description: 'Started builiding in 1807',
    },
    {
      address: 'Via Alessandro Manzoni, 12',
      position: '45.46865556548935, 9.191853637789972',
      name: 'Poldi Pezzoli Museum',
      practical_info: 'Closed on Tuesdays',
      ticket_price: 5.0,
      description: 'Home-Museum',
    },
    {
      address: 'Via Monte Napoleone',
      position: '45.468521860391824, 9.195240395867035',
      name: 'Via Monte Napoleone',
      practical_info: 'Always Open',
      ticket_price: 0.0,
      description: 'Shopping street',
    },
    {
      address: 'Via Tortona, 56',
      position: '45.45170137476576, 9.16165642996037',
      name: 'Mudec',
      practical_info: 'Opening hours: 9.30-19.30',
      ticket_price: 4.0,
      description: 'Cultures museum',
    },
    {
      address: 'Via Palestro, 16',
      position: '45.472920704503096, 9.2000858362569',
      name: 'GAM',
      practical_info: 'Closed on Mondays',
      ticket_price: 3.0,
      description: 'Modern Art Gallery',
    },
    {
      address: 'Corso di Porta Ticinese, 35',
      position: '45.45835574292603, 9.182088334113653',
      name: "San Lorenzo Maggiore's Chatedral",
      practical_info: 'Always Open',
      ticket_price: 0.0,
      description: 'One of the oldest churc in Milan',
    },
    {
      address: 'Piazza Gae Aulenti',
      position: '45.48382174654862, 9.18955578800788',
      name: 'Piazza Gae Aulenti',
      practical_info: 'Always open',
      ticket_price: 0.0,
      description: 'Designed by archi-star Gae Aulenti',
    },
    {
      address: 'Via Palestro, 14',
      position: '45.47305972394653, 9.19949749609419',
      name: 'PAC',
      practical_info: 'Closed on Mondays',
      ticket_price: 2.0,
      description: 'Contemporary Art Gallery',
    },
    {
      address: "Via Sant'Arialdo, 102",
      position: '45.41597418798737, 9.236105733521573',
      name: 'Chiaravalle Abbey',
      practical_info: 'Opening Hours: 9-12 15-18',
      ticket_price: 0.0,
      description: 'Founded in the XII Century',
    },
  ]
  const poi_img_list = [
    {
      poiId: 1,
      img_path:
        'https://duomo.shbcdn.com/blobs/variants/8/a/5/f/8a5f9f6b-fe25-4b40-857c-b82c80126a88_medium.jpg?_636862546878987581',
    },
    {
      poiId: 1,
      img_path:
        'https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2022/05/02/1651509563-milano-duomo-1.jpg?_=1651509563',
    },
    {
      poiId: 1,
      img_path:
        'https://duomo.shbcdn.com/blobs/variants/a/c/8/e/ac8e3797-d691-420b-9b49-0d851f3ca9c3_xl.jpg?_636840242257777638',
    },
    {
      poiId: 2,
      img_path:
        'http://www.turismo.it/fileadmin/mediafiles/turismo/articoli/201902/images/1254x836/iStock-184374451.jpg',
    },
    {
      poiId: 2,
      img_path:
        'https://cdn.getyourguide.com/img/tour/5ea16be9e0fb0.jpeg/97.jpg',
    },
    {
      poiId: 2,
      img_path:
        'https://www.yesmilano.it/sites/default/files/luogo/copertina/64/60/Castello_sforzesco_copertina_Depositphotos_157455922_xl-2015.jpg',
    },
    {
      poiId: 3,
      img_path:
        'https://cdn2.civitatis.com/italia/milan/guia/galleria-vittorio-emanuele-ii.jpg',
    },
    {
      poiId: 3,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Galleria_Milano_%28179532365%29.jpeg',
    },
    {
      poiId: 3,
      img_path:
        'https://www.residencedesenzano.it/wp-content/uploads/2016/01/galleria_vittorio_emanuele_milano.jpg',
    },
    {
      poiId: 4,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/3/3f/Milan_-_Scala_-_Facade.jpg',
    },
    {
      poiId: 4,
      img_path:
        'https://www.operapertutti.it/wp-content/uploads/2020/09/teatro-alla-scala.jpg',
    },
    {
      poiId: 4,
      img_path:
        'https://www.milanotoday.it/~media/horizontal-hi/69405908568147/la-scala-ph-brescia-e-amisano-2.jpg',
    },
    {
      poiId: 5,
      img_path:
        'https://zero-media.s3.amazonaws.com/uploads/2015/05/pinacoteca_brera-milano-zero.jpg',
    },
    {
      poiId: 5,
      img_path:
        'https://storico.beniculturali.it/mibac/multimedia/MiBAC/images/med/88/d4a52ff7f5563dad5282957d6116bcda22214b.jpg',
    },
    {
      poiId: 5,
      img_path:
        'https://pinacotecabrera.org/wp-content/uploads/2019/03/Pinacoteca-di-Brera-Salone-Napoleonico-1024x577.jpg',
    },
    {
      poiId: 6,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/8/83/Santa_Maria_delle_Grazie_Milan_2013.jpg',
    },
    {
      poiId: 6,
      img_path:
        'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/9/2014/11/Santa-Maria-delle-Grazie.jpg',
    },
    {
      poiId: 6,
      img_path:
        'https://www.milanopocket.it/wp-content/uploads/2019/04/chiesa-santa-maria-delle-grazie-milano-633x400.jpg',
    },
    {
      poiId: 7,
      img_path:
        'https://www.yesmilano.it/sites/default/files/luogo/copertina/164/2066/Palazzo_Reale_Photo_by_Lorenzo_Pennati_1280x560.jpg',
    },
    {
      poiId: 7,
      img_path:
        'https://www.milanoweekend.it/wp-content/uploads/2017/11/palazzorealemw-620x340.jpg',
    },
    {
      poiId: 7,
      img_path:
        'https://c1.staticflickr.com/8/7332/16277820418_212a9265a3_b.jpg',
    },
    {
      poiId: 8,
      img_path:
        'https://image.jimcdn.com/app/cms/image/transf/none/path/sf63059cf0e80ccf2/image/i6676cf264b1d30b9/version/1613580296/image.jpg',
    },
    {
      poiId: 8,
      img_path:
        'https://www.ambrosiana.it/wp-content/uploads/2021/04/SALA-LETTURA-2.jpg',
    },
    {
      poiId: 8,
      img_path:
        'https://i0.wp.com/www.hisour.com/wp-content/uploads/2019/09/Ambrosian-Library-Milan-Italy.jpg?fit=960%2C640&ssl=1',
    },
    {
      poiId: 9,
      img_path:
        'https://www.milanoperibambini.it/images/2019c/mscienza-milano.jpg',
    },
    {
      poiId: 9,
      img_path:
        'https://www.museoscienza.org/besrv/sites/default/files/2019-11/nave-scuola-ebe-preview.jpg',
    },
    {
      poiId: 9,
      img_path:
        'https://www.tastingtheworld.it/wp-content/uploads/2018/10/Museo-della-Scienza-e-della-Tecnologia-di-Milano-1-1200x804.jpg',
    },
    {
      poiId: 10,
      img_path:
        'https://blog.unioneprofessionisti.com/wp-content/uploads/2019/11/quali-sono-le-caratteristiche-e-i-benefici-del-bosco-verticale-bioedilizia.jpg',
    },
    {
      poiId: 10,
      img_path:
        'https://www.ristrutturazione-torino.it/wp-content/uploads/2020/12/4568777.png',
    },
    {
      poiId: 10,
      img_path:
        'https://cdn.lifegate.it/RyWMvxmzowTqR5ZgM3Ev22srgJs=/1960x1102/smart/https://www.lifegate.it/app/uploads/COVER-rendering-05.jpg',
    },
    {
      poiId: 11,
      img_path:
        'https://www.yesmilano.it/sites/default/files/luogo/copertina/155/6328/FondazionePrada_1280x560.jpg',
    },
    {
      poiId: 11,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/2/2d/Fondazione_PRADA_%2C_Via_Ripamonti_-_Largo_Isarco_area%2C_Golden_Tower_Rem_Koolhass_design.jpg',
    },
    {
      poiId: 11,
      img_path:
        'https://image.jimcdn.com/app/cms/image/transf/none/path/sf63059cf0e80ccf2/image/i3b20afba2b8177f5/version/1613730213/image.jpg',
    },
    {
      poiId: 12,
      img_path:
        'https://imbruttito.com/images/milano-arco-della-pace.jpg?p=16x9&s=4633d34e4051cd8000c68325a194f773',
    },
    {
      poiId: 12,
      img_path:
        'https://forbes.it/wp-content/uploads/2022/01/Arch-of-Light-3-min-scaled.jpg',
    },
    {
      poiId: 12,
      img_path:
        'https://www.milanocittastato.it/wp-content/uploads/2018/10/CherchiARCODELLAPACE.jpg',
    },
    {
      poiId: 13,
      img_path:
        'https://www.inexhibit.com/wp-content/uploads/2015/01/Milano-Polzi-Pezoli-Paolini-esterno-1-Inexhibit.jpg',
    },
    {
      poiId: 13,
      img_path:
        'https://cdn2.civitatis.com/italia/milan/guia/museo-poldi-pezzoli.jpg',
    },
    {
      poiId: 13,
      img_path:
        'https://casemuseo.it/wp-content/uploads/2015/06/20110622_PoldiPezzoli-2012.jpg',
    },
    {
      poiId: 14,
      img_path:
        'https://www.divinamilano.it/wp-content/themes/yootheme/cache/Via-Montenapoleone-5ab8b757.jpeg',
    },
    {
      poiId: 14,
      img_path:
        'https://citynews-milanotoday.stgy.ovh/~media/horizontal-mid/16344606787087/ferrari-montenapo-frame-da-video-nimesh-s-2.jpg',
    },
    {
      poiId: 14,
      img_path: 'https://www.mentelocale.it/images/articoli/462x260/52948.jpg',
    },
    {
      poiId: 15,
      img_path:
        'https://www.mudec.it/ita/wp-content/uploads/sites/2/2020/11/Mudec-MuseoCultureMilano-1200x628.jpg',
    },
    {
      poiId: 15,
      img_path:
        'https://modulo.net/files/chunks/55376d3822e7b96b5800000e/5a154a9da0d55638e6000a9d.jpg',
    },
    {
      poiId: 15,
      img_path:
        'https://citynews-milanotoday.stgy.ovh/~media/original-hi/63892734962767/mudec-3.jpg',
    },
    {
      poiId: 16,
      img_path:
        'https://www.milanoweekend.it/wp-content/uploads/2018/03/Villa-Reale_credit_GAM-min.jpg',
    },
    {
      poiId: 16,
      img_path:
        'https://www.milanoweekend.it/wp-content/uploads/2018/03/Sala-da-Ballo_-photo-credit_Delfino-Sisto-Legnani_Marco-Cappelletti-min-Copia-620x340.jpg',
    },
    {
      poiId: 16,
      img_path:
        'https://artemagazine.it/wp-content/uploads/2021/11/Divisionismo_2-Collezioni_04.jpg',
    },
    {
      poiId: 17,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/c/ce/Milano_-_Basilica_san_Lorenzo_a_porta_Ticinese.jpg',
    },
    {
      poiId: 17,
      img_path:
        'https://www.residencelepontina.it/wp-content/uploads/2016/01/basilica_san_lorenzo_milano.jpg',
    },
    {
      poiId: 17,
      img_path:
        'https://www.milanopocket.it/wp-content/uploads/2019/04/basilica-san-lorenzo-maggiore-milano-633x400.jpg',
    },
    {
      poiId: 18,
      img_path:
        'https://images.unsplash.com/photo-1545256633-9d719bec17c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      poiId: 18,
      img_path:
        'https://cdn2.civitatis.com/italia/milan/guia/piazza-gae-aulenti.jpg',
    },
    {
      poiId: 18,
      img_path:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piazza-gae-aulenti-of-milan-italy-designed-by-the-argentine-news-photo-1631632007.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
    },
    {
      poiId: 19,
      img_path:
        'https://www.luoghidiinteresse.it/wp-content/uploads/MILANO-FOTO-42-Pac-Padiglione-dell%E2%80%99arte-contemporanea-e1489616686268.jpg',
    },
    {
      poiId: 19,
      img_path: 'http://www.arte.it/foto/600x450/4e/11241-Mission.jpg',
    },
    {
      poiId: 19,
      img_path:
        'https://www.chiamamilano.it/uploads/1/6/8/6/16865702/published/pac-blue-4rc.jpeg?1509451007',
    },
    {
      poiId: 20,
      img_path:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/AbbaziaChiaravalle.jpg/1200px-AbbaziaChiaravalle.jpg',
    },
    {
      poiId: 20,
      img_path:
        'https://www.lombardiafacile.regione.lombardia.it/wps/wcm/connect/9277e75c-ef98-428a-ab07-458c0f10fc71/strada+delle+abbazie.jpeg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9277e75c-ef98-428a-ab07-458c0f10fc71-mnHUIu6',
    },
    {
      poiId: 20,
      img_path:
        'https://milanoweekend.it/wp-content/uploads/2013/06/abbazia_chiaravalle_esterno.jpg',
    },
  ]
  const eventList = [
    {
      img: 'https://oltremateria.it/wp-content/uploads/Milano-design-week-1200X500.jpeg',
      ticket_price: 0.0,
      description: 'Exploring new design concepts',
      starting_date: '2022-06-06',
      ending_date: '2022-06-12',
      name: 'Milan Design Week',
      poiId: 5,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/it/e/e9/Logo_EuroBasket_2021.png',
      ticket_price: 100.0,
      description: 'European Basketball Championship ',
      starting_date: '2022-09-02',
      ending_date: '2022-09-08',
      name: 'EuroBasket',
      poiId: 1,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/it/e/e7/Next_gen.png',
      ticket_price: 50.0,
      description: 'Under 21 ATP-Finals',
      starting_date: '2022-11-08',
      ending_date: '2022-11-12',
      name: 'Next Gen ATP Finals',
      poiId: 3,
    },
    {
      img: 'https://assets.fuorisalone.it/assets/fuorisalone/img/fb-fuorisaloneit-2-2022.jpg',
      ticket_price: 10.0,
      description: 'Annual design exhibition',
      starting_date: '2022-05-06',
      ending_date: '2022-06-12',
      name: 'Fuorisalone 2022',
      poiId: 6,
    },
    {
      img: 'https://www.bimu.it/wp-content/uploads/2019/09/logo.svg',
      ticket_price: 7.0,
      description: 'Most important italian exhibition about robots',
      starting_date: '2022-10-12',
      ending_date: '2022-10-15',
      name: 'Bi-Mu',
      poiId: 10,
    },
    {
      img: 'https://www.showsbee.com/newmaker/www/u/2022/20221/cfr_img/EICMA-logo.png',
      ticket_price: 15.0,
      description: 'Largest bike and motorbike exhibition in Italy',
      starting_date: '2022-11-08',
      ending_date: '2022-11-13',
      name: 'EICMA',
      poiId: 12,
    },
    {
      img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/itIT/Images/running-fw21-rfto-tease-clp-masthead-v3-t_tcm213-369217.jpg',
      ticket_price: 0.0,
      description: 'Global event, to help clean beaches and islands',
      starting_date: '2022-05-23',
      ending_date: '2022-06-08',
      name: 'Run for the Oceans',
      poiId: 20,
    },
    {
      img: 'https://www.artribune.com/wp-content/uploads/2022/05/Artur-Zmijewski.-Quando-la-paura-mangia-lanima.-Exhibition-view-at-PAC-%E2%80%93-Padiglione-dArte-Contemporanea-Milano-2022.-Photo-Nico-Covre-Vulcano-Agency-_9.jpg',
      ticket_price: 8.0,
      description: 'Contemporary art exhibition',
      starting_date: '2022-03-09',
      ending_date: '2022-06-12',
      name: 'Artur Zmijewski',
      poiId: 7,
    },
    {
      img: 'https://www.fringemi.com/wp-content/uploads/2022/04/FRINGE_FESTIVAL_MILANO_LOGO_fb.png',
      ticket_price: 0.0,
      description: 'Art exhibition with more than 100 events',
      starting_date: '2022-06-13',
      ending_date: '2022-06-19',
      name: 'FringeMi Festival',
      poiId: 7,
    },
    {
      img: 'https://artidecorative.milanocastello.it/sites/artidecorative.milanocastello.it/files/styles/grande_per_colorbox/public/Ayano_ICON%20photo%20credit%20Pippy%20Mount.jpg?itok=tGXyW5-v',
      ticket_price: 2.0,
      description: 'Annual glass art competition',
      starting_date: '2022-03-10',
      ending_date: '2022-06-19',
      name: 'Milano Vetro -35',
      poiId: 15,
    },
  ]
  const itineraryList = [
    {
      name: 'Must see in Milan',
      duration: 12,
      img: 'https://duomo.shbcdn.com/blobs/variants/8/a/5/f/8a5f9f6b-fe25-4b40-857c-b82c80126a88_medium.jpg?_636862546878987581',
      description:
        'Here are the most important attractions in Milan: Duomo di Milano, Castello Sforzesco, Galleria Vittorio Emanuele, Pinacoteca di Brera',
    },
    {
      name: 'Best museums in Milan',
      duration: 4,
      img: 'https://milanhotspots.com/wp-content/uploads/2018/01/49_d4a52ff7f5563dad5282957d6116bcda22214b.jpg',
      description:
        'These museums are a must for your first time in Milan! Palazzo reale, Pinacoteca di Brera, Mudec',
    },
    {
      name: 'Shopping streets',
      duration: 2,
      img: 'https://www.divinamilano.it/wp-content/themes/yootheme/cache/Via-Montenapoleone-5ab8b757.jpeg',
      description:
        'Shopping lover? Try these streets to find all best shops in town! Via Monte Napoleone, Galleria Vittorio Emanuele, Corso Garibaldi, Corso Comod',
    },
  ]
  const serviceTypeList = [
    {
      type: 'Hospital',
      description:
        'Need to book a visit? Take a look at the hospitals near to you.',
      img: '/assets/Hospital_img.jpg',
    },
    {
      type: 'Bank',
      description: 'Check out the banks available in the city.',
      img: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      type: 'Pharmacy',
      description: 'Need some drugs? Find the closest pharmacy!',
      img: 'https://images.unsplash.com/photo-1622230208995-0f26eba75875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      type: 'InfoPoint',
      description:
        'In need of some additional informations about the city? Here are some InfoPoints.',
      img: 'https://images.unsplash.com/photo-1532256253150-2f0e4e883a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      type: 'SuperMarket',
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
    },
    {
      serviceTypeId: 1,
      name: 'Ospedale Macedonio Melloni',
      timetable: 'Always Open',
      phone_number: '02 63631',
      address: 'Via Macedonio Melloni. 52',
    },
    {
      serviceTypeId: 1,
      name: 'Humanitas San Pio X',
      timetable: 'Always Open',
      phone_number: '02 69511',
      address: 'Via Francesco Nava, 31',
    },
    {
      serviceTypeId: 2,
      name: 'Bper Bank',
      timetable: 'Mon-Fry 8:30-13:30, 14:45-15:45',
      phone_number: '02 875 029',
      address: 'Piazza Giuseppe Missori, 2',
    },
    {
      serviceTypeId: 2,
      name: 'Intesa San Paolo',
      timetable: 'Mon-Fry 8:30-14, 15:00-16:45',
      phone_number: '02 5518 1901',
      address: 'Via della Commenda, 12',
    },
    {
      serviceTypeId: 2,
      name: 'MPS',
      timetable: 'Mon-Fry 8:35-13:35, 14:15-15:45',
      phone_number: '02 9179 6311',
      address: 'Via Gustavo Fara, 39',
    },
    {
      serviceTypeId: 3,
      name: 'LaFarmacia',
      timetable: 'Mon-Fry 8-20 Sat-San 10-20',
      phone_number: '02 876 457',
      address: 'Via Broletto, 1',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia Carlo Alberto',
      timetable: 'Mon-Fry 8-19',
      phone_number: '02 8646 2067',
      address: 'Via Giuseppe Mazzini, 12',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia del Garibaldi',
      timetable: 'Mon-Fry 8:30-19:30',
      phone_number: '02 655 4250',
      address: 'Corso Garibaldi, 83',
    },
    {
      serviceTypeId: 3,
      name: 'Farmacia Olmetto',
      timetable: 'Mon-Fry 8-19',
      phone_number: '02 8645 3382',
      address: 'Via Olmetto, 21',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point Duomo',
      timetable: 'Open every day 10-18',
      phone_number: '02 8845 5555',
      address: 'Piazza del Duomo, 14',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point Mercanti',
      timetable: 'Mon-Fry 10-18',
      phone_number: '02 8515 5931',
      address: 'Via dei Mercanti, 8',
    },
    {
      serviceTypeId: 4,
      name: 'Info Point ATM',
      timetable: 'Mon-Fry 10-15:30',
      phone_number: 'No Phone Number',
      address: 'Via Olmetto, 21',
    },
    {
      serviceTypeId: 5,
      name: 'Esselunga Gae Aulenti',
      timetable: 'Mon-Sat 7:30-22 Sun 8-20',
      phone_number: '02 6556 0991',
      address: 'Via Olmetto, 21',
    },
    {
      serviceTypeId: 5,
      name: 'Pam Local',
      timetable: 'Open every day 8-22',
      phone_number: '02 4540 2570',
      address: 'Piazza Santa Maria Beltrade, 1',
    },
    {
      serviceTypeId: 5,
      name: 'Carrefour Express',
      timetable: 'Open every day 7-23',
      phone_number: '02 8909 2209',
      address: 'Via Ancora, 4',
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
  ]
  await models.Poi.bulkCreate(poiList)
  await models.Poi_img.bulkCreate(poi_img_list)
  await models.Event.bulkCreate(eventList)
  await models.itinerary.bulkCreate(itineraryList)
  await models.ServiceType.bulkCreate(serviceTypeList)
  await models.service.bulkCreate(serviceList)
  await models.poi_itinerary.bulkCreate(poiItineraryList)
}
