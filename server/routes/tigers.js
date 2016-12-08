let tigerRouter = require("express").Router();
let tigerRepo;

tigerRouter.param("id", (req, res, next, id) => {
  let tmp = tigerRepo.prepareEntity(id);
  if(tmp) {
    req.body.tigerInfo = tmp;
    next();
  } else {
    res.status(400).json({message: `Tiger with id ${id} wasn't found.`});
  }
})

tigerRouter.get("/", (req, res, next) => {
  tigerRepo.list()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
});

tigerRouter.get("/:id", (req, res, next) => {
  tigerRepo.single({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
});

tigerRouter.post("/", (req, res, next) => {
  tigerRepo.create({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
});

tigerRouter.put("/:id", (req, res, next) => {
  tigerRepo.update({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
});
tigerRouter.delete("/:id", (req, res, next) => {
  tigerRepo.delete({body: req.body})
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next);
});

module.exports = (repo) => {
  tigerRepo = repo;
  return tigerRouter;
}
