const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
  } = require('../src/models')
const Promise = require('bluebird')

const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmark.json')
const histories = require('./histories.json')

sequelize.sync({force: true})    // use ({force: true}) and save to reset all data in db
    .then(async function () {
      // create users
      await Promise.all(
        users.map(user => {
          User.create(user)
        })
      )
      // create songs
      await Promise.all(
        songs.map(song => {
          Song.create(song)
        })
      )
      // create bookmarks (need to be before users and songs)
      await Promise.all(
        bookmarks.map(bookmark => {
          Bookmark.create(bookmark)
        })
      )
      // create histories for user 1
      await Promise.all(
        histories.map(history => {
          History.create(history)
        })
      )
    })
