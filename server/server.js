// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body

// TODO: make the REST routes to perform CRUD on lions

const app = require("./app")(require("./lionsRepo"), require("./tigersRepo"));
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('on port: ' + port);
});
