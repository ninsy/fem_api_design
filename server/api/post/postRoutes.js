var router = require('express').Router();
var logger = require('../../util/logger');
var ctrl = require("./userController");

router.param("id", handleParam)

router.route('/')
  .get(handleGet)
  .post(handlePost)

router.route("/:id")
  .get(handleGetId)
  .put(handlePut)
  .delete(handleDelete)

module.exports = router;

function promiseCompose(reqType, res) {
  return function then(result) {
    res.status(200)
    switch(reqType) {
      case "GET": {
        Object.prototype.toString.call(result) === "[object Array]"
          ? res.json({posts: result})
          : res.json({post: result})
        break;
      }
      case "POST": {
        res.status(201).json({createdPost: result})
        break;
      }
      case "PUT": {
        res.json({updatedPost: result})
        break;
      }
      case "DELETE": {
        res.json({deletedPost: result})
        break;
      }
    }
  }
}

function handleParam(req, res, next, id) {
    ctrl.findOne({id: id}).then((post) => {
      ctrl.findOne({id: id})
      req.post = post;
      next();
    })
    .catch((err) => {
      res.status(404).json({error: err})
    });
}

function handleGet(req, res, next) {
  var successCb = promiseCompose(req.method, res);
  ctrl.findAll()
    .then(successCb)
    .catch(next)
}

function handleGetId(req, res, next) {
  res.status(200).json({post: req.post});
}

function handlePost(req, res, next) {
  var successCb = promiseCompose(req.method, res);
  ctrl.create({body: req.body})
    .then(successCb)
    .catch(next)
}

function handlePut(req, res, next) {
  var successCb = promiseCompose(req.method, res);
  ctrl.update({body: req.body, post: req.post})
    .then(successCb)
    .catch(next);
}

function handleDelete(req, res, next) {
  var successCb = promiseCompose(req.method, res);
  ctrl.delete({post: req.post})
    .then(successCb)
    .catch(next)
}
