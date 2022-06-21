// destructuring variable / Assignment

// destructuring array
// const perkenalan = ["Halo", "nama", "saya", "aul"];
// const [salam,satu,dua,nama] = perkenalan;

//skip items
// const [salam, , ,nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring object
// const mhs = {
//   nama: "Aulia Rahman",
//   umur: 24,
// };

// const { nama, umur } = mhs;
// console.log(nama);

//Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Aulia Rahman", umur: 24 });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: "Aulia Rahman",
//   umur: 24,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//   nama: "Aulia Rahman",
//   umur: 24,
//   email: "aulaja17@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// Memberikan nilai default & assign ke variable baru
// const mhs = {
//   nama: "Aulia Rahman",
//   umur: 24,
//   email: "aulaja17@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// const mhs = {
//   nama: "Aulia Rahman",
//   umur: 24,
//   email: "aulaja17@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Aulia Rahman",
  umur: 24,
  email: "aulaja17@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
