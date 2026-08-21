const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({
        message: "Access Denied"
      });
    }

    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(
      token,
      "mysecretkey"
    );

    req.user = verified;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid Token"
    });

  }
};

module.exports = auth;