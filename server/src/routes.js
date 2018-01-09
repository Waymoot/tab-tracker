const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,    // the policy is called as "express middleware" before we call the controller for validation
        AuthenticationController.register),
        
        app.post('/login', 
        AuthenticationController.login),
        
        // SONGS
        app.get('/songs', 
        SongsController.index),
        app.post('/songs', 
        SongsController.post)
}
