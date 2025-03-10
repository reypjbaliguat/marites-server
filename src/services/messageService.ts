const { prisma } = require('../context');

const createMessage = async (senderId, content) => {
    if (!content) throw new Error('Message cannot be empty');
    return await prisma.message.create({
        data: { senderId, content },
    });
};

module.exports = {
    createMessage,
};
