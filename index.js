const {serverPort} = require('./config/server.config')
const express = require('express')
const { Categories, sequelize, Products, Role } = require('./models')
const {categoryRoutes, productRoutes, authRoutes} = require('./routes')

const app = express()

//const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)

app.listen(serverPort, async()=> {
	console.log('server is running on this port', serverPort)
	await init()

})

async function init(){
	try{
		await sequelize.sync({force: true})

		const defaultCategories = [
		{
			name : 'Beauty',
			description : 'All beauty products'
		},
		{
			name: 'Fragerance',
			description : 'All fragerance products'
		},
		{
			name: 'Clothes',
			description : 'About types clothes'
		}
		]	

		const defaultProducts = [
		{
			"description" : "Very very best quality",
			"name" : "MakeUP Kit",
			"cost" : 820,
			"quantity" : 24,
			"CategoryId": 1
		},
		{
			"description" : "Best fragerance",
			"name" : "Fogg",
			"cost" : 1220,
			"quantity" : 20,
			"CategoryId": 2
		},
		{
			"description" : "Very best for summer holidays",
			"name" : "Clothes",
			"cost" : 1220,
			"quantity" : 201,
			"CategoryId": 3
		}
		]

		const defaultRoles = [
		{
			name : 'User'
		},
		{
			name: 'Admin'
		}
		]

		await Categories.bulkCreate(defaultCategories)
		await Products.bulkCreate(defaultProducts)
		await Role.bulkCreate(defaultRoles)
	}
	catch(err){
		console.log(err)
	}
}
