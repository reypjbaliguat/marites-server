const { messageResolvers } = require('./messageResolvers');
const { userResolvers } = require('./userResolvers');
const { mergeResolvers } = require('@graphql-tools/merge');

const combineResolvers = () => {
    const resolvers = [
        messageResolvers, // Pass `io` to messageResolvers
        userResolvers, // Pass `io` to other resolvers if needed
    ];
    return mergeResolvers(resolvers);
};

module.exports = combineResolvers;
