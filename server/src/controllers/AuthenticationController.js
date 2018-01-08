const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch(err){
            res.status(400).send({
                error:'This email account is already in use.'
            })
            // email already exist?
        }
    },
    async login (req, res) {
        try {
            // get the submitted info fom req.body and see if we can find one user that has that email address
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            // if we do not have a user, send a 403 telling the user what failed (dont say the user wasn't found as that could be used to fish for registerd users)
            if (!user) {
                return res.send(403).send({
                    error:'The login information was incorrect'
                })
            }
            // user is found, check the password
            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.send(403).send({
                    error:'The login information was incorrect'
                })
            }
            // if you are here, the user was found and the password was correct, so send back the data as confirmation
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch(err){
            res.status(500).send({
                error:'An error has occured trying to log in.'
            })
        }
    }

}
