const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8000;

app.use('/assets', express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
    console.log('Running server on localhost:' + port);
});