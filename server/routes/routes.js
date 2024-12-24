
const express = require("express");
// const routes = require("express")Router();
const router = express.Router();


router.route("/api/categories") .get((req, res) => res.json({message:"Get Request from Categories"}));

module.exports = router