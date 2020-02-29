// function f(x) {
//     console.log(x);
//     return x;
//     }
    

//     function delay(f, ms) {

//         return function(...args) {
//                 setTimeout(() => f.apply(this, arguments), ms);
//         }

//     }


//     let f1000 = delay(f, 1000);
//     let f3000 = delay(f, 3000);


    
//     f1000("test");
//     f3000("test");


function debounce(f, ms) {

    let isCooldown = false;

    return function() {
        if (isCooldown) {
            return;
        }

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    }
}



f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100); 
setTimeout( () => f(4), 1100); 
setTimeout( () => f(5), 1500); 
setTimeout( () => f(6), 2101); 
setTimeout( () => f(7), 2200);
setTimeout( () => f(9), 4000); 
setTimeout( () => f(8), 3500);
setTimeout( () => f(10), 1100);
setTimeout( () => f(11), 1500);
setTimeout( () => f(12), 100); 
setTimeout( () => f(13), 1100);
setTimeout( () => f(14), 1500);

