const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app)
let io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', function (socket) {
    console.log('New user connected');

    socket.on('disconnect', function () {
        console.log('User was disconnected')
    })
});

server.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

// console.log(__dirname + '/../public');
// console.log(publicPath);