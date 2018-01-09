const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false})    // use ({force: true}) and save to reset all data in db
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
