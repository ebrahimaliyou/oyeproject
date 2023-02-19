const socket = io();

socket.on('connect', () => {
  console.log(`Connected with ID ${socket.id}`);
});

socket.on('message', (data) => {
  console.log(`Received message: ${data}`);
});

socket.on('userLeft', () => {
  console.log(`A user has left the room`);
});

// Send a message
socket.emit('message', 'Hello, world!');
