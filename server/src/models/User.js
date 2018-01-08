const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))   // will wrap all promise like function into

function hashPassword (user, options) {
    const SALT_FACTOR = 8   // used by bcrypt

    if (!user.changed('password')) {     // check if the password has even changed
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        },{ // added so we can hash the password before it is stored in the db
            hooks: {
                // ### remove these two hooks or it will never work (at the moment) ###
                // beforeCreate: hashPassword,
                // beforeUpdate: hashPassword,
                beforeSave: hashPassword
            }
        })
        // Here we compare the password the user sends in to this function to the stored (hashed) password in the User model
        User.prototype.comparePassword = function (password) {
            return bcrypt.compareAsync(password, this.password) // I still don't understand how bluebird added the compareAsync method to bcrypt...
        }

        return User
    }