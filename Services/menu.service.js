const menusInfoSchema = require("../Model/menus.infoSchema");
const ObjectId = require("mongodb").ObjectId;

exports.getMenusInfo = async () => {
  const result = await menusInfoSchema.find({});
  return result;
};
exports.addMenusInfo = async (data) => {
  const result = await menusInfoSchema.insertMany(data);
  return result;
};
exports.deleteMenusInfo = async (id) => {
  const query = { _id: ObjectId(id) };
  const result = await menusInfoSchema.deleteOne(query);
  return result;
};

exports.getMenusByShopNameInfo = async (shopName) => {
  const result = await menusInfoSchema.find({ shopName });
  return result;
};
