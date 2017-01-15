var express = require('express');
var app = express();
var api = require('./api/api');
var config = require("./config/config")
let errLoggers = require('./util/errorLogger');


require('mongoose').connect(config.db.url);
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
app.use(errLoggers.clientErr);
app.use(errLoggers.serverErr);
// set up global error handling

// export the app for testing
module.exports = app;
