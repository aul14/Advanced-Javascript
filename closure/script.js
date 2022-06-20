// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// creation phase pada GLOBAL CONTEXT
// nama var = undefined
// nama function = fn()
// Hoisting

//execution phase
// console.log(sayHello());

// var nama = 'Aulia';
// var umur = 24;

// function sayHello() {
//     return `Hallo nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local execution context.
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Aulia Rahman';
// var username = '@rahman_au';

// function cetakURL() {
//     console.log(arguments[0]);
//     var instagramURL = 'https://instagram.com/';

//     return instagramURL += username;
// }

// console.log(cetakURL('@doddy'));

// function a() {
//     console.log(`ini a`);

//     function b() {
//         console.log(`ini b`);

//         function c() {
//             console.log(`ini c`);
//         }
//         c();
//     }
//     b();
// }
// a();

// function init() {
//     // let nama = 'Aulia';
//     return  function tampilNama(nama) {
//         console.log(nama);
//     }
  
// }
// let panggilNama = init();
// panggilNama('Rahman');
// panggilNama('Aulia');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga hari mu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam(`pagi`);
// let selamatSiang = ucapkanSalam(`siang`);
// let selamatMalam = ucapkanSalam(`malam`);

// selamatPagi(`Aulia`);
// selamatMalam(`Rahman`);

// console.dir(selamatMalam);


let add = (function() {
    let counter = 0;
    return function () {
       return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());