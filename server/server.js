const express = require('express')
const cors = require('cors');

const app = express()
const port = 5000
app.use(cors({
    origin: 'http://localhost:3001'
}));

app.get('/', (req, res) => {
  res.send({res:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})