const { Router } = require("express");
const controllers = require("../controllers/jotController");
const authControllers = require("../controllers/authController");
const middleware = require("../middleware/authMiddleware");

const router = Router();

const { root, jot_dashboard, jot_create_get, jot_create_post, jot_details } =
  controllers;
const { signup, login, createUser, logout, loginUser } = authControllers;
const { protectRoute, checkLoggedIn, checkUser } = middleware;

// global middleware
router.route("*").all(checkUser);

router.route("/jots/*").all(protectRoute);

router.route("/").get(root);
router.route("/signup").get(checkLoggedIn, signup).post(createUser);
router.route("/login").get(checkLoggedIn, login).post(loginUser);

router.route("/jots/create").get(jot_create_get).post(jot_create_post);
router.route("/jots/:id").get(jot_details);
router.route("/jots").get(jot_dashboard);

router.route("/logout").post(logout);

module.exports = router;
