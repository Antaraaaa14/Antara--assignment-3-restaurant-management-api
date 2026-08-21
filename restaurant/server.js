const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes =
require("./routes/restaurantRoutes");
const menuRoutes =
require("./routes/menuRoutes");
const logger =
require("./middleware/logger");
const app = express();
connectDB();
app.use(express.json());
app.use(logger);
app.use("/", authRoutes);
app.use("/", restaurantRoutes);
app.use("/", menuRoutes);
app.get("/", (req, res) => {
  res.send("Welcome To Restaurant API");
});

app.listen(3000, () => {

  console.log(
    "Server Running on Port 3000"
  );

});