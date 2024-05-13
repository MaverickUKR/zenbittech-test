// const mongoose = require("mongoose");
// require("dotenv").config();
// mongoose.connect(process.env.MONGO_URI);

// const dealSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   imgUrl: String,
//   name: String,
//   price: Number,
//   yield: String,
//   sold: String,
//   tiket: Number,
//   daysLeft: Number,
//   amount: Number,
//   expirationDate: Date,
// });

// const Deal = mongoose.model("Deal", dealSchema);

// module.exports = async (req, res) => {
//   if (req.method === "GET") {
//     const deals = await Deal.find();
//     res.json(deals);
//   } else if (req.method === "POST") {
//     const newDeal = new Deal(req.body);
//     const savedDeal = await newDeal.save();
//     res.json(savedDeal);
//   } else {
//     res.status(405).send("Method Not Allowed");
//   }
// };

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

const dealSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  imgUrl: String,
  name: String,
  price: Number,
  yield: String,
  sold: String,
  ticket: Number,
  daysLeft: Number,
  amount: Number,
  expirationDate: Date,
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = async (req, res) => {
  // Set CORS headers to allow requests from any origin
  // or restrict to specific origins as needed
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow only this origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  // Handle OPTIONS method for pre-flight requests
  if (req.method === "OPTIONS") {
    return res.status(200).send();
  }

  try {
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
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
