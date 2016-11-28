const tigers = [];

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
  }
}

exports.prepareEntity = (id) => {
  helpers.entityClosure = helpers.entity(id);
}

exports.list = () => {
  return new Promise((resolve, reject) => {

  });
}

exports.single = () => {
  return new Promise((resolve, reject) => {

  });
}

exports.create = () => {
  return new Promise((resolve, reject) => {

  });
}

exports.update = () => {
  return new Promise((resolve, reject) => {

}
});

exports.delete = () => {
  return new Promise((resolve, reject) => {

  });
}
