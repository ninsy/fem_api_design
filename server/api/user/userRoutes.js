var router = require('express').Router();
var logger = require('../../util/logger');
var ctrl = require("./userController");
var routes = require("../../util/genericRouter")

routes(ctrl, router);

module.exports = router

// router.param("id", handleParam)
//
// router.route('/')
//   .get(handleGet)
//   .post(handlePost)
//
// router.route("/:id")
//   .get(handleGetId)
//   .put(handlePut)
//   .delete(handleDelete)
//
// module.exports = router;
//
// function handleParam(req, res, next, id) {
//     ctrl.findOne({id: id}).then((user) => {
//       ctrl.findOne({id: id})
//       req.user = user;
//       next();
//     })
//     .catch((err) => {
//       res.status(404).json({error: err})
//     });
// }
//
// function handleGet(req, res, next) {
//   var successCb = promiseCompose(req.method, res);
//   ctrl.findAll()
//     .then(successCb)
//     .catch(next)
// }
//
// function handleGetId(req, res, next) {
//   res.status(200).json({user: req.user});
// }
//
// function handlePost(req, res, next) {
//   var successCb = promiseCompose(req.method, res);
//   ctrl.create({body: req.body})
//     .then(successCb)
//     .catch(next)
// }
//
// function handlePut(req, res, next) {
//   var successCb = promiseCompose(req.method, res);
//   ctrl.update({body: req.body, user: req.user})
//     .then(successCb)
//     .catch(next);
// }
//
// function handleDelete(req, res, next) {
//   var successCb = promiseCompose(req.method, res);
//   ctrl.delete({user: req.user})
//     .then(successCb)
//     .catch(next)
// }