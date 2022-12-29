const { ObjectId } = require("mongodb");
const ordersCollectionSchema = require("../Model/orders.infoSchema");

exports.getAllOrdersInfo = async () => {
  const result = await ordersCollectionSchema.find({});
  return result;
};

exports.createOrderInfo = async (data) => {
  const result = await ordersCollectionSchema.insertMany(data);
  return result;
};
exports.getOrdersByMail = async (email) => {
  const result = await ordersCollectionSchema.find({ email });
  return result;
};

exports.deleteOrderInfo = async (id) => {
  const qurey = { _id: ObjectId(id) };
  const result = await ordersCollectionSchema.deleteOne(qurey);
  return result;
};
