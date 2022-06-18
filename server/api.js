const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

// Development
//const database = new Sequelize('postgres://postgres:postgres@localhost:5432/hyp')
const database = new Sequelize('postgres://postgres:admin@localhost:5432/hyp')

// Production (use this code when deploying to production in Heroku)
/*
const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})*/

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Event = database.define('event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: DataTypes.STRING,
    ticket_price: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    starting_date: DataTypes.DATEONLY,
    ending_date: DataTypes.DATEONLY,
    name: DataTypes.STRING,
  })
  const Poi = database.define('poi', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    address: DataTypes.STRING,
    position: DataTypes.STRING,
    name: DataTypes.STRING,
    practical_info: DataTypes.TEXT,
    ticket_price: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    map_src: DataTypes.TEXT,
  })
  const Poi_img = database.define('poi_img', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img_path: DataTypes.STRING,
  })
  const service = database.define('service', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    timetable: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    map_src: DataTypes.TEXT,
  })
  const ServiceType = database.define('service_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
  })
  const itinerary = database.define('itinerary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT,
    map_src: DataTypes.TEXT,
  })
  const poi_itinerary = database.define('poi_itinerary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  })

  //relationship between "service" and "ServiceType"
  service.belongsTo(ServiceType)
  ServiceType.hasMany(service)

  //relationship between "poi" and "poi_img"
  Poi_img.belongsTo(Poi)
  Poi.hasMany(Poi_img)

  //relationship between "event" and "poi"
  Event.belongsTo(Poi)
  Poi.hasMany(Event)

  //relationship between "poi" and "itinerary"
  Poi.belongsToMany(itinerary, { through: poi_itinerary })
  itinerary.belongsToMany(Poi, { through: poi_itinerary })

  await database.sync(
    { force: true } /*needed if want to also drop existing tables*/
  )

  return {
    Event,
    Poi,
    Poi_img,
    service,
    itinerary,
    ServiceType,
    poi_itinerary,
  }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
  index: {
    title: 'Homepage',
    image: 'path/to/img (if any)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
  about: {
    title: 'About',
    image: 'path/to/img (if any)',
    description: `Milano & Partners è l'agenzia di promozione ufficiale della città di Milano. È un'associazione fondata dal Comune di Milano e la Camera di Commercio di Milano, Monza, Brianza, Lodi, creata per attivare collaborazioni e partnership con  imprese locali, marchi globali, università, istituzioni culturali e altri enti pubblici.

 

    Promuoviamo il brand YesMilano nel mondo per attrarre nuovi visitatori, talenti e investimenti per la città.
    
    La nostra missione è quella di supportare la crescita di Milano e renderla la più accogliente città al mondo.
    
    Milano & Partners vive grazie al sostegno finanziario e operativo dei suoi partner. Siamo orgogliosi di condividere con i nostri partner l'obiettivo comune di rendere Milano una destinazione globale sempre più attrattiva.`,
  },
  contactus: {
    title: 'ContactUs',
    image: 'path/to/img (if any)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
}

// ----------------------------------------------

async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models) //initializes the DB

  /** Itineraries APIs -------------------------------------------*/
  app.get('/itinerary/list', async (req, res) => {
    const result = await models.itinerary.findAll()
    return res.json(result)
  })

  app.get('/itinerary/:id', async (req, res) => {
    const id = req.params.id
    const result = await models.itinerary.findOne({
      where: { id: id },
    })
    return res.json(result)
  })

  app.get('/pois-by-itin-id/:id', async (req, res) => {
    const id = req.params.id
    const result = await models.poi_itinerary.findAll({
      where: { itineraryId: id },
    })
    const pois = []
    for (const poi of result) {
      let temp = await models.Poi.findOne({
        where: { id: poi.id },
        include: [{ model: models.Poi_img }],
      })
      let temp2 = await models.Event.findAll({
        where: { poiId: poi.id },
      })
      temp.dataValues.events = temp2
      pois.push(temp)
    }
    return res.json(pois)
  })

  app.get('/maxItinId', async (req, res) => {
    const result = await models.itinerary.findAll()
    const maxItinId = result[result.length - 1].dataValues.id
    return res.json(maxItinId)
  })

  app.get('/itinerary/random/:number', async (req, res) => {
    const number = req.params.number
    const result = await models.itinerary.findAll({
      order: [[Sequelize.fn('RANDOM')]],
      limit: number,
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        id: element.id,
        name: element.name,
        img: element.img,
        description: element.description,
      })
    }
    return res.json(filtered)
  })
  /** Itineraries APIs -------------------------------------------*/

  /** Events APIs -------------------------------------------*/
  app.get('/event/list', async (req, res) => {
    const result = await models.Event.findAll({
      include: [{ model: models.Poi }],
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        start: element.starting_date,
        end: element.ending_date,
        location: element.poi.address,
      })
    }
    return res.json(filtered)
  })

  app.get('/event/winter', async (req, res) => {
    const startingMonth = 12
    const endingMonth = 3
    const startingDay = 21
    const endingDay = 20
    const result = await models.Event.findAll({
      include: [{ model: models.Poi }],
    })
    const filtered = []
    for (const element of result) {
      let splittedDate = element.starting_date.split('-')
      if (parseInt(splittedDate[1]) > 0 && parseInt(splittedDate[1]) < endingMonth) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
      if (
        parseInt(splittedDate[1]) == startingMonth &&
        parseInt(splittedDate[2]) >= startingDay
      ) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
      if (
        parseInt(splittedDate[1]) == endingMonth &&
        parseInt(splittedDate[2]) <= endingDay
      ) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
    }
    return res.json(filtered)
  })

  app.get('/event/summer', async (req, res) => {
    const startingMonth = 6
    const endingMonth = 9
    const startingDay = 21
    const endingDay = 23
    const result = await models.Event.findAll({
      include: [{ model: models.Poi }],
    })
    const filtered = []
    for (const element of result) {
      let splittedDate = element.starting_date.split('-')
      console.log(splittedDate)
      if (
        parseInt(splittedDate[1]) > startingMonth &&
        parseInt(splittedDate[1]) < endingMonth
      ) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
      if (
        parseInt(splittedDate[1]) == startingMonth &&
        parseInt(splittedDate[2]) >= startingDay
      ) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
      if (
        parseInt(splittedDate[1]) == endingMonth &&
        parseInt(splittedDate[2]) <= endingDay
      ) {
        filtered.push({
          name: element.name,
          img: element.img,
          start: element.starting_date,
          end: element.ending_date,
          location: element.poi.address,
        })
      }
    }
    return res.json(filtered)
  })

  app.get('/event/random/:number', async (req, res) => {
    /*const sequelize = new Sequelize(url, opts)*/
    const number = req.params.number
    const result = await models.Event.findAll({
      order: [[Sequelize.fn('RANDOM')]],
      limit: number,
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        description: element.description,
      })
    }
    return res.json(filtered)
  })

  app.get('/event/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.Event.findOne({
      where: { name: name },
      include: [{ model: models.Poi }],
    })
    let splittedStartingDate = result.starting_date.split('-')
    let splittedEndingDate = result.ending_date.split('-')
    let monthStartingString = monthFromIntToString(parseInt(splittedStartingDate[1]))
    let monthEndingString = monthFromIntToString(parseInt(splittedEndingDate[1])) 

    const filtered = {
      name: result.name,
      img: result.img,
      description: result.description,
      startingDay: splittedStartingDate[2],
      startingMonth: monthStartingString,
      startingYear: splittedStartingDate[0],
      endingDay: splittedEndingDate[2], 
      endingMonth: monthEndingString,
      endingYear: splittedEndingDate[0],
      ticket_price: result.ticket_price,
      poiName: result.poi.name
    }
    return res.json(filtered)
  })

  app.get('/event/prev/:name', async (req, res) => {
    const { name } = req.params
    const old = await models.Event.findOne({
      where: { name },
    })
    const next_id = old.id - 1
    let result = await models.Event.findOne({
      where: { id: next_id },
    })
    if (result == null) {
      result = await models.Event.findOne({
        where: { id: 1 },
      })
    }
    return res.json(result)
  })

  app.get('/event/next/:name', async (req, res) => {
    const { name } = req.params
    const old = await models.Event.findOne({
      where: { name },
    })
    const next_id = old.id + 1
    let result = await models.Event.findOne({
      where: { id: next_id },
    })
    if (result == null) {
      result = await models.Event.findOne({
        where: { id: 1 },
      })
    }
    return res.json(result)
  })

  app.get('/event/list/years', async (req, res) => {
    const result = await models.Event.findAll({})
    let splittedDate = []
    const years = []
    for (const element of result) {
      splittedDate = element.starting_date.split('-')
      if (!years.map((x) => x.year).includes(splittedDate[0])) {
        years.push({ year: splittedDate[0], img: element.img, events: 1 })
      } else {
        let i = 0
        for (const obj of years) {
          if (obj.year == splittedDate[0]) {
            years[i].events += 1
          } else {
            i++
          }
        }
      }
    }
    return res.json(years.sort((a, b) => b.year - a.year))
  })

  app.get('/event/year/:year', async (req, res) => {
    const { year } = req.params
    const { Op } = require('sequelize')
    const starting = year + '-1-1'
    const ending = parseInt(year) + 1 + '-12-31'
    const result = await models.Event.findAll({
      where: {
        starting_date: {
          [Op.and]: [{ [Op.gte]: starting }, { [Op.lte]: ending }],
        },
      },
      include: [{ model: models.Poi }],
    })
    return res.json(result)
  })
  /** Events APIs -------------------------------------------*/

  /** POI APIs -------------------------------------------*/
  app.get('/poi/next/:name', async (req, res) => {
    const { name } = req.params
    const old = await models.Poi.findOne({
      where: { name },
    })
    const next_id = old.id + 1
    let result = await models.Poi.findOne({
      where: { id: next_id },
    })
    if (result == null) {
      result = await models.Poi.findOne({
        where: { id: 1 },
      })
    }
    return res.json(result)
  })

  app.get('/poi/prev/:name', async (req, res) => {
    const { name } = req.params
    const old = await models.Poi.findOne({
      where: { name },
    })
    const next_id = old.id - 1
    let result = await models.Poi.findOne({
      where: { id: next_id },
    })
    if (result == null) {
      result = await models.Poi.findOne({
        where: { id: 1 },
      })
    }
    return res.json(result)
  })

  app.get('/poi/list', async (req, res) => {
    const result = await models.Poi.findAll({
      // needed for eager fetching
      include: [{ model: models.Poi_img }],
    })
    return res.json(result)
  })

  app.get('/poi/:name', async (req, res) => {
    const { name } = req.params
    const result = await models.Poi.findOne({
      where: { name },
      include: [{ model: models.Poi_img }, { model: models.Event }],
    })
    return res.json(result)
  })

  app.get('/poi/related_itineraries/:name', async (req, res) => {
    const { name } = req.params
    const result = await models.Poi.findOne({
      where: { name },
      // joining through bridge table
      include: [{ model: models.itinerary }],
    })
    return res.json(result)
  })
  /** POI APIs -------------------------------------------*/

  /** ServiceTypes APIs -------------------------------------------*/
  app.get('/service_type/list', async (req, res) => {
    const result = await models.ServiceType.findAll({})
    return res.json(result)
  })

  app.get('/service_type/:name', async (req, res) => {
    const { name } = req.params
    const selectedServiceType = await models.ServiceType.findOne({
      where: { type: name },
    })
    const id = selectedServiceType.id
    console.log('id: ' + id)
    const result = await models.service.findAll({
      where: { serviceTypeId: id },
    })
    return res.json(result)
  })

  /** ServiceTypes APIs -------------------------------------------*/

  app.get('/page-info/:topic', (req, res) => {
    const { topic } = req.params
    const result = pageContentObject[topic]
    return res.json(result)
  })

  /*


  app.get('/cats/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Cat.findOne({
      where: { id },
      include: [{ model: models.Location }],
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the cats in our actual database
   app.get('/cats', async (req, res) => {
    const result = await models.Cat.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        breed: element.breed,
        id: element.id,
      })
    }
    return res.json(filtered)
  })
  

  // HTTP POST api, that will push (and therefore create) a new element in
  // our actual database
  app.post('/cats', async (req, res) => {
    const { body } = req
    await models.Cat.create(body)
    return res.sendStatus(200)
  })
  */
}

function monthFromIntToString(param) {
  let startingMonth = ''
  switch (param) {
    case 1:
      startingMonth = 'Jan'
      break;
    case 2:
      startingMonth = 'Feb'
      break;
    case 3:
      startingMonth = 'Mar'
      break;
    case 4:
      startingMonth = 'Apr' 
      break;
    case 5:
      startingMonth = 'May'
      break;
    case 6:
      startingMonth = 'Jun'
      break;
    case 7:
      startingMonth = 'Jul'
      break;
    case 8:
      startingMonth = 'Aug'
      break;
    case 9:
      startingMonth = 'Sept'
      break;
    case 10:
      startingMonth = 'Oct'
      break;
    case 11:
      startingMonth = 'Nov'
      break;
    case 12:
      startingMonth = 'Dec'
      break;
  }
  return startingMonth
}

runMainApi()
export default app