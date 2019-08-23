const service = require('../services/auth')

const authentication = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await service.authentication(email, password)

        if(result.status) {
            res.status(result.status).send(result.message)
            return false
        }   

        res.send({ result })
    } catch (error) {
        res.status(error.status).send({ error: error.message })
    }
}

module.exports = { authentication }