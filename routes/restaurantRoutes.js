const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getRestaurants,
  addRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  topRestaurants
} = require("../controllers/restaurantController");

router.get(
  "/restaurants",
  getRestaurants
);

router.get(
  "/restaurants/top",
  topRestaurants
);

router.get(
  "/restaurants/:id",
  getRestaurantById
);

router.post(
  "/restaurants",
  auth,
  addRestaurant
);

router.put(
  "/restaurants/:id",
  auth,
  updateRestaurant
);

router.delete(
  "/restaurants/:id",
  auth,
  deleteRestaurant
);

module.exports = router;