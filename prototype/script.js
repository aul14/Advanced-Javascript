// 1. object literal
// PROBLEM: tidak efektif untuk objek banyak
// let mahasiswa1 = {
//     nama: "Aulia Rahman",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: "Doddy",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// }

// 2. function declaration & object create

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Hallo ${this.nama}, selamat tidur`);
//     }

// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let aulia = Mahasiswa('Aulia', 10);
// let rahman = Mahasiswa('Rahman', 20);

//belajar prototype inheritence
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, selamat bermain`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi -= jam * 2;
//     return `Hallo ${this.nama}, selamat tidur`;
// }

// let aulia = new Mahasiswa('Aulia', 10);

//belajar versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Hallo ${this.nama}, selamat makan`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Hallo ${this.nama}, selamat bermain`;
//     }

//     tidur(jam) {
//         this.energi -= jam * 2;
//         return `Hallo ${this.nama}, selamat tidur`;
//     }
// }

// let aulia = new Mahasiswa('Aulia', 10);
// let rahman = new Mahasiswa('Rahman', 20);

// let angka = [3, 5, 2, 4, 1];
// console.log(angka.sort());

// 3. Constructor function
//keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     }
// }

// let aulia = new Mahasiswa('Aulia', 10);