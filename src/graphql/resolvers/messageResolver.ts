const messageResolver = {
    Subscription: {
        messageSent: {
            subscribe: (_, __, { pubsub }) =>
                pubsub.asyncIterator('MESSAGE_SENT'),
        },
    },
};

module.exports = {
    messageResolver,
};
