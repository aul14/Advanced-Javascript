// template literal
let nama = "Aulia Rahman";
let umur = 24;

console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun`);

// embeded expression
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

let mhs = {
  nama: "Aulia Rahman",
  umur: 24,
  nrp: "2017330037",
  email: "aulaja17@gmail.com",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
