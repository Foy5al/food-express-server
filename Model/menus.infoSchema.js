const mongoose = require("mongoose");

const menuCollection = mongoose.Schema(
  {
    shopName: {
      type: String,
    },
    itemName: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    imgurl: {
      type: String,
    },
  },
  { timestamps: true }
);

const menusInfoSchema = mongoose.model("menuCollections", menuCollection);
module.exports = menusInfoSchema;
