// HTML Fregment
// const mhs = {
//     nama: 'Aulia Rahman',
//     umur: 24,
//     nrp: '2017330037',
//     email: 'aulaja17@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// Looping
// const mhs = [
//     {
//         nama: 'Aulia',
//         email: 'aulia@gmail.com'
//     },
//     {
//         nama: 'Rahman',
//         email: 'rahman@gmail.com'
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `
//     <ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>
//     `).join('')}
// </div>`;

//conditional
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Aul'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${(lagu.feat ? `feat. ${lagu.feat}` : '')}</li>
//     </ul>
// </div>`;

// Nested
// HTML fragments bersarang
const mhs = {
    nama: 'Aulia',
    semester: 5,
    mataKuliah: ['Rekayasa Web', 'Web Design', 'Dasar Pemrograman']
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(matkul => `<li>${matkul}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;