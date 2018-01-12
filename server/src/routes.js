const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

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
        SongsController.post),

        app.get('/songs/:songId', 
        SongsController.show),

        app.put('/songs/:songId', 
        SongsController.put)

        app.get('/bookmarks', 
        BookmarksController.index)

        app.post('/bookmarks', 
        BookmarksController.post)

        app.delete('/bookmarks/:bookmarkId', 
        BookmarksController.delete)
}
