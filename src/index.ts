import { GraphQLError } from 'graphql';

const { createYoga } = require('graphql-yoga');
const { createServer } = require('http');
const { context } = require('./graphql/context');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { Server } = require('socket.io');

const typeDefs = require('./graphql/typeDefs');
const { combineResolvers } = require('./graphql/resolvers');

// Create HTTP server
const httpServer = createServer();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: combineResolvers(),
});

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

// Attach Yoga to the HTTP server
httpServer.on('request', yoga);

// Socket.IO setup
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// Pass `io` to the combined resolvers
const resolvers = combineResolvers(io);

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start the server
httpServer.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
});
