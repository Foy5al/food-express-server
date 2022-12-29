const express = require("express");
const router = express.Router();
//controller
const shopsController = require("../../Controller/shops.controller");

//get shops
router.route("/").get(shopsController.getShops).post(shopsController.addShops);
router.route("/shop/:name").get(shopsController.getShopByName);
router
  .route("/menus")
  .get(shopsController.getMenus)
  .post(shopsController.addMenus);

module.exports = router;
