const Menu = require("../models/menuModels");

// Get all menu items
const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu", error });
  }
};

// Create a new menu item
const createMenu = async (req, res) => {
  const { menuname, menudiscription } = req.body;

  if (!menuname || !menudiscription) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    // Corrected model name from User to Menu
    const existingMenu = await Menu.findOne({ menuname });

    if (existingMenu) {
      return res.status(400).json({ message: "Menu already exists" });
    }

    const newMenu = new Menu({ menuname, menudiscription });
    await newMenu.save();

    res.status(201).json({ message: "Menu created successfully", menu: newMenu });
  } catch (error) {
    res.status(500).json({ message: "Error creating menu", error: error.message });
  }
};

module.exports = {
  getAllMenu,
  createMenu,
};