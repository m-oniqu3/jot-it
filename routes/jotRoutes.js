const { Router } = require("express");
const controllers = require("../controllers/jotController");
const authControllers = require("../controllers/authController");

const router = Router();

const { root, jot_dashboard, jot_create } = controllers;
const { signup, login } = authControllers;

router.route("/").get(root);
router.route("/signup").get(signup);
router.route("/login").get(login);
router.route("/jots").get(jot_dashboard);
router.route("/jots-create").get(jot_create);

module.exports = router;
