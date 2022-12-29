const menusInfoSchema = require("../Model/menus.infoSchema");

exports.getMenusInfo = async () => {
  const result = await menusInfoSchema.find({});
  return result;
};
exports.addMenusInfo = async (data) => {
  const result = await menusInfoSchema.insertMany(data);
  return result;
};
