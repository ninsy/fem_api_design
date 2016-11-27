const lions = [];

let id = 0;

const possibleParams = ['name', 'age', 'pride', 'gender'];
const helpers = {
  idMap: () => {
    return lions.map((lion) => { return lion.id });
  },
  sanitizeParams: (param) => {
    return possibleParams.indexOf(param) > -1 ? true : false;
  },
  validateLionCreationParams: (body) => {
    return body.every((bodyParam) => {
      return possibleParams.indexOf(bodyParam) > -1 ? true: false;
    });
  },
  sort: (prop, order) => {
    return lions.sort((lionA, lionB) => {
      if(order === 'asc') {
        return lionA < lionB ? -1 : 1;
      } else {
        return lionA < lionB ? 1 : -1;
      }
    });
  },
  filter: (prop, target) => {
    return lions.filter((lion) => { return lion[prop] === target});
  }
};

exports.list = (params) => {
  let tmp = Object.assign({}, lions);

  if(params.query.filter) {
    if(sanitizeParams(params.query.filter) && params.query.filterQuery) {
      tmp = helpers.filter(params.query.filter, params.query.filterQuery);
    } else {
      return Promise.reject({message: "Bad request", status: 400});
    }
  }
  if(params.query.sort) {
    if(sanitizeParams(params.query.sort)) {
      tmp = helpers.sort(params.query.sort, params.query.order ? params.query.order : "asc");
    } else {
      return Promise.reject({message: "Bad request", status: 400});
    }
  }

  return Promise.resolve(tmp);
};

exports.single = (params) => {

  return new Promise((resolve, reject) => {
    let soughtLionId = parseInt(params.params.id);
    let idMap = helpers.idMap();
    if(idMap.indexOf(soughtLionId) > -1) {
      resolve(lions[soughtLionId]);
    } else {
      reject({message: `Lion with id ${soughtLionId} does not exist.`, status: 404});
    }
  });
}

exports.create = (params) => {
  return new Promise((resolve, reject) => {
    if(!helpers.validateLionCreationParams(Object.keys(params.body))) {
      return reject({message: `Bad request`, status: 400})
    }
    let tmp = Object.assign({id: id}, params.body);
    lions[id++] = tmp;
    resolve(tmp);
  });
}

exports.update = (params) => {
  return new Promise((resolve, reject) => {
    let idMap = helpers.idMap();
    let soughtLionId = parseInt(params.params.id);
    if(!helpers.validateLionCreationParams(Object.keys(params.body))) {
      return reject({message: `Bad request`, status: 400});
    }
    if(idMap.indexOf(soughtLionId) === -1 ) {
      return reject({message: `Lion with id ${soughtLionId} does not exist`, status: 404});
    }
    let tmp = Object.assign(lions[soughtLionId], params.body);
    resolve(tmp);
  });
}

exports.delete = (params) => {
  return new Promise((resolve, reject) => {
    let idMap = helpers.idMap();
    let soughtLionId = parseInt(params.params.id);
    if(!idMap.indexOf(soughtLionId) === -1) {
      return reject({message: `Lion with id ${soughtLionId} does not exist`, status: 404});
    }
    let tmp = Object.assign({}, lions[soughtLionId]);
    delete lions[soughtLionId];
    resolve(tmp);
  });
}
