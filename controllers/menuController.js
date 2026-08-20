const Menu = require("../models/Menu");

const getMenu = async (req, res) => {
  try {

    const menu = await Menu.find({
      restaurantId: req.params.id
    });

    res.json(menu);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const addMenu = async (req, res) => {
  try {

    const menu = await Menu.create({
      restaurantId: req.params.id,
      ...req.body
    });

    res.status(201).json(menu);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateMenu = async (req, res) => {
  try {

    const menu =
      await Menu.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(menu);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteMenu = async (req, res) => {
  try {

    await Menu.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Menu Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu
};