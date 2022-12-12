const model = require("../models/index")
const author = model.author

exports.create = async (req, res)=>{
    let data = {
        name : req.body.name,
        email: req.body.email
    }

    await author.create(data)
        .then(result =>{
            res.json({
                statuscode: 200,
                data: result
            })
        })
        .catch(error =>{
            res.json({
                message : error.message
            })
        })
}
exports.findAll = async (req, res) =>{
    await author.findAll()
    .then(result => {
            res.json({
                author : result
            })
        })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

exports.findByid= async (req, res) =>{
    await author.findOne({where :{id: req.params.id}})
    .then(result => {
            res.json({
                author : result
            })
        })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

exports.update = async (req,res) =>{
    let param =  {
        id : req.params.id
    }
    let data ={
        name : req.body.name,
        email: req.body.email
    }

    await author.update(data, {where: param})
    .then(result =>{
            res.json({
                statuscode: 200,
                message : "succesfully update"
            })
        })
    .catch(error =>{
        res.json({
             message : error.message
        })
    })
}

exports.deleteAuthors = async (req,res) =>{
     let param = {
        id : req.params.id
    }
    author.destroy({where: param})
        .then(result => {
            res.json({           
                statuscode: 200,
                message:"data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
    })
}