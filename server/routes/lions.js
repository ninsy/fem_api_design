let http = require("http");

let lionsCacheRef;

const vm = {
  getLionList: (req, res, next) => {
    lionsCacheRef.list({query: req.query})
      .then((data) => {
        res.status(200).json({lions: data});
      })
      .catch(next);
  },
  getSingleLion: (req, res, next) => {
    lionsCacheRef.single({params: req.params})
      .then((data) => {
        res.status(200).json({lion: data});
      })
      .catch(next);
  },
  createLion: (req, res, next) => {
    lionsCacheRef.create({body: req.body})
      .then((data) => {
        res.status(201).json({createdLion: data});
      })
      .catch(next);
  },
  updateLion: (req, res, next) => {
    lionsCacheRef.update({body: req.body, params: req.params})
      .then((data) => {
        res.status(200).json({updatedLion: data});
      })
      .catch(next);
  },
  deleteLion: (req, res, next) => {
    lionsCacheRef.delete({params: req.params})
      .then((data) => {
        res.status(200).json({deletedLion: data});
      })
      .catch(next);
  }
}

module.exports = (lionsCache) => {
  lionsCacheRef = lionsCache;
  return vm;
}
