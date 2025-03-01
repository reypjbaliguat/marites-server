const fs = require('fs');
const path = require('path');
const { gql } = require('graphql-tag');

const userTypeDefs = gql(
    fs.readFileSync(path.join(__dirname, './user.graphql'), 'utf-8')
);
const messageTypeDefs = gql(
    fs.readFileSync(path.join(__dirname, './message.graphql'), 'utf-8')
);

const typeDefs = [userTypeDefs, messageTypeDefs];

module.exports = typeDefs;
