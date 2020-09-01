const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('helloooo')
})

app.get('/database/:search', (req, res) => {
  res.send('Database connected')
  // const search = req.params.search
})

app.listen(port, () => {
  console.log(`FWLR app listening at http://localhost:${port}`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('docs'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'docs', 'index.html'))
  })
}

//
// const MongoClient = require('mongodb').MongoClient
// const uri = 'mongodb+srv://fwlrGrandPrix:vtYefRZKiHI19kBJ@cluster0.1ok79.mongodb.net/fwlrgrandprix?retryWrites=true&w=majority'
// const client = new MongoClient(uri, { useNewUrlParser: true })
// client.connect(err => {
//   const collection = client.db('test').collection('devices')
//   console.log('hi')
//   client.close()
//   if (err) {
//     console.error(err)
//   }
// })

// try {
//   await client.connect()
//   console.log('Connected correctly to server')
//   const database = client.db('cluster0')
//   const myCollection = database.collection('fwlrGrandPrix')
//   const secretAnswer = await myCollection.findOne({ name: userInput }, { _id: 0 })
//   return secretAnswer[userInput]
// } catch (err) {
//   console.error(err.stack)
// } finally {
//   await client.close()
// }
