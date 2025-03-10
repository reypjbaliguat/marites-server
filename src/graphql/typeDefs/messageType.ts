const messageType = `
    type Message {
        id: ID!
        content: String!
        sender: User!
        createdAt: String!
    }

    type Subscription {
        messageSent: Message
    }
`;

module.exports = {
    messageType,
};
