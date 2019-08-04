const service = require('../services/users')

const getUser = async (req, res) => {
    try {
        let result
        if (req.params.id) {
            const id = req.params.id
            result = await service.getUser(id)
            if (result.error) {
                const { status, message } = result.error
                res.status(status).send({ error: message })
            }
        } else {
            result = await service.getUser()
        }

        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}


const saveUser = async (req, res) => {
    try {
        const user = req.body

        const result = await service.saveUser(user)
        if (result.error) {
            const { status, message } = result.error
            res.status(status).send({ error: message})
        }
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = req.body

        const result = await service.updateUser(user)

        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}

const deleteUser = async (req, res) => {
    try {
        req.params.id
        const result = await service.deleteUser(id)

        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({ error })
    }
}

module.exports = { 
    getUser,
    saveUser,
    updateUser,
    deleteUser
}