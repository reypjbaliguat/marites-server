const { PrismaClient } = require('@prisma/client');
const { PubSub } = require('graphql-subscriptions');
const jwt = require('jsonwebtoken');

export const prisma = new PrismaClient();
export const pubsub = new PubSub();

export const context = ({ req }) => {
    const token = req.headers.authorization || '';
    try {
        const user = jwt.verify(token, 'JWT_SECRET');
        return { prisma, pubsub, user };
    } catch (error) {
        return { prisma, pubsub };
    }
};

// TO BE UPDATED
