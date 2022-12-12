const model = require("../models/index")
const book = model.book

exports.create = async (req, res)=>{
    let data = {
        isbn : req.body.isbn,
        title: req.body.title,
        realese : req.body.realese,
        author_id : req.body.author_id
    }

    await book.create(data)
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
    await book.findAll()
    .then(result => {
            res.json({
                book : result
            })
        })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

exports.findByid= async (req, res) =>{
    await book.findOne({where :{id: req.params.id}})
    .then(result => {
            res.json({
                book : result
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
        isbn : req.body.isbn,
        title: req.body.title,
        realese : req.body.realese,
        author_id : req.body.author_id
    }

    await book.update(data, {where: param})
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

exports.deletebooks = async (req,res) =>{
     let param = {
        id : req.params.id
    }
    book.destroy({where: param})
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