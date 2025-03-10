const { makeExecutableSchema } = require('@graphql-tools/schema');
const { userType } = require('./typeDefs/userType');
const { messageType } = require('./typeDefs/messageType');
const { userResolver } = require('./resolvers/userResolver');
const { messageResolver } = require('./resolvers/messageResolver');

export const schema = makeExecutableSchema({
    typeDefs: [userType, messageType],
    resolvers: [userResolver, messageResolver],
});
