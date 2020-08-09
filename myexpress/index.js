// var declaration
data = [
  {
    name: 'Producto A',
    qty: 100,
    available: 'Si'
  },
  {
    name: 'Producto B',
    qty: 150,
    available: 'Si'
  },
  {
    name: 'Producto C',
    qty: 200,
    available: 'Si'
  }
]

// const declaration
const cors    = require('cors')
const express = require('express')
const port    = 3000

// app declaration
const app = express()

app.use(cors())
app.use(express.json())

// start app
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`)
})

// home page
app.get('/', (req, res) => {
  res.send('Express server running !!!')
})

// show saved data
app.get('/getdata', (req, res) => {
  res.json(data)
})

// add new data
app.get('/postdata', (req, res) => {
  data.push(req.data)
  res.json(data)
})

