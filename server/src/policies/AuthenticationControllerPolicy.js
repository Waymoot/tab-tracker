const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email:Joi.string().email(),
            password: ''
        }


        next()
    }
}