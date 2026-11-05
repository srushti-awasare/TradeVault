require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Models
const holdingModel = require("./model/holdingModel");
const positionModel = require("./model/positionModel");
const orderModel = require("./model/orderModel");

// Routes
const authRoute = require("./routes/authRoute");

// Middleware
const authMiddleware = require("./middlewares/authMiddleware");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ================= MIDDLEWARE =================
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      process.env.FRONTEND_URL,
      process.env.DASHBOARD_URL,
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// ================= AUTH ROUTES =================
app.use("/api/auth", authRoute);
// ================= PROTECTED ROUTES =================

// HOLDINGS
app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await holdingModel.find({
      userId: req.user._id,
    });
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POSITIONS
app.get("/allPositions", authMiddleware, async (req, res) => {
  try {
    const allPositions = await positionModel.find({
      userId: req.user._id,
    });
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// NEW ORDER
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // ================= BUY =================
    if (mode === "BUY") {
      let holding = await holdingModel.findOne({
        userId: req.user._id,
        name,
      });
      if (holding) {
        const totalInvestment = holding.avg * holding.qty + price * qty;

        holding.qty += Number(qty);
        holding.avg = totalInvestment / holding.qty;
        holding.price = price;

        await holding.save();
      } else {
        const newHolding = new holdingModel({
          userId: req.user._id,
          name,
          qty,
          avg: price,
          price,
          net: "+0%",
          day: "+0%",
        });

        await newHolding.save();
      }

      const newOrder = new orderModel({
        userId: req.user._id,
        name,
        qty,
        price,
        mode,
      });

      await newOrder.save();
    }

    // ================= SELL =================
    else if (mode === "SELL") {
      let holding = await holdingModel.findOne({
        userId: req.user._id,
        name,
      });
      if (!holding) {
        return res.status(400).json({
          success: false,
          message: "You don't own this stock.",
        });
      }

      if (Number(qty) > holding.qty) {
        return res.status(400).json({
          success: false,
          message: `You only have ${holding.qty} shares.`,
        });
      }

      holding.qty -= Number(qty);
      holding.price = price;

      if (holding.qty === 0) {
        await holdingModel.deleteOne({
          _id: holding._id,
          userId: req.user._id,
        });
      } else {
        await holding.save();
      }

      const newOrder = new orderModel({
        userId: req.user._id,
        name,
        qty,
        price,
        mode,
      });

      await newOrder.save();
    }

    res.status(201).json({
      success: true,
      message: `${mode} order placed successfully.`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const orders = await orderModel.find({
      userId: req.user._id,
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/api/auth/check", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: {
      username: req.user.username,
      email: req.user.email,
    },
  });
});
app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});
// ================= DB CONNECTION =================
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
