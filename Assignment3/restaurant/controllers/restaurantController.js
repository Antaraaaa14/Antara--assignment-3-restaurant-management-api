const Restaurant = require("../models/Restaurant");

// Get All Restaurants
const getRestaurants = async (req, res) => {
  try {

    const restaurants =
      await Restaurant.find();

    res.json(restaurants);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Add Restaurant
const addRestaurant = async (req, res) => {
  try {

    const restaurant =
      await Restaurant.create(req.body);

    res.status(201).json(restaurant);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Get Restaurant By ID
const getRestaurantById = async (req, res) => {
  try {

    const restaurant =
      await Restaurant.findById(req.params.id);

    res.json(restaurant);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Update Restaurant
const updateRestaurant = async (req, res) => {
  try {

    const restaurant =
      await Restaurant.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(restaurant);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Delete Restaurant
const deleteRestaurant = async (req, res) => {
  try {

    await Restaurant.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Restaurant Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Top 5 Restaurants
const topRestaurants = async (req, res) => {
  try {

    const restaurants =
      await Restaurant.find()
      .sort({ rating: -1 })
      .limit(5);

    res.json(restaurants);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getRestaurants,
  addRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  topRestaurants
};