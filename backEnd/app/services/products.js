const Product = require('../models/product')

const getProduct = async (id = null) => {

    if (id) {
        return await Product.findById(id)
            .exec()
            .then(result => {
                if (result) {
                    return result
                } else {
                    return { status: 404, message: error }
                }
            })
            .catch(err => err)
    }
    return await Product.find()
        .exec()
        .then(result => result)
        .catch(err => err)
}


const saveProduct = async (obj) => {

    const product = new Product({
        name: obj.name,
        description: obj.description
    })

    return await product.save()
        .then(result => result)
        .catch(err => err)
}

const updateProduct = async (obj) => {
    return await Product.update({ _id: obj.id }, { $set: obj })
        .exec()
        .then(result => result)
        .catch(err => err)
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id)
        .exec()
        .then(result => result)
        .catch(err => err)
}

module.exports = {
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}