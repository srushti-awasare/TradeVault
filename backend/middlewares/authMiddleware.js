const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ status: false });
    }

    req.user = user; // attach user
    next(); // THIS is what makes it middleware
  } catch (err) {
    return res.status(401).json({ status: false });
  }
};

module.exports = authMiddleware;
