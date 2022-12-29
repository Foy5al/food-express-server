const express = require("express");
const router = express.Router();
//controller
const ordersController = require("../../Controller/orders.Controller");

//get orders
router.route("/").get(ordersController.getOrders);

router.route("/order").post(ordersController.createOrder);

router.route("/order/:email").get(ordersController.getOrder);

router.route("/order/:id").delete(ordersController.deleteOrder);

module.exports = router;
