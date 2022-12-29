const shopsInfoSchema = require("../Model/shops.infoSchema");
const ObjectId = require("mongodb").ObjectId;

exports.getShopsInfo = async () => {
  const result = await shopsInfoSchema.find({});
  return result;
};
exports.postShopsInfo = async (data) => {
  const result = await shopsInfoSchema.create(data);
  return result;
};
exports.deleteShopInfo = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await shopsInfoSchema.deleteOne(query);
  return result;
};
exports.getShopByNameInfo = async (resturent_name) => {
  const result = await shopsInfoSchema.findOne({ resturent_name });
  return result;
};
