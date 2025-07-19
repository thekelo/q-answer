const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('newAnswer', (data) => {
    io.emit('answerAdded', data);
  });
});

httpServer.listen(PORT);
