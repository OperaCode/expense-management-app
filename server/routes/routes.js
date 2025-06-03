
const express = require("express");
// const routes = require("express").Router();
const routes = express.Router();
const controller = require("../controller/Controller");


routes.route("/api/categories")
.get(controller.createCategory);
// .get((req,res)=>res.json("Get Request from Categories"))

module.exports = routes