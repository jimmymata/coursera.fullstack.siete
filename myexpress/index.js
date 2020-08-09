// var declaration
data = [
  {
    nombre: 'Producto A',
    estado: 'Disponible',
    cantidad: 100
  },
  {
    nombre: 'Producto B',
    estado: 'Disponible',
    cantidad: 150
  },
  {
    nombre: 'Producto C',
    estado: 'Disponible',
    cantidad: 200
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

