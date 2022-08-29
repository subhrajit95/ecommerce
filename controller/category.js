const { Categories } = require('../models')

async function createCategory(req, res){
    const data = req.body;

    const name = data.name;
    const description = data.description;

    try{
        const result = await Categories.create({name, description})
        console.log('result', result);
        res.send({msg : 'Category has been created'})
    }catch(err){
        console.log('err in categories', err)
        res.status(500).send({msg : 'Internal server error'})
    }
}

async function getAllCategory(req, res){
	try{
		const result = await Categories.findAll()
		res.send(result)
	}catch(err){
		console.log('err in getting categories', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function getCategoryOnId(req,res){
	const categoryId = req.params.id;

	try{
		const result = await Categories.findOne({
			where : {
				id : categoryId
			}
		})

		res.send(result)
	}catch(err){
		console.log('err in getting categories based on ID', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}


module.exports = {
    createCategory,
    getAllCategory,
    getCategoryOnId
}