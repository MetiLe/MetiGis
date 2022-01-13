const mongoose = require ('mongoose');


const FavouriteSchema =mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
    },
    placeId:{
        type:mongoose.Schema.Types.ObjectId, 
        ref: "Places"

    },
    favourite:{
        type:Boolean,
        required: true
    }
});


module.exports = mongoose.model("Favourite",  FavouriteSchema);