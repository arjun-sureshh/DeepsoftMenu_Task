const mongoose = require("mongoose");

const MenuSchemaStructure = new mongoose.Schema(
  {
    menuname: {
      type: String,
      required: true,
      unique: true, 
      trim: true
    },
    menudiscription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", MenuSchemaStructure);