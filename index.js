let express = require('express');
let { createServer } = require('http');
const app = express()
let server = createServer(app)

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

server.listen(9001, () => {
  console.log('listen: 9001')
})