const mongoose = require("mongoose");
const Comment = require('../models/FavouriteModel');


module.exports ={
    //GET ALL
    getAll:(req, res)=>{
        Favourite.find().populate("userID")
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "fetched successfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Fetching failed",
                error: err
            })
        })
    },

    //GET BY ID
    getByID: (req, res)=>{
        Favourite.findOne({_id: req.params.favouriteID}).populate("userID")
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "Fetched SUccessfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Fetching failed",
                error: err
            })
        })
    },
    //POST
   
    //DELETE
    
    //UPDATE
    update: (req, res)=>{
        Favourite.findByIdAndUpdate({_id: req.params.favouriteID}, {$set: req.body})
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "Updated SUccessfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Updating failed",
                error: err
            })
        })
    },
};