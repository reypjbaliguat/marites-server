const { messageService } = require('../../services/messageService');

const messageResolvers = (io) => {
    const service = messageService(io);
    return {
        Query: {
            messages: () => service.messages,
        },
        Mutation: {
            sendMessage: service.sendMessage,
        },
    };
};

module.exports = {
    messageResolvers,
};
