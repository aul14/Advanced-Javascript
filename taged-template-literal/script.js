//Taged Templates
// const nama = 'Aulia Rahman';
// const umur = 24;

// function coba(strings, ...values) {
//     // cara 1
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // cara 2
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = coba `Hallo, nama saya ${nama}, saya ${umur} tahun`;

// console.log(str);

// Highlight
const nama = 'Aulia Rahman';
const umur = 24;
const email = 'aulaja17@gmail.com';

function highlight(strings, ...values) {
    // cara 1
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    // cara 2
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl">${values[i] || ''}</span> `, '');
}
const str = highlight `Hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}`;

document.body.innerHTML = str;