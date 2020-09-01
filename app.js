const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`FWLR app listening at http://localhost:${port}`)
})

app.use(express.static('docs'))
