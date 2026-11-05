const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/secretToken");

// ==========================
// SIGNUP
// ==========================
module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
    });

    // Create JWT
    const token = createSecretToken(user._id);

    // Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    // Remove password from response
    const { password: userPassword, ...others } = user._doc;

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: others,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// ==========================
// LOGIN
// ==========================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Compare password
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Create JWT
    const token = createSecretToken(user._id);

    // Store cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    // Remove password
    const { password: _, ...userData } = user._doc;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userData,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
