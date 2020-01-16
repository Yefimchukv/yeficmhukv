// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let hero = {
//         hp: 100,
//         dmg: 16,
//         speed: 1,
// };

// function isEmpty(hero) {
//     for (let key in hero) {
//         console.log( key, hero[key] );
//         return false;
//     }
//         return true;

// }

// console.log(isEmpty(hero));

//----------------------------------------------------------------

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function salSum(salaries) {
    
//     let sum = 0;

//     for (let key in salaries) {
//         ums += salaries[key];
//     }
//     console.log(sum);
// }

// salSum(salaries);

//----------------------------------------------------------------

// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

function menuMultiply(menu) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }

    console.log(menu);
}

menuMultiply(menu);





