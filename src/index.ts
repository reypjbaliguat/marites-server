import { GraphQLError } from 'graphql';

const { createYoga } = require('graphql-yoga');
const { createServer } = require('http');
const { context } = require('./graphql/context');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
    schema,
    context,
    maskedErrors: false, // Ensure error details are not masked
    formatError: (err: GraphQLError) => {
        // Custom error formatting
        return {
            message: err.message || 'An unexpected error occurred',
            locations: err.locations,
            path: err.path,
        };
    },
});

const server = createServer(yoga);

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
