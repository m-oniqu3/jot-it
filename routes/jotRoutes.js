const { Router } = require("express");
const controllers = require("../controllers/jotController");
const authControllers = require("../controllers/authController");

const router = Router();

const { root } = controllers;
const { signup, login } = authControllers;

router.route("/").get(root);
router.route("/signup").get(signup);
router.route("/login").get(login);

module.exports = router;
