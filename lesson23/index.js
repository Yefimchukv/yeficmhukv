// const user = {
//   isOnline: false,
//   name: "Petya",
// };

// const admin = {
//   isAdmin: true,
//   __proto__: user,
// };

// const guest = {
//   isAdmin: false,
//   __proto__: user,
// };

// console.log(admin);


// let head = {
//   glasses: 1,
//   __proto__ = pockets
// };

// let table = {
//   pen: 3,
//   __proto__ = head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__ = table,
// };

// let pockets = {
//   money: 2000
// };

// console.log(pockets);

const user = {
  isOnline: false,
  name: "Petya",

  sayHello () {
    console.log("Hello " + this.name);
  }
};

const admin = {
  isAdmin: true,
  name: "Vitalya",
  __proto__: user,
};

const guest = {
  isAdmin: false,
  __proto__: user,
};

const adminSayHello = user.sayHello.bind(admin);

adminSayHello();

Function.prototype.bind1 = function(context, ...args) {
  const _self = this;
  return function () {
    return _self.call(context, ...args);
  };
};

const adminSayHello2 = user.sayHello.bind1(admin);

adminSayHello2();

