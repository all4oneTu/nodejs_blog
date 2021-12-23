const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')

//express
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
//morgan
app.use(morgan('combined'))

//handlebar
app.engine('handlebars', handlebars())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resource/views'))

//main code
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})