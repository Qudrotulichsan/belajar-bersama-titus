// w4 exercise 1

// function angkaPrima(angka) {

// let pembagi = 0;

// for (let i = -1; i <= angka; i++) {
//     if(angka %i == 0) {
//         pembagi++
//         // console.log(pembagi);
//     }
// }
// if (pembagi == 2){
//     return ('- true')
// } else {
//     return ('- false');
// }

// }
//   // TEST CASES
//   console.log(angkaPrima(3)); // true
//   console.log(angkaPrima(7)); // true
//   console.log(angkaPrima(6)); // false
//   console.log(angkaPrima(23)); // true
//   console.log(angkaPrima(33)); // false

// w4 exercise 2

function fpb(angka1, angka2) {
    let fpb =0;

    for(let i=0; i <= angka1 && i <= angka2; i++){       
        if (angka1 %i == 0 && angka2 %i ==0){
            fpb = i;
        }
    }
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1 