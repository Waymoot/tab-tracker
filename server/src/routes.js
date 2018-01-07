const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,    // the policy is called as "express middleware" before we call the controller for validation
        AuthenticationController.register)
}
