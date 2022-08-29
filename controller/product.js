const { Products }  = require('../models')

async function createProduct(req,res){
    const productData = req.body;

    if(!(productData.name && productData.cost && productData.quantity)){
        res.status(400).send({msg : 'Name, cost and quantity is missing'})
    }

    try{
        const name = productData.name;
        const description = productData.description;
        const cost = productData.cost;
        const quantity = productData.quantity;
        const CategoryId = productData.CategoryId;

        const result = await Products.create({name, description, cost, quantity, CategoryId});
        res.send({msg : 'Product got created', result})
    }catch(err){
        res.status(500).send({msg: 'Internal server error',err})
    }
}

async function getAllProducts(req, res){
    try{
        const result = await Products.findAll();
        res.send(result)
    }catch(err){
        res.status(500).send({msg: 'Internal server error',err})
    }
}

async function getProductOnId(req, res){
    const productId = req.params.id;


    try{
        const result = await Products.findOne({
            where : {
                id: productId
            }
        });
        res.send(result)
    }catch(err){
        res.status(500).send({msg: 'Internal server error',err})
    }
}

async function filterBasedProduct(req,res,){
	const CategoryId = req.query.CategoryId;
	const name = req.query.name;
	const minCost = req.query.minCost;
	const maxCost = req.query.maxCost;

    if(CategoryId){
        const result = await Products.findAll({
                where: {
                    CategoryId : CategoryId
                }
            })
        res.send(result);
        }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductOnId,
    filterBasedProduct
}