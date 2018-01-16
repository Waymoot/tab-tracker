const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const IsAuthenticated = require('./policies/isAuthenticated')

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
        IsAuthenticated,
        BookmarksController.index)

        app.post('/bookmarks', 
        IsAuthenticated,
        BookmarksController.post)

        app.delete('/bookmarks/:bookmarkId', 
        IsAuthenticated,
        BookmarksController.delete)

        app.get('/histories', 
        HistoriesController.index)

        app.post('/histories', 
        HistoriesController.post)
}
