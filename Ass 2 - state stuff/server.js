//Ruan le Roux u23782219
const express = require('express');
const path = require('path');
// const http = require('http').createServer(app);
const http = require('http');
// const io = require('socket.io')(http);
const socketIo = require('socket.io');
const Poll = require('./poll');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.sendFile(__dirname, '/index.html');
});

app.get('/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    // res.sendFile(__dirname, '/index.js');
    res.sendFile(path.join(__dirname, 'index.js'));
});

const poll = new Poll([
    {name: 'pebble', votes: 0},
    {name: 'sunshine', votes: 0},
    {name: 'miso', votes: 0},
    {name: 'panko', votes: 0},
    {name: 'snowball', votes: 0}
]);

io.on('connection', (socket) => {
    console.log(`A user connected with ID: ${socket.id}`);

    socket.emit('updateVotes', poll.getVotes());

    socket.on('vote', (cat) => {
        poll.vote(cat);
        const votes = poll.getVotes();

        io.emit('updateVotes', votes);

        io.emit('liveFeed', `User with ID ${socket.id} voted for ${cat}`);
    });

    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});


// app.listen(PORT, () => {
//     console.log(', Listening on http://localhost:3000');
// });

// io.on('connection', (socket) => {
//     console.log('A user connected with ID: ', socket.id);

//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });
// });

// http.listen(PORT, () => {
//     console.log(', Listening on http://localhost:3000');
// });

