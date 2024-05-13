const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const dealSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  imgUrl: String,
  name: String,
  price: Number,
  yield: String,
  sold: String,
  tiket: Number,
  daysLeft: Number,
  amount: Number,
  expirationDate: Date,
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const deals = await Deal.find();
    res.json(deals);
  } else if (req.method === "POST") {
    const newDeal = new Deal(req.body);
    const savedDeal = await newDeal.save();
    res.json(savedDeal);
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
