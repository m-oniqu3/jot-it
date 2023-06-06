const { Router } = require("express");
const controllers = require("../controllers/jotControllers");

const router = Router();

const { root } = controllers;

router.route("/").get(root);

module.exports = router;
