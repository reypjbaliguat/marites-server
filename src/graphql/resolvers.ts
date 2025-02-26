const { authService } = require('../services/authService');

const resolvers = {
    Query: {
        _dummy: String,
    },
    Mutation: {
        signUp: authService.signUp,
        login: authService.login,
        googleLogin: authService.googleLogin,
        resendOTP: authService.resendOTP,
        verifyOTP: authService.verifyOTP,
    },
};

module.exports = {
    resolvers,
};
