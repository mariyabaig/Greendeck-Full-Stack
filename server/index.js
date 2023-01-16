const connectToMongo = require("./db")
const express = require('express')



const app = express()
const port = 5000
//middleware
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000/'
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

