
var Post = require('./postModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
  Post.findById(id)
    .populate('author')
    .exec()
    .then(function(post) {
      if (!post) {
        next(new Error('No post with that id'));
      } else {
        req.post = post;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Post.find({})
    .populate('author categories')
    .exec()
    .then(function(posts){
      res.json(posts);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var post = req.post;
  res.json(post);
};

exports.put = function(req, res, next) {
  var post = req.post;

  var update = req.body;

  _.merge(post, update);

  post.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newpost = req.body;
  Post.create(newpost)
    .then(function(post) {
      res.json(post);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};

// const PostModel = require('./postModel');
//
// exports.findOne = function({id}) {
//   return new Promise(function(resolve, reject) {
//     let promise = PostModel.findById(id).populate("author categories").exec().then(resolve).catch(reject);
//   });
// }
//
// exports.findAll = function() {
//   return new Promise(function(resolve. reject) {
//     PostModel.find({}).populate("author categories").exec().then(resolve).catch(reject);
//   });
// }
//
// exports.create = function({body}) {
//   return new Promise(function(resolve, reject) {
//     PostModel.create(body).then(resolve).catch(reject);
//   });
// }
//
// exports.update = function({post, body}) {
//   return new Promise(function(resolve, reject) {
//     var entity = Object.assign(post, body);
//     entity.save(function(err, savedPost) {
//       err
//        ? reject(err)
//        : resolve(savedPost)
//     })
//
//   });
// }
//
// exports.delete = function({post}) {
//   return new Promise(function(resolve, reject) {
//     post.remove(function(err, removed) {
//       err
//        ? reject(err)
//        : resolve(removed)
//     })
//   });
// }
