//function expression

// const tampilNama = function (nama) {
//     return `Hallo, ${nama}`;
// }

// console.log(tampilNama('Aulia'));

//Arrow function

// const tampilNama = (nama) => {
//     return `Hallo, ${nama}`;
// }
// console.log(tampilNama('Rahman'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('Rahman', 'Pagi'));

//implisit return
// const tampilNama = nama => `Hallo, ${nama}`;

// console.log(tampilNama('Rahman'));

// const tampilNama = () => `Hallo word`;

// console.log(tampilNama());

// let mahasiswa = ['aulia rahman', 'rahman', 'shilki dini'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })

// console.log(jumlahHuruf);
// let mahasiswa = ['aulia rahman', 'rahman', 'shilki dini'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length) ;

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf:nama.length }));
// console.table(jumlahHuruf);

//konsep this pada  Arrow Function

//Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Aulia';
//     this.umur = 24
//     this.sayHallo = function () {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun`);
//     }
// }

// const aulia = new Mahasiswa();




//Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Aulia';
//     this.umur = 24
//     this.sayHallo = () => {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun`);
//     }
// }

// const aulia = new Mahasiswa();

// Object literal
// const mhs1 = {
//     nama: 'Aulia',
//     umur: 24,
//     sayHallo: () => {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun`);
//     }
// }



// const Mahasiswa = function () {
//     this.nama = 'Aulia';
//     this.umur = 24
//     this.sayHallo = function () {
//         console.log(`Hallo nama saya ${this.nama}, dan saya umur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//     console.log(this.umur++);       
//     }, 500)
// }

// const aulia = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});