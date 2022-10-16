// let angka = parseInt(prompt('masukkan angka :'));

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//     break;
//     case 2:
//         alert('anda memasukkan angka 2');
//     break;
//     case 3:
//         alert('anda memasukkan angka 3');
//     break;
//     case 4:
//         alert('anda memasukkan angka bilangan genap');
//     break;
//     case 5:
//         alert('anda memasukkan angka bilangan ganjil');
//     break;
//     default:
//         alert('anda memasukkan angka yang salah');
// }

// ini kalo tanpa break,(bsa dimanfaatkan seperti ini)
let angka = parseInt(prompt('masukkan angka :'));

switch (angka) {
    case 1:
        alert('anda memasukkan angka 1');
    case 2:
        alert('anda memasukkan angka 2');
    case 3:
        alert('anda memasukkan angka 3');
    break;
    case 4:
        alert('anda memasukkan angka bilangan genap');
    break;
    case 5:
        alert('anda memasukkan angka bilangan ganjil');
    break;
    default:
        alert('anda memasukkan angka yang salah');
}