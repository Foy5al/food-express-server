const mongoose = require("mongoose");

const ordersCollection = mongoose.Schema({
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  tel: {
    type: String,
  },
  house: {
    type: String,
  },
  area: {
    type: String,
  },
  zip: {
    type: String,
  },
  orderItems: [
    {
      type: String,
    },
  ],
  price: {
    type: String,
  },
});

const ordersCollectionSchema = mongoose.model("orders", ordersCollection);
module.exports = ordersCollectionSchema;
