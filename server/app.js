const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware/common');
const logger = require('./middleware/logger')();

module.exports = (lionRepo, tigerRepo) => {
  const app = express();
  const lionRoutes = require("./routes/lions")(lionRepo);
  const tigerRoutes = require("./routes/tigers")(tigerRepo);

  app.use(logger.log);

  app.use(express.static('client'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.get("/lions", lionRoutes.getLionList);
  app.get("/lions/:id", lionRoutes.getSingleLion);
  app.post("/lions", lionRoutes.createLion);
  app.put("/lions/:id", lionRoutes.updateLion);
  app.delete("/lions/:id", lionRoutes.deleteLion);

  app.use(tigerRoutes);

  app.use(middleware.clientErr);
  app.use(middleware.serverErr);

  return app;
}
