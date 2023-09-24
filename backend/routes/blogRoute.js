const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogDetails,
  deleteBlog,
  updateBlog,
} = require("../controllers/BlogController.js");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);

router
  .route("/admin/blog/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBlog);

router.route("/blog/:id").get(getBlogDetails);

router
  .route("/admin/blog/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBlog)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBlog);

module.exports = router;
