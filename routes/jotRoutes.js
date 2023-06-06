const { Router } = require("express");
const controllers = require("../controllers/jotController");
const authControllers = require("../controllers/authController");

const router = Router();

const { root, jot_dashboard } = controllers;
const { signup, login } = authControllers;

router.route("/").get(root);
router.route("/signup").get(signup);
router.route("/login").get(login);
router.route("/jot").get(jot_dashboard);

module.exports = router;
