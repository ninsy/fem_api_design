var router = require('express').Router();
var logger = require('../../util/logger');
var ctrl = require("./categoryController");
var routes = require("../../util/genericRouter");

routes(ctrl, router);

module.exports = router;
