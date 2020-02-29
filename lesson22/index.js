// // // сделаем worker.slow кеширующим
// // let worker = {
// //   someMethod() {
// //     return 1;
// //   },

// //   slow(x) {
// //     // здесь может быть страшно тяжёлая задача для процессора
// //     console.log("Called with " + x);
// //     return x * this.someMethod(); // (*)
// //   }
// // };

// // // тот же код, что и выше
// // function cachingDecorator(func) {
// //   let cache = new Map();
// //   return function(x) {
// //     if (cache.has(x)) {
// //       return cache.get(x);
// //     }
// //     let result = func.call(this, x); // (**)
// //     cache.set(x, result);
// //     return result;
// //   };
// // }

// // console.log( worker.slow(1) ); // оригинальный метод работает

// // worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// // console.log( worker.slow(2) ); // Ой! Ошибка: 

// function work(a, b) {
//   alert( a + b );
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function f() {
  alert( this ); // null
}

let user = {
  g: f.bind(null)
};

user.g();