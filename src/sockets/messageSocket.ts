const { createMessage } = require('../services/messageService');
const { pubsub } = require('../context');

export const handleSocketConnection = (socket, io) => {
    socket.on('send_message', async ({ data: { senderId, content } }) => {
        try {
            const message = await createMessage(senderId, content);
            io.emit('receive_message', message);
            pubsub.publish('MESSAGE_SENT', { messageSent: message });
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
                socket.emit('error', { message: err.message });
            }
        }
    });
};
