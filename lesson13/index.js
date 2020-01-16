// let a = 5;
// let b = 5;

// console.log(a);
// console.log(b);

// a = 60;

// console.log(a);
// console.log(b);


// let obj1 = {
//   name: "Ivan",

// }

// let obj2 = obj1;

// console.log(obj1);

// console.log(obj2);

// obj1.name = "Petya";

// console.log(obj1);

// console.log(obj2);

let user1 = {
  name: "Ivan",
  lastName: "Cock",
}


let user2 = {
};

for (let key in user1) {
user2[key] = user1[key];
    
}


console.log(user1);

console.log(user2);