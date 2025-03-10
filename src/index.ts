const { createServer } = require('http');
const { Server } = require('socket.io');
const { yoga } = require('./server');
const { handleSocketConnection } = require('./sockets/messageSocket');

const httpServer = createServer(yoga);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    handleSocketConnection(socket, io);

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

httpServer.listen(4000, () => {
    console.log('Server is running on port 4000');
});
