const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >= 3
// menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//        newAngka.push(angka[i]);
//     }   
// }
// console.log(newAngka);

//menggunakan filter 1
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
// console.log(newAngka);

// menggunakan filter 2
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// menggunakan map, kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// menggunakan reduce, jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// Method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
                    .map(a => a * 3)
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(hasil);
