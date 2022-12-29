const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");

const app = require("./app");

//db connnection
mongoose.connect(process.env.MongoDB_Uri).then(() => {
  console.log("FoodeExpress DB is Connected".blue.bgBrightWhite.inverse);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    "FoodExpress server is listening on port".cyan,
    port.green.underline
  );
});
