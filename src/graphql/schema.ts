const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = {
    schema,
};
