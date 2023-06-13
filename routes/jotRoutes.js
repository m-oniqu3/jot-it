const { Router } = require("express");
const controllers = require("../controllers/jotController");
const authControllers = require("../controllers/authController");
const protectRoute = require("../middleware/authMiddleware");

const router = Router();

const { root, jot_dashboard, jot_create } = controllers;
const { signup, login, createUser, logout, loginUser } = authControllers;

router.route("/").get(root);
router.route("/signup").get(signup).post(createUser);
router.route("/login").get(login).post(loginUser);
router.route("/jots").get(protectRoute, jot_dashboard);
router.route("/jots-create").get(protectRoute, jot_create);
router.route("/logout").post(logout);

module.exports = router;
