const mongoose = require("mongoose");

const FoodItemsSchemaStructure = new mongoose.Schema({

    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Menu"
    },
    foodName: {
        type: String,
        required: true,
    },
    foodDiscription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},{timestamps:true})

module.exports = mongoose.model('Food', FoodItemsSchemaStructure)