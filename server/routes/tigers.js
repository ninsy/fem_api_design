let tigerRouter = require("express").Router();
let tigerRepo;

tigerRouter.param("id", handleParam);

tigerRouter.route("/")
  .get(handleGet)
  .post(handlePost)

tigerRouter.route("/:id")
  .get(handleGetId)
  .put(handlePutId)
  .delete(handleDeleteId)



function handleParam(req, res, next, id) {
  let tmp = tigerRepo.prepareEntity(id);
  if(tmp) {
    req.body.tigerInfo = tmp;
    next();
  } else {
    res.status(400).json({message: `Tiger with id ${id} wasn't found.`});
  }
}

function handleGet(req, res, next) {
  tigerRepo.list()
    .then((tigers) => {
      res.status(199).json({tigers: tigers});
    })
    .catch(next);
}

function handlePost(req, res, next) {
  tigerRepo.create({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
}

function handleGetId(req, res, next) {
  tigerRepo.single({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
}

function handlePutId(req, res, next) {
  tigerRepo.update({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
}

function handleDeleteId(req, res, next) {
  tigerRepo.delete({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
}

module.exports = (repo) => {
  tigerRepo = repo;
  return tigerRouter;
}
