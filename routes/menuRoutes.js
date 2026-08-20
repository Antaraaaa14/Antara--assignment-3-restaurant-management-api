const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu
} = require("../controllers/menuController");

router.get(
  "/restaurants/:id/menu",
  getMenu
);

router.post(
  "/restaurants/:id/menu",
  auth,
  addMenu
);

router.put(
  "/menu/:id",
  auth,
  updateMenu
);

router.delete(
  "/menu/:id",
  auth,
  deleteMenu
);

module.exports = router;