const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  getSolarpanel,
  getLithiumBattery,
  getSolarInverter,
  getOffgridSolarSystem,
  getOngridSolarSystem,
  getFeaturedProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

//Homepage Featured Products routes
router.route("/solar-panel").get(getSolarpanel);
router.route("/lithium-battery").get(getLithiumBattery);
router.route("/solar-inverter").get(getSolarInverter);
router.route("/offgrid-system").get(getOffgridSolarSystem);
router.route("/ongrid-system").get(getOngridSolarSystem);

//Homepage Featured Product Get routes
router.route("/featuredProducts").get(getFeaturedProduct);

module.exports = router;
