// initialized the DB ??

export default async (models) => {
    
    const poiList = [
        {
            address: "Piazza del Duomo",
            position: "45.4642267830368, 9.191878527990449",
            name: "Milano Chatedral",
            practical_info: "Closed during religious functions", 
            ticket_price: 2.00,
            description: "Started building in 1386, finished in 1932",
        },
        {
            address: "Piazza Castello",
            position: "45.470566444203996, 9.179364689786672",
            name: "Castello Sforzesco",
            practical_info: "Always open", 
            ticket_price: 0.00,
            description: "At the end of via Dante, near Parco Sempione" ,
        },
        {
            address: "Piazza del Duomo",
            position: "45.46592042541375, 9.189978903229967",
            name: "Galleria Vittorio Emanuele II",
            practical_info: "Always open", 
            ticket_price:  0.00,
            description:  "Started builiding in the first part of XX century" ,
        },
        {
            address: "Via Filodrammatici, 2",
            position: "45.467488618531526, 9.189594117010872",
            name: "Teatro alla scala",
            practical_info: "Buy tickets online", 
            ticket_price: 0.00,
            description: "Opened in 1778" ,
        },
        {
            address: "Via Brera, 28",
            position: "45.47205226635634, 9.187803774608213",
            name:  "Piancoteca di Brera",
            practical_info: "Opening hours may vary", 
            ticket_price: 15.00,
            description: "Largest art gallery in Milan" ,
        },
        {
            address: "Piazza di Santa Maria delle Grazie",
            position: "45.46609839939233, 9.170940647188639",
            name: "Santa Maria delle Grazie" ,
            practical_info: "Closed during religious functions", 
            ticket_price: 0.00,
            description: "Started building in 1463" ,
        },
        {
            address: "Piazza del Duomo",
            position: "45.46320036231736, 9.191152164496938",
            name: "Palazzo Reale",
            practical_info: "Closed on Mondays" , 
            ticket_price: 10.00,
            description: "Used for different exhibitions" ,
        },
        {
            address: "Piazza Pio XI, 2",
            position: "45.4635617005393, 9.185713003312502",
            name: "Biblioteca Pinacoteca Academia Ambrosiana",
            practical_info: "Closed on Mondays", 
            ticket_price: 10.00,
            description: "Musem inside Palazzo dell'Ambrosiana" ,
        },
        {
            address: "Via San Vittore, 21",
            position: "45.46199333483703, 9.170248649800742",
            name: "Science and Technology Museum",
            practical_info:  "Closed on mondays", 
            ticket_price: 7.00,
            description: "Biggest tech-related museum in Italy" ,
        },
        {
            address: "Via Gaetano di Castillia, 11",
            position: "45.485746630096656, 9.19038297577184",
            name: "Bosco Verticale",
            practical_info: "Private building", 
            ticket_price: 0.00,
            description: "More than 2000 different tree species" ,
        },
        {
            address: "Largo Isarco, 2",
            position: "45.444267579507446, 9.205304363472345",
            name: "Fondazione Prada",
            practical_info: "Closed on Tuesdays", 
            ticket_price: "5.00",
            description: "Permanent contemporary art gallery" ,
        },
        {
            address: "Piazza Sempione",
            position:  "45.475767888845766, 9.17251577578839",
            name: "Peace's Arch",
            practical_info: "Always open", 
            ticket_price: 0.00,
            description: "Started builiding in 1807" ,
        },
        {
            address: "Via Alessandro Manzoni, 12",
            position: "45.46865556548935, 9.191853637789972",
            name: "Poldi Pezzoli Museum",
            practical_info: "Closed on Tuesdays", 
            ticket_price: 5.00,
            description: "Home-Museum" ,
        },
        {
            address: "Via Monte Napoleone",
            position: "45.468521860391824, 9.195240395867035",
            name: "Via Monte Napoleone",
            practical_info: "Always Open", 
            ticket_price: 0.00,
            description: "Shopping street" ,
        },
        {
            address: "Via Tortona, 56",
            position: "45.45170137476576, 9.16165642996037",
            name: "Mudec",
            practical_info: "Opening hours: 9.30-19.30", 
            ticket_price: 4.00,
            description: "Cultures museum" ,
        },
        {
            address: "Via Palestro, 16",
            position: "45.472920704503096, 9.2000858362569",
            name: "GAM",
            practical_info: "Closed on Mondays", 
            ticket_price: 3.00,
            description: "Modern Art Gallery" ,
        },
        {
            address: "Corso di Porta Ticinese, 35",
            position: "45.45835574292603, 9.182088334113653",
            name: "San Lorenzo Maggiore's Chatedral",
            practical_info: "Always Open", 
            ticket_price: 0.00,
            description: "One of the oldest churc in Milan" ,
        },
        {
            address: "Piazza Gae Aulenti",
            position: "45.48382174654862, 9.18955578800788",
            name: "Piazza Gae Aulenti",
            practical_info:  "Always open", 
            ticket_price: 0.00,
            description: "Designed by archi-star Gae Aulenti" ,
        },
        {
            address: "Via Palestro, 14",
            position: "45.47305972394653, 9.19949749609419" ,
            name: "PAC",
            practical_info: "Closed on Mondays", 
            ticket_price: 2.00,
            description: "Contemporary Art Gallery" ,
        },
        {
            address: "Via Sant'Arialdo, 102",
            position: "45.41597418798737, 9.236105733521573",
            name: "Chiaravalle Abbey",
            practical_info: "Opening Hours: 9-12 15-18", 
            ticket_price: 0.00,
            description: "Founded in the XII Century" ,
        },
    ]
    const eventList = [
        {
            img: "https://oltremateria.it/wp-content/uploads/Milano-design-week-1200X500.jpeg",
            ticket_price: 0.00,
            description: "Exploring new design concepts",
            starting_date: '2022-06-06',
            ending_date: '2022-06-12',
            name: "Milan Design Week",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/it/e/e9/Logo_EuroBasket_2021.png",
            ticket_price: 100.00,
            description: "European Basketball Championship ",
            starting_date: '2022-09-02',
            ending_date: '2022-09-08',
            name: "EuroBasket",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/it/e/e7/Next_gen.png",
            ticket_price: 50.00,
            description: "Under 21 ATP-Finals",
            starting_date: '2022-11-08',
            ending_date: '2022-11-12',
            name: "Next Gen ATP Finals",
          },
          {
            img: "https://assets.fuorisalone.it/assets/fuorisalone/img/fb-fuorisaloneit-2-2022.jpg",
            ticket_price: 10.00,
            description: "Annual design exhibition",
            starting_date: '2022-05-06',
            ending_date: '2022-06-12',
            name: "Fuorisalone 2022",
          },
          {
            img: "https://www.bimu.it/wp-content/uploads/2019/09/logo.svg",
            ticket_price: 7.00,
            description: "Most important italian exhibition about robots",
            starting_date: '2022-10-12',
            ending_date: '2022-10-15',
            name: "Bi-Mu",
          },
          {
            img: "",
            ticket_price: 15.00,
            description: "Largest bike and motorbike exhibition in Italy",
            starting_date: '2022-11-08',
            ending_date: '2022-11-13',
            name: "EICMA",
          },
          {
            img: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/itIT/Images/running-fw21-rfto-tease-clp-masthead-v3-t_tcm213-369217.jpg",
            ticket_price: 0.00,
            description: "Global event, to help clean beaches and islands",
            starting_date: '2022-05-23',
            ending_date: '2022-06-08',
            name: "Run for the Oceans",
          },
          {
            img: "https://www.artribune.com/wp-content/uploads/2022/05/Artur-Zmijewski.-Quando-la-paura-mangia-lanima.-Exhibition-view-at-PAC-%E2%80%93-Padiglione-dArte-Contemporanea-Milano-2022.-Photo-Nico-Covre-Vulcano-Agency-_9.jpg",
            ticket_price: 8.00,
            description: "Contemporary art exhibition",
            starting_date: '2022-03-09',
            ending_date: '2022-06-12',
            name: "Artur Zmijewski",
          },
          {
            img: "https://www.fringemi.com/wp-content/uploads/2022/04/FRINGE_FESTIVAL_MILANO_LOGO_fb.png",
            ticket_price: 0.00,
            description: "Art exhibition with more than 100 events",
            starting_date: '2022-06-13',
            ending_date: '2022-06-19',
            name: "FringeMi Festival",
          },
          {
            img: "https://artidecorative.milanocastello.it/sites/artidecorative.milanocastello.it/files/styles/grande_per_colorbox/public/Ayano_ICON%20photo%20credit%20Pippy%20Mount.jpg?itok=tGXyW5-v",
            ticket_price: 2.00,
            description: "Annual glass art competition",
            starting_date: '2022-03-10',
            ending_date: '2022-06-19',
            name: "Milano Vetro -35",
          },
          
    ]
    const itineraryList = [
        {
            name: "Must see in Milan",
            duration: 12,
            img: "",
            description: "Here are the most important attractions in Milan: Duomo di Milano, Castello Sforzesco, Galleria Vittorio Emanuele, Pinacoteca di Brera",
        },
        {
            name: "Best museums in Milan",
            duration: 4,
            img: "",
            description: "These museums are a must for your first time in Milan! Palazzo reale, Pinacoteca di Brera, Mudec",
        },
        {
            name: "Shopping streets",
            duration: 2,
            img: "",
            description: "Shopping lover? Try these streets to find all best shops in town! Via Monte Napoleone, Galleria Vittorio Emanuele, Corso Garibaldi, Corso Comod",
        },

    ]
    const serviceList = [
        {
            type: "Hospital",
            name: "Niguarda",
            timetable: "Always Open",
            phone_number: "02 64441",
            address: "Piazza dell'Ospedale Maggiore, 3",
        },
        {
            type: "Hospital",
            name: "Ospedale Macedonio Melloni",
            timetable:  "Always Open",
            phone_number: "02 63631",
            address: "Via Macedonio Melloni. 52",
        },
        {
            type: "Hospital",
            name: "Humanitas San Pio X",
            timetable: "Always Open",
            phone_number: "02 69511",
            address: "Via Francesco Nava, 31",
        },
        {
            type: "Bank/ATM",
            name: "Bper Bank",
            timetable: "Mon-Fry 8:30-13:30, 14:45-15:45",
            phone_number: "02 875 029",
            address: "Piazza Giuseppe Missori, 2",
        },
        {
            type: "Bank/ATM",
            name: "Intesa San Paolo",
            timetable: "Mon-Fry 8:30-14, 15:00-16:45",
            phone_number: "02 5518 1901",
            address: "Via della Commenda, 12",
        },
        {
            type: "Bank/ATM",
            name: "MPS",
            timetable: "Mon-Fry 8:35-13:35, 14:15-15:45",
            phone_number: "02 9179 6311",
            address: "Via Gustavo Fara, 39",
        },
        {
            type: "Pharmacy",
            name: "LaFarmacia",
            timetable: "Mon-Fry 8-20 Sat-San 10-20",
            phone_number: "02 876 457",
            address: "Via Broletto, 1",
        },
        {
            type: "Pharmacy",
            name: "Farmacia Carlo Alberto",
            timetable: "Mon-Fry 8-19",
            phone_number: "02 8646 2067",
            address: "Via Giuseppe Mazzini, 12",
        },
        {
            type: "Pharmacy",
            name: "Farmacia del Garibaldi",
            timetable: "Mon-Fry 8:30-19:30",
            phone_number: "02 655 4250",
            address: "Corso Garibaldi, 83",
        },
        {
            type: "Pharmacy",
            name: "Farmacia Olmetto",
            timetable: "Mon-Fry 8:0-19",
            phone_number: "02 8645 3382",
            address: "Via Olmetto, 21",
        },
        
    ]
    await models.poi.bulkCreate(poiList)
    await models.event.bulkCreate(eventList)
    await models.itinerary.bulkCreate(itineraryList)
    await models.service.bulkCreate(serviceList)
}