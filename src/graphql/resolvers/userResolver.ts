const { userService } = require('../../services/userService');

const userResolver = {
    Query: {
        _dummy: String,
    },
    Mutation: {
        signUp: userService.signUp,
        login: userService.login,
        googleLogin: userService.googleLogin,
        resendOTP: userService.resendOTP,
        verifyOTP: userService.verifyOTP,
    },
};

module.exports = {
    userResolver,
};
