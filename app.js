const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//routes
const shopsRoute = require("./Routes/v1/shops.route");
const ordersRoute = require("./Routes/v1/orders.router");
/* 
this is existing routes 
/shops  > get restaurant
/shop/:name > get single shop
/add/shop > post shop
/add/menu/:name > post shop menu
/shop/menu/:name > get shop menu
/menus > get all menu
/deleteshop/:name > delete shop
/all/orders  > get all orders
/orders > post order
/delete/order/:id >delete order 

this is update routers
shops/shop/:name > get,del
shops/menus/ >get
shops/menus/:shopname >get, add, del

orders/ >get
orders/order/ > get,add,del

*/

app.use("/shops", shopsRoute);
app.use("/orders", ordersRoute);

app.get("/", (req, res) => {
  res.send(`Food Express Server is Alive :D`);
});

module.exports = app;
