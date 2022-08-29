const express = require('express')
const {createCategory, getAllCategory, getCategoryOnId} = require('../controller/category')


const { checkNameForCategory } = require("../middleware")

const routes = express.Router()

routes.post('/ecomm/api/v1/categories',[checkNameForCategory],createCategory)

routes.get('/ecomm/api/v1/categories',getAllCategory)

routes.get('/ecomm/api/v1/categories/:id',getCategoryOnId)

module.exports = {categoryRoutes : routes}