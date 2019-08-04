const service = require('../services/products')

const getProduct = async (req, res) => {
    try {
        let result
        if (req.params.id) {
            const id = req.params.id
            result = await service.getProduct(id)
        } else {
            result = await service.getProduct()
        }

        res.send(result)
    } catch (err) {
        res.status(500)
        res.send({ error: product.error })
    }
}


const saveProduct = async (req, res) => {
    try {
        const product = req.body

        const result = await service.saveProduct(product)

        res.send(result)
    } catch (err) {
        res.status(500)
        res.send({ error: product.error })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = req.body

        const result = await service.updateProduct(product)

        res.send(result)
    } catch (err) {
        res.status(500)
        res.send({ error: product.error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        req.params.id
        const result = await service.deleteProduct(id)

        res.send(result)
    } catch (err) {
        res.status(500)
        res.send({ error: product.error })
    }
}

module.exports = { 
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}