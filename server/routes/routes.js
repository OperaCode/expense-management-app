
const express = require("express");
// const routes = require("express")Router();
const router = express.Router();
const controller = require("../controller/Controller");


router.route("/api/categories")
.get(controller.createCategory);

module.exports = router