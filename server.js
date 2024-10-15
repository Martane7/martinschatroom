// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('A user connected.');

    // Listen for chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);  // Broadcast message to all users
    });

    // User disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
