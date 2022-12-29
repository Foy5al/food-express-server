const {
  getAllOrdersInfo,
  createOrderInfo,
  getOrdersByMail,
  deleteOrderInfo,
} = require("../Services/orders.service");

exports.getOrders = async (req, res, next) => {
  try {
    const result = await getAllOrdersInfo();
    res.status(200).json({
      status: "Success",
      message: "All order data fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Order data fetch failed an error occurred",
    });
  }
};
exports.createOrder = async (req, res, next) => {
  try {
    const result = await createOrderInfo(req.body);
    res.status(200).json({
      status: "Success",
      message: "Order placed Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Order placed failed an error occurred",
      error: error.message,
    });
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const result = await getOrdersByMail(req.params.email);
    res.status(200).json({
      status: "Success",
      message: "Order data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Order data fetch failed an error occurred",
    });
  }
};
exports.deleteOrder = async (req, res, next) => {
  try {
    const result = await deleteOrderInfo(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "Order data is deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Order data is not deleted an error occurred",
    });
  }
};
