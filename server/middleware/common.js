const handlers = {
  clientErr: (req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
  },
  serverErr: (err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.json({
      message: err.message,
      error: err.stack
    })
  }
}


module.exports = handlers;
