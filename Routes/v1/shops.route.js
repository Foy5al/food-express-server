const express = require("express");
const router = express.Router();
//controller
const shopsController = require("../../Controller/shops.controller");

//get shops
router.route("/").get(shopsController.getShops).post(shopsController.addShops);

router.route("/:id").delete(shopsController.deleteShop);

router.route("/shop/:name").get(shopsController.getShopByName);

router.route("/menus").get(shopsController.getMenus);

router.route("/menus/:id").delete(shopsController.deleteMenu);

router
  .route("/menus/:name")
  .get(shopsController.getMenusByShopName)
  .post(shopsController.addMenus);

module.exports = router;
