const express = require('express')
const router = express.Router()

const controller = require('../controllers/products')
const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware)

router.get('/:id', controller.getProduct)

router.get('/', controller.getProduct)

router.post('/', controller.saveProduct)

router.put('/:id', controller.updateProduct)

router.delete('/:id', controller.deleteProduct)



module.exports =  router