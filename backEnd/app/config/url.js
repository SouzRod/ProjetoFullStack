const product = require('../routes/products')
const user = require('../routes/users')
const auth = require('../routes/auth')


const addURLs = (app) => {
    app.use('/product', product)
    app.use('/user', user)
    app.use('/auth', auth)
}

module.exports = {
    addURLs
}