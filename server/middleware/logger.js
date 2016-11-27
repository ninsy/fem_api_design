let conf;
const handler = {
  log: (req, res, next) => {
    console.log("Incoming request at: " + new Date());
    next();
  }
}

module.exports = (config) => {
  conf = config;
  return {log: handler.log};
}
