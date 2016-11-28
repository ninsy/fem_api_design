let tigerRouter = require("express").Router();
let tigerRepo;

tigerRouter.param("id", (req, res, next, id) => {
  tigerRepo.prepareEntity(id);
})

tigerRouter.get("/", (req, res, next) => {
  tigerRepo.list()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next)
});

tigerRouter.get("/:id", (req, res, next) => {
  tigerRepo.single()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next)
});

tigerRouter.post("/", (req, res, next) => {
  tigerRepo.create()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next)
});

tigerRouter.put("/:id", (req, res, next) => {
  tigerRepo.update()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
});
.catch(next)

tigerRouter.delete("/:id", (req, res, next) => {
  tigerRepo.delete()
    .then((tigers) => {
      res.status(200).json({tigers: tigers});
    })
    .catch(next)
});

module.exports = (repo) => {
  tigersRepo = repo;
  return tigerRouter;
}
