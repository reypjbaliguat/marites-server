// In-memory storage for messages
let messages: {
    id: string;
    user: string;
    content: string;
}[] = [];

const messageService = (io) => ({
    messages: () => messages,
    sendMessage: ({ user, content }) => {
        const message = { id: String(messages.length + 1), user, content };
        messages.push(message);
        io.emit('message', message);
        return message;
    },
});

module.exports = {
    messageService,
};
