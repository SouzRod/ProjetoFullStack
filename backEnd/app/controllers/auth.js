const service = require('../services/auth')

const authentication = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await service.authentication(email, password)

        res.send({ result })
    } catch (err) {
        res.status(error.status).send({ error: error.message })
    }
}

module.exports = { authentication }