let vm = {
  tigers: [
    {id: 1, name: 'xxx', age: 12, pride: 'xxx', gender: 'f'},
    {id: 2, name: 'xxx', age: 12, pride: 'xxx', gender: 'f'},
    {id: 3, name: 'xxx', age: 12, pride: 'xxx', gender: 'f'}
  ],
  prepareEntity: (id) => {
    let idx;
    let sought =  vm.tigers.find( (tiger, index) =>{
      if(parseInt(id) === tiger.id ) {
        idx = index;
        return tiger;
      }
    });
    return sought ? { tiger: sought, index: idx} : null;
  },
  list: () => {
    return Promise.resolve(vm.tigers);
  },
  single: ({body}) => {
    return Promise.resolve(body.tigerInfo.tiger);
  },
  create: ({body}) => {
    return Promise.resolve({id:4, name: body.name, age: body.age, pride: body.pride, gender: body.gender});
  },
  update: ({body}) => {
    let tiger = body.tigerInfo.tiger;
    tiger.name = body.name ;
    tiger.age = body.age;
    tiger.pride = body.pride;
    tiger.gender = body.gender;
    return Promise.resolve(tiger);
  },
  delete: ({body}) => {
    return Promise.resolve(body.tigerInfo.tiger);
  }
}

module.exports = vm;
