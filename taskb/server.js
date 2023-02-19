const io = require('socket.io')(server);

const MAX_USERS_PER_ROOM = 2;
let currentRoomNumber = 1;

io.on('connection', (socket) => {
  console.log(`Client connected with ID ${socket.id}`);

  // Join a room
  const roomNumber = Math.ceil(io.sockets.adapter.rooms.size / MAX_USERS_PER_ROOM);
  socket.join(`room-${roomNumber}`);

  // Handle messages
  socket.on('message', (data) => {
    io.to(`room-${roomNumber}`).emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected with ID ${socket.id}`);
    io.to(`room-${roomNumber}`).emit('userLeft');
  });
});
