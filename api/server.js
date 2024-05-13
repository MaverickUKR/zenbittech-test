const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");
const app = express();
// const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "client/build/index.html"));
// });
mongoose.connect(process.env.MONGO_URI);
const dealSchema = new Schema({
  _id: Schema.Types.ObjectId,
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

app.get("/api/deals", async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
});

app.post("/api/deals", async (req, res) => {
  const newDeal = new Deal(req.body);
  const savedDeal = await newDeal.save();
  res.json(savedDeal);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
