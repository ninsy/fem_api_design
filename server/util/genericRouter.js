module.exports = function(ctrl, router) {

  router.param("id", ctrl.params);

  router.route("/")
    .get(ctrl.get)
    .post(ctrl.post)

  router.route("/:id")
    .get(ctrl.getOne)
    .put(ctrl.put)
    .delete(ctrl.delete)
  
};
