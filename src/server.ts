const { createYoga } = require('graphql-yoga');
const { schema } = require('./graphql/schema');
const { context } = require('./context');

export const yoga = createYoga({
    schema,
    context,
});
