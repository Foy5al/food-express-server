const {
  getShopsInfo,
  postShopsInfo,
  getShopByNameInfo,
  deleteShopInfo,
} = require("../Services/shops.service");
const {
  getMenusInfo,
  addMenusInfo,
  getMenusByShopNameInfo,
  deleteMenusInfo,
} = require("../Services/menu.service");

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
exports.deleteShop = async (req, res, next) => {
  try {
    const result = await deleteShopInfo(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Shop deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Shop can't be deleted an error occurred",
    });
  }
};
exports.getMenus = async (req, res, next) => {
  try {
    const result = await getMenusInfo();
    res.status(200).json({
      status: "success",
      message: "All Menus data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "All Menus data is not fetched an error occurred",
    });
  }
};
exports.addMenus = async (req, res, next) => {
  try {
    const result = await addMenusInfo(req.body);
    res.status(200).json({
      status: "success",
      message: "Menus data added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Menus data is not added an error occurred",
    });
  }
};
exports.deleteMenu = async (req, res, next) => {
  try {
    const result = await deleteMenusInfo(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Menus data added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Menus data is not added an error occurred",
    });
  }
};
exports.getMenusByShopName = async (req, res, next) => {
  try {
    const result = await getMenusByShopNameInfo(req.params.name);
    res.status(200).json({
      status: "success",
      message: "Shop Menus data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Shop Menus data is not fetched an error occurred",
    });
  }
};
