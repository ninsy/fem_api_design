const UserModel = require('./userModel');

exports.findOne = function({id}) {
  return new Promise(function(resolve, reject) {
    UserModel.findById(id).then(resolve).catch(reject);
  });
}

exports.findAll = function() {
  return new Promise(function(resolve. reject) {
    UserModel.find({}).then(resolve).catch(reject);
  });
}

exports.create = function({body}) {
  return new Promise(function(resolve, reject) {
    UserModel.create(body.user).then(resolve).catch(reject);
  });
}

exports.update = function({user, body}) {
  return new Promise(function(resolve, reject) {
    var entity = Object.assign(user, body);
    entity.save(function(err, savedUser) {
      err
       ? reject(err)
       : resolve(savedUser)
    })

  });
}

exports.delete = function({user}) {
  return new Promise(function(resolve, reject) {
    user.remove(function(err, removed) {
      err
       ? reject(err)
       : resolve(removed)
    })
  });
}
