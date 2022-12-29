const shopsInfoSchema = require("../Model/shops.infoSchema");

exports.getShopsInfo = async () => {
  const result = await shopsInfoSchema.find({});
  return result;
};
exports.postShopsInfo = async (data) => {
  const result = await shopsInfoSchema.create(data);
  return result;
};
exports.getShopByNameInfo = async (resturent_name) => {
  const result = await shopsInfoSchema.findOne({ resturent_name });
  return result;
};
