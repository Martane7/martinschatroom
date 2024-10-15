
const socket = io();

// Display incoming messages
socket.on('chat message', (msg) => {
    const chatbox = document.getElementById('chatbox');
    const newMessage = document.createElement('p');
    newMessage.textContent = msg;
    chatbox.appendChild(newMessage);
});

// Send message to server
function sendMessage() {
    const message = document.getElementById('message').value;
    socket.emit('chat message', message);
    document.getElementById('message').value = '';
}
