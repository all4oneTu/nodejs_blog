const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')

//express
const app = express()
const port = 3000

//route
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

//morgan
// app.use(morgan('combined'))

//handlebar
app.engine('handlebars', handlebars())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resource/views'))

//middleware
// app.use(express.urlencoded(
//   { extended: true }
// ))
// app.use(express.json)
//main code


route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})