const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization
    if(!authHeader) {
        res.status(401).send({ error: 'No token provided'})
    }

    const parts = authHeader.split(' ')
    if( parts.length != 2){
        res.status(401).send({ error: 'Token Error'})
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)){
        res.status(401).send({ error: 'malformatted Token'})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Invalid Token'})

        req.userId = decoded.id
        return next()
    })
}