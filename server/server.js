var express = require('express');
var app = express();
var api = require('./api/api');
let errLoggers = require('./util/errorLogger');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
app.use(errLoggers.clientErr);
app.use(errLoggers.serverErr);
// set up global error handling

// export the app for testing
module.exports = app;
