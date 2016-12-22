let config = {
  env: process.env.NODE_ENV || "dev",
  logging: false,
  port: process.env.PORT || 9000,
  secrets: {
    githubToken: process.env.GITHUB_TOKEN,
    jwt: process.env.JWT
  }
}

let envConfig = require("./" + config.env);

module.exports = Object.assign(config, envConfig || {});
