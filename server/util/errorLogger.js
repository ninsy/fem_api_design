const config = require(process.env.NODE_ROOT + '/server/config/config');

module.exports = {
  clientErr: (req, res, next) => {
    var err = new Error("Not found");
        err.status = 404;
        next(err);
  },
  serverErr: (err, req, res, next) => {
    console.log(err.stack);
    res.status = err.status || 500;
    res.json({
      message: err.message,
      error: config.logging ? err.stack : {}
    })
  }
}
