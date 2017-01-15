// TODO: kontroler + router do kategorii, test, czy to wogole dziala.


const PostModel = require('./postModel');

exports.findOne = function({id}) {
  return new Promise(function(resolve, reject) {
    let promise = PostModel.findById(id).populate("author categories").exec().then(resolve).catch(reject);
  });
}

exports.findAll = function() {
  return new Promise(function(resolve. reject) {
    PostModel.find({}).populate("author categories").exec().then(resolve).catch(reject);
  });
}

exports.create = function({body}) {
  return new Promise(function(resolve, reject) {
    PostModel.create(body).then(resolve).catch(reject);
  });
}

exports.update = function({post, body}) {
  return new Promise(function(resolve, reject) {
    var entity = Object.assign(post, body);
    entity.save(function(err, savedPost) {
      err
       ? reject(err)
       : resolve(savedPost)
    })

  });
}

exports.delete = function({post}) {
  return new Promise(function(resolve, reject) {
    post.remove(function(err, removed) {
      err
       ? reject(err)
       : resolve(removed)
    })
  });
}
