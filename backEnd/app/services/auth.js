const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const authentication = async (email, password) => {
    try {
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            return { status: 400, message: 'User not found' }
        }

        if (!await bcrypt.compare(password, user.password)){
            return { status: 400, message: 'Invalid password' }
        }

        user.password = undefined

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        return { user, token }
    } catch (err) {
        return err
    }

}

module.exports = { authentication }