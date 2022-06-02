const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

// Development
//const database = new Sequelize('postgres://postgres:postgres@localhost:5432/hyp')
const database = new Sequelize('postgres://postgres:admin@localhost:5432/hyp')

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

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
  })
  const Poi_img = database.define('poi_img', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img_path: DataTypes.STRING,
  })
  const service = database.define('service', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    timetable: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
  })
  const itinerary = database.define('itinerary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT,
  })

  //relationship between "poi" and "poi_img"
  Poi_img.belongsTo(Poi)
  Poi.hasMany(Poi_img)

  //relationship between "event" and "poi"
  Event.belongsTo(Poi)
  Poi.hasMany(Event)

  //relationship between "poi" and "itinerary"
  Poi.belongsToMany(itinerary, { through: 'poi_itinerary' })
  itinerary.belongsToMany(Poi, { through: 'poi_itinerary' })

  await database.sync(
    { force: true } /*needed if want to also drop existing tables*/
  )

  return {
    Event,
    Poi,
    Poi_img,
    service,
    itinerary,
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
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
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
  /** Events APIs -------------------------------------------*/
  app.get('/event/list', async (req, res) => {
    const result = await models.Event.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
      })
    }
    return res.json(filtered)
  })

  app.get('/event/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.Event.findOne({
      where: { name: name },
      //include: [{ model: models.Location }],
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

  app.get('/poi/next/:name', async (req, res) => {
    const { name } = req.params
    const old = await models.Poi.findOne({
      where: { name },
    })
    const next_id = old.id + 1
    const result = await models.Poi.findOne({
      where: { id: next_id },
    })
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
      include: [{ model: models.Poi_img }],
    })
    return res.json(result)
  })
  /** POI APIs -------------------------------------------*/

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

runMainApi()

export default app
