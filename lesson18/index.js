// function randomize(min, max) {
//   return Math.random()*(max-min)+min;
// };

// console.log(randomize(4,6));


// let title, width, height;

// ({title, width, height} = {title: "Menu", width: 200, height: 100});

// alert( title );

// const user = {
//   name: 'Ivan',
//   age: 22,
//   isAdmin: false,

//   sayHello: function() {
//     return "Hello ama " + this.name;
//   },

//   countOfFriends: null,

//   parents: {
//     ma: {
//       name: "Lida",
//       age: 88
//     },
//     pa: {
//       name: "Vasia",
//       age: 100,
//     }
//   }
// };

// let {
//   user: {
//     name,

//     ma: {
//       name,
//       age
//     },

//     pa: {
//       age
//     }
//   }

// }

// function a(a, b) {
//   console.log(a, b, arguments);
// }

// a(2312, 4324253, 4353545, 6, 7, 8, 6);

// let date = new Date(2012, 01, 20, 03, 12); 

// console.log(date);

// let date = new Date(2012, 0, 3).getDate();
// console.log(date);

// function getDayName (date) {
  
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[date.getDay()];
// }

// let date = new Date(2012, 0, 3);
// console.log(getDayName(date));

// function getDayName (date) {
  
//   let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
//   return days[date.getDay() - 1];
// }

// let date = new Date(2012, 0, 3);
// console.log(getDayName(date));

// let date = new Date();

// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }


// console.log( getDateAgo(date, 325) );
