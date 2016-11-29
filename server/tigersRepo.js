const tigers = [];
const possibleParams = ['name', 'age', 'pride', 'gender'];

let helpers = {
  entityClosure: null,
  entity: (id) => {
    let tmp = tigers[id] || null;
    return function ent(...fields) {
      let obj = {};
      let propIndex;

      if(!fields.length) return tmp;

      for(let i = 0; i < fields.length; i++) {
        if((propIndex = Object.keys(tmp).indexOf(fields[i])) > -1) {
          let copiedKey = Object.keys(tmp)[propIndex];
          let copiedVal = tmp[copiedKey];
          obj = Object.assign(obj, {copiedKey: copiedVal});
        }
      }
      return obj;
    }
  },
  bodyRequestParamFilter: (bodyObj) => {



    return Object.keys(bodyObj).filter((field) => {return possibleParams.indexOf(field) > -1;
    })
    .map((matching) => {
      return bodyObj[matching];
    }
  }
}

exports.prepareEntity = (id) => {
  helpers.entityClosure = helpers.entity(id);
}

exports.list = () => {
  return Promise.resolve(tigers);
}

exports.single = () => {
  return new Promise((resolve, reject) => {
      let retVal = helpers.entityClosure();
      retVal ? resolve(retVal) : reject({})
  });
}

exports.create = ({body}) => {
  return new Promise((resolve, reject) => {

    let retVal = helpers.entityClosure();
  });
}

exports.update = ({body}) => {
  return new Promise((resolve, reject) => {

}
});

exports.delete = () => {
  return new Promise((resolve, reject) => {

  });
}
