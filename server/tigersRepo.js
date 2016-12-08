const tigers = [];
const possibleParams = ['name', 'age', 'pride', 'gender'];
let id = 0;

let helpers = {
  getEntity: (id) => {
    let idx;
    let sought =  tigers.find( (tiger, index) =>{
      if(parseInt(id) === tiger.id ) {
        idx = index;
        return tiger;
      }
    });
    return sought ? { tiger: sought, index: idx} : null;
    }
}


exports.prepareEntity = (id) => {
  return helpers.getEntity(id);
}

exports.list = () => {
  return Promise.resolve(tigers);
}

exports.single = ({body}) => {
  return Promise.resolve(body.tigerInfo.tiger);
}

exports.create = ({body}) => {
  return new Promise((resolve, reject) => {
    let newTiger = {
      id: id++,
      name: body.name || null,
      age: body.age || null,
      pride: body.pride || null,
      gender: body.gender || null
    };
    tigers.push(newTiger);
    resolve(newTiger);
  });
}

exports.update = ({body}) => {
  return new Promise((resolve, reject) => {
    let tiger = body.tigerInfo.tiger;

    tiger.name = body.name || null;
    tiger.age = body.age || null;
    tiger.pride = body.pride || null;
    tiger.gender = body.gender || null;

    tigers[body.tigerInfo.index] = tiger;
    resolve(tiger);
  });
};

exports.delete = ({body}) => {
  return new Promise((resolve, reject) => {
    let tiger = body.tigerInfo.tiger;
    tigers.splice(body.tigerInfo.index,1);
    resolve(tiger)
  });

}
