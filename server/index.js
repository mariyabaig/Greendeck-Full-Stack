const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
console.log(process.env)
//middleware
app.use(express.json())
app.use(cors())
app.use(cors({
  origin: 'http://localhost:3000'
}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

