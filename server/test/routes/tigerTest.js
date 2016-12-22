const request = require('supertest');
const assert = require("assert");
const path = require("path");
let app, repo;

describe('[TIGERS]', () => {

  repo = require("./fakeTigerRepo");
  app = require(path.join(process.env.NODE_ROOT, '/app'))(null, repo);

  describe("GET /", () => {
    it("Returns array of tigers", (done) => {
      request(app)
        .get("/tigers")
        .set("Application-Type", /json/)
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          assert.equal(Object.prototype.toString.call(res.body.tigers), "[object Array]");
          done();
        });
    });
  });
  describe("GET /:id", () => {
    it("Returns single tiger entity", (done) => {
      let id = 1;
      request(app)
        .get(`/tigers/${id}`)
        .set("Application-Type", /json/)
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          assert.equal(err, null);
          assert.equal(Object.prototype.toString.call(res.body.tiger), '[object Object]');
          assert.equal(res.body.tiger.id, id);
          done();
        });
    });
    it("Returns 404 on no lion found", (done) => {
      request(app)
        .get('/tigers/213')
        .set("Application-Type", /json/)
        .expect(404)
        .end((err, res) => {
          assert.equal(Object.prototype.toString.call(res.error.message), "[object String]");
          done();
        })
    })
  });
  describe("POST /", () => {
    it("Should return freshly created object on success", () => {

      let tmp = {
          pride: "a",
          gender: "f",
          age: 12,
          name: "hello"
      };

      request(app)
        .post("/tigers")
        .set("Application-Type", /json/)
        .send(tmp)
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          assert.deepEqual(res.body.tiger, tmp);
        })
    });
  });
  describe("PUT /:id", () => {
    it("Should return tiger with id provided as param", () => {

    });
  });
  describe("DELETE /:id", () => {
    it("Should return tiger with id provided as param", () => {

    });
  });
});
