const userType = `
    type User {
        id: ID!
        email: String!
        role: String!
        token: String
        otpCode: String
        otpExpires: String
        isVerified: Boolean!
        lastOtpRequest: String
        createdAt: String!
        updatedAt: String!
    }
    type Query {
        _dummy: String
    }
    type Mutation {
        signUp(email: String!, password: String!): String
        login(email: String!, password: String!): User!
        googleLogin(token: String!): User!
        verifyOTP(email: String!, otpCode: String!): User
        resendOTP(email: String!): String
    }
`;

module.exports = {
    userType,
};
