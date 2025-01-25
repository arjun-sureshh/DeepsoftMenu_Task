const Food = require("../models/foodModels");


const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu", error });
  }
};


const createfood = async (req, res) => {
  const { menuId,foodName, foodDiscription,price } = req.body;
 console.log(req.body);

  if (!menuId || !foodName || !foodDiscription || !price) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    
    const existingFood = await Food.findOne({ foodName });

    if (existingFood) {
      return res.status(400).json({ message: "Food already exists" });
    }

    const newFood = new Food({ menuId,foodName, foodDiscription,price });
    await newFood.save();

    res.status(201).json({ message: "Food Items created successfully", menu: newFood });
  } catch (error) {
    res.status(500).json({ message: "Error creating food", error: error.message });
  }
};

module.exports = {
  getAllFood,
  createfood,
};