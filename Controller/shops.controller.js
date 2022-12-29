const {
  getShopsInfo,
  postShopsInfo,
  getShopByNameInfo,
} = require("../Services/shops.service");

exports.getShops = async (req, res, next) => {
  try {
    const result = await getShopsInfo();
    res.status(200).json({
      status: "success",
      message: "Shops data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Shops data fetched unsuccessful",
    });
  }
};
exports.addShops = async (req, res, next) => {
  try {
    const result = await postShopsInfo(req.body);
    res.status(200).json({
      status: "success",
      message: "Shops data Added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Shops data is not added error occurred",
    });
  }
};
exports.getShopByName = async (req, res, next) => {
  try {
    const result = await getShopByNameInfo(req.params.name);
    res.status(200).json({
      status: "success",
      message: "Shop data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Shop data is not fetched an error occurred",
    });
  }
};
