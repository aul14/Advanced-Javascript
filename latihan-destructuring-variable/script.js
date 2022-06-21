// Destructuring

function kalkulasi(a, b) {
  return [a + b, a - b, a * b];
}

// const jumlah = penjumlahanPerkalian(5, 6)[0];
// const kali = penjumlahanPerkalian(5, 6)[1];
// console.log(kali);

const [tambah, kurang, kali, bagi = 0] = kalkulasi(5, 6);
console.log(bagi);
