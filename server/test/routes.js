const assert = require('assert');
const supertest = require('supertest');
const querystring = require('querystring');
const fakeRepo = require("./fakeLionsRepo")
const app = require("../app")(fakeRepo);

const arraryType = "[object Array]";
const numType = "[object Number]";

const helpers = {
  sortQueryObj: (sort = "name", order = "asc") => {
    return {sort,order};
  },
  filterQueryObj: (filter = "pride", filterQuery = "B") => {
    return {filter, filterQuery};
  }
}

describe("General responses", () => {

});

describe("GET /lions", () => {
  it("Should return 200 and json containing at least empty array", () => {
    request.get(app)
      .get("/lions")
      .expect(200)
      .expect("Content-Type", "application/json")
      .expect((res) =>
          assert.equal(Object.prototype.toString.call(res.body.lions),arraryType);
          assert.equal(res.body.lions.length >= 0, true);
      });
  });
  it("Should return 200 and json containing sorted array by given predicate and order", () => {

    let url = "/lions?" + querystring.stringify(helpers.sortQueryObj());

    request.get(app)
      .get(url);
      .expect(200)
      .expect("Content-Type", "application/json")
      .expect((res) => {
          let mappedNames = res.body.lions.map((lion) => { return lion.name});
          assert.deepEqual(mappedNames, ["Anthony", "Betty", "Mike", "Simon", "Tom"]);
      });
  });
  it("Should return 200 and json containing filtered items by given predicate and type", () => {

    let url = "/lions?" + querystring.stringify(helpers.filterQueryObj());

    request.get(app)
      .get(url)
      .expect(200)
      .expect("Content-Type", "application/json")
      .expect((res) => {
          res.body.lions.forEach((lion) => {
            assert.equal(lion.gender)
          });
      });
  });
  it("Should return 200 and both filtered and sorted array", () => {
    request.get(app)
      .get("/lions?sort=name&order=desc&filter=pride&filterQuery=B")
      .expect(200)
      .expect("Content-Type", "application/json")
      .expect((res) => {

      });
  });
  it("Should return 400 if passed unknown predicate in query string", () => {
    request.get(app)
    .get("/lions?sort=name&order=desc&filter=pride&filterQuery=B")
    .expect(400)
    .expect("Content-Type", "application/json")
    .expect((res) => {

    });
  });
  it("Should return 400 if one of propery from tuple (query, param) is missing", () => {

  });
});

describe("GET /lions/:id", () => {
  it("Should return 200 and json containing single valid lion object", () => {

  });
  it("Should return 400 if id is not number", () => {

  });
  it("Should return 404 if there is no lion with given id", () => {

  });
});

describe("POST /lions", () => {
  it("Should return 200 and created object if passed parameters in body are valid", () => {

  });
  it("Should return 400 on malformed body parameters ( missing props, non-existent props)", () => {

  });
});

describe("PUT /lions/:id", () => {
  it("Should return 200 and updated object if passed params and lion with given id exists", () => {

  });
  it("Should return 404 if lion with given id doesn't exist", () => {

  });
  it("Should return 400 if body parameters are malformed or id is not numeric value", () => {

  });
});

describe("DELETE /lions/:id", () => {
  it("Should return 200 and deleted object if passed params and lion with given id exists", () => {

  });
  it("Should return 404 if lion with given id doesn't exist", () => {

  });
  it("Should return 400 if id is not a number", () => {

  });
});
