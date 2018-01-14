const {
  History,
  Song,
  User
} = require('../models')
const _ = require('lodash')

module.exports = {
  // ### INDEX ###
    async index (req, res) {
        try {
          const {userId} = req.query
          const histories = await History.findAll({
            where: {
              UserId: userId
            },
            include: [{
              model: Song
            }
            ]
          })  // the below is not "needed" but makes the returned data prettier and inmplements the bookmarkId for the Song
            .map(history => history.toJSON())
            .map(history => _.extend(
              {},
              history.Song,
              history
            ))
          res.send(_.uniqBy(histories, history => history.SongId))  // sloppy fix, should hàve been done in post instead?
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to fetch the histories'
          })
        }
    },
    // ### POST ###
    async post (req, res) {
      try {
        const {songId, userId} = req.body
        const newHistory = await History.create({
          SongId: songId,
          UserId: userId
        })
        res.send(newHistory)
      } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to create the history object'
        })
      }
  }
}
