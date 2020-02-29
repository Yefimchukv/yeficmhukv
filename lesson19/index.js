// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 3));

// console.log(5);
// console.log(6);


// function sumValues (list) {
//   if (list.next === null) {
//       return list.value;
//   } else {
//     let sum = list.value;
//     sum += sumValues(list.next);
//     return sum;
//   }
// }

// let list1 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// console.log(sumValues(list1));


// function sumTo(number) {
//   if (number === 1) {
//     return number;
//   } else {
//     let sum = number;
//     sum += sumTo(number - 1);
//     return sum;
//   }
// }

// console.log(sumTo(5));

// function sumTo(number) {
//   if (number === 1) {
//     return number;
//   } else {
//     let sum = number;
//     sum *= sumTo(number - 1);
//     return sum;
//   }
// }

// console.log(sumTo(600));

function sumTo(number) {
  if (number <= 1 ) {
    return number;
  } else {
    let sum = 0;
    sum += sumTo(number-1) + sumTo(number-2);
    return sum;
  }
}

console.log(sumTo(77));


