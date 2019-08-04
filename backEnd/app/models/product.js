const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    createdAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Product', productSchema);