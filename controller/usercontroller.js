
var user = require('../model/user')

exports.index = async (req,res) => {
    var data = await user.create(req.body)
    res.status(200).json({
        status : "Success",
        data
    })
}

exports.get_data = async (req,res) => {
    var data = await user.find()
    res.status(200).json({
        status : "Success",
        data
    })
}

exports.get_update_data = async (req,res) => {
    var id = req.params.id;
    var data = await user.findById(id)
    res.status(200).json({
        status : "Success",
        data
    })
}

exports.update_data = async (req,res) => {
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status : "Update Success"
    })
}

exports.delete_data = async (req,res) => {
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id,)
    res.status(200).json({
        status : "Delete Success",
    })
}

exports.column_wise = async (req,res) => {
    var data = await user.find({"email" : req.body.email})
    res.status(200).json({
        status : "Success",
        data
    })
}