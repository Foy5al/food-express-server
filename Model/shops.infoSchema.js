const mongoose = require("mongoose");

const foodieExpressCollection = mongoose.Schema(
  {
    resturent_name: {
      type: String,
    },
    logo: {
      type: String,
    },
    imgLink: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  { timestamps: true }
);

const shopsInfoSchema = mongoose.model(
  "foodieExpressCollection",
  foodieExpressCollection
);
module.exports = shopsInfoSchema;
