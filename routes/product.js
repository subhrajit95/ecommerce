const express = require('express')
const {createProduct, getAllProducts, getProductOnId, filterBasedProduct} = require('../controller/product')

const { validateProductData } = require('../middleware')

const routes = express.Router()

routes.post('/ecomm/api/v1/products',[validateProductData], createProduct)

routes.get('/ecomm/api/v1/products', getAllProducts)
routes.get('/ecomm/api/v1/products/filter', filterBasedProduct)


routes.get('/ecomm/api/v1/products/:id', getProductOnId)

module.exports = {productRoutes: routes}
