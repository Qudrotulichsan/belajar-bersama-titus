// exercise3


// var nama = 'Zero';
// var peran = 'Penyihir';


// if(nama == ''){
//     console.log('Nama harus diisi!')
// } else if (nama == 'Mikael'){
//     console.log('Halo Mikael, Pilih peranmu untuk memulai game!')
// } else if (nama == 'Nina' && peran == 'Kesatria'){
//     console.log('Selamat datang di dunia proxytia, Nina')
//     console.log ('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')
// } else if (nama == 'Danu' && peran == 'Tabib'){
//     console.log('Selamat datang di Dunia Proxytia, Danu')
//     console.log ('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')
// } else if (nama == 'Zero' && peran == 'Penyihir'){
//     console.log('Selamat datang di Dunia Proxytia, Zero')
//     console.log ('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!')
// } else {
//     console.log('Periksa nama dan peran bang sesuai soal! tong rupa rupa')
// }


// exercise4

// var tanggal =21;
// var bulan =1;
// var tahun =1945;

// switch(tanggal) {
//   case 21:   { console.log('21'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }
// }
// switch(bulan) {
//     case 1:   { console.log('Januari '); break; }
//     default:  { console.log('Tidak terjadi apa-apa'); }
//   }
//   switch(tahun) {
//     case 1945:   { console.log('1945'); break; }
//     default:  { console.log('Tidak terjadi apa-apa'); }
//   }


//exercise 5

// 1. lets form a sentence

// var word = 'JavaScript';
// var second = 'is';
// var third = 'awesome';
// var fourth = 'and';
// var fifth = 'I';
// var sixth = 'love';
// var seventh = 'it!';

// console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);

// 2. index acesing -1 by 1

// var word = 'wow JavaScript is so cool';
// var exampleFirstWord = word[0] + word[1] + word[2];
// var secondWord =  word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
// var thirdWord = word[15] + word[16];
// var fourthWord = word[18] + word[19];
// var fifthWord = word[21] + word[22] + word[23] + word[24];

// console.log('First Word: ' + exampleFirstWord);
// console.log('Second Word: ' + secondWord);
// console.log('Third Word: ' + thirdWord);
// console.log('Fourth Word: ' + fourthWord);
// console.log('Fifth Word: ' + fifthWord);

// 3.  Breaking Sentence (Again) using Substring

// var word3 = 'wow JavaScript is so cool';
// var exampleFirstWord3 = word3.substring(0, 3);
// var secondWord3= word3.substring(4, 14);
// var thirdWord3 = word3.substring(15, 17);
// var fourthWord3 = word3.substring(18, 20);
// var fifthWord3 = word3.substring(21, 25);

// console.log('First Word: ' + exampleFirstWord3);
// console.log('Second Word: ' + secondWord3);
// console.log('Third Word: ' + thirdWord3);
// console.log('Fourth Word: ' + fourthWord3);
// console.log('Fifth Word: ' + fifthWord3);


// 4. Breaking Sentence (yet Again) and Count Each Length

// var word4 = 'wow JavaScript is so cool';
// var exampleFirstWord4 = word4.substring(0, 3);
// var secondWord4= word4.substring(4, 14);
// var thirdWord4 = word4.substring(15, 17);
// var fourthWord4 = word4.substring(18, 20);
// var fifthWord4 = word4.substring(21, 25);

// var firstWordLength = exampleFirstWord4.length;
// var secondWordLength = secondWord4.length;
// var thirdWordLength = thirdWord4.length;
// var fourthWordLength = fourthWord4.length;
// var fifthWordLength = fifthWord4.length;


// console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
// console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
// console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
// console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
// console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);


// exercise6

// 1. Melakukan Looping Menggunakan While

// looping pertama

// var angka = 2;
// var mod = 2;

// while(angka <= 20) {
//     console.log(angka + ' ' + 'I Love coding'); 
//         angka+=mod;

//   }

// // Looping keduax

// var angka =  20;
// var mod = 2;

// while (angka >=1){
//     console.log(angka + ' ' + 'I will become fullstack developer')
//     angka-=2;
// }

// 2. Melakukan Looping Menggunakan For

// looping pertama
// for (let angka=1; angka <= 20 ; angka++){
//     console.log(angka +' - I love Coding' )
// }

// // loopung kedua
// for (let angka=20; angka >= 1 ; angka--){
//     console.log(angka +' - I will become fullstack developer' )
// }

// 3. Angka Ganjil dan Genap

// perulangnannya 1 -10 deh ya jangan 100 teuing

// 1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// 2. Di dalam perulangan, periksa setiap angka counter:
// - Apabila angka counter adalah angka genap, tuliskan GENAP
// - Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// for(let angka=1; angka <= 10; angka++){
//     if (angka%2){
//         console.log('Ganjil')
//     } else {
//         console.log('Genap')
//     }

// }

// 3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.

// Kelipatan 3

// for(let angka=1; angka <= 100; angka++){
//         if (angka%3){
//             console.log(' ')
//         } else {
//             console.log(angka + ' Kelipatan 3')
//         }
    
//     }

// Kelipatan 6

// for(let angka=1; angka <= 100; angka++){
//     if (angka%6){
//         console.log(' ')
//     } else {
//         console.log(angka + ' Kelipatan 6')
//     }

// }

// Kelipatan 10

// for(let angka=1; angka <= 100; angka++){
//     if (angka%10){
//         console.log(' ')
//     } else {
//         console.log(angka + ' Kelipatan 10')
//     }

// }


// Exercise7

// 1. Menyusun Barisan Bintang
// var bintang = '*';

// for(let i=1; i <= 5; i++){
//     console.log(bintang)
// }

// 2. Menyusun Barisan Bintang Dengan Nested Looping

// var tampung = '';

// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= 5; j++){
//         tampung += "*";
//     }
//     tampung += "\n";
// }
// console.log(tampung);

// var tampung = '';

// for(i=1; i <=5; i++){
//     for(j = 1; j <= 5; j++){
        
//     }
//     tampung += '*';
//     console.log(tampung);
// }



// exercise 9

// Tugas 1
// function shoutOut() {
//     console.log("Halo Function!");
//   }
//   console.log(shoutOut());

// Tugas 2
// var num1 = 5;
// var num2 = 6;

// function calculateMultiply(){
//     return num1 * num2
// }
// var hasilPerkalian = calculateMultiply(num1,num2);
// console.log(hasilPerkalian);

// Tugas3
// var name = "Agus";
// var age = 30;
// var address = "Jln. Malioboro, Yogjakarta";
// var hobby = "gaming";

// function processSentence(){
//     return  `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
// }

// var fullSentence = processSentence(name,age,address,hobby);
// console.log(fullSentence);



// exercise 10
// function bandingkanAngka(angka1, angka2) {
//     if(angka1 < angka2){
//         console.log("true");
//     } else if(angka1 > angka2 ) {
//         console.log('false')
//     } else {
//         console.log ('-1')
//     }
//   }
  
//   // TEST CASES
//   console.log(bandingkanAngka(5, 8)); // true
//   console.log(bandingkanAngka(5, 3)); // false
//   console.log(bandingkanAngka(4, 4)); // -1
//   console.log(bandingkanAngka(3, 3)); // -1
//   console.log(bandingkanAngka(17, 2)); // false
  

// exercise 11

// function balikKata(kata) {
//     let tampung = '';

//     for(let i=kata.length-1; i >= 0; i--){
//         tampung += kata[i];
//     }
//     return tampung
//   }
  
//   // TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
 

// exercise 2 w3

// Mengakses Nilai Dalam Array

// function balikString(kata) {
//     let tampung= '';

//     for(let i=kata.length-1; i>=0; i--){
//         tampung += kata[i];
//     }
//     return tampung 
// }

// console.log(balikString('Hello World'));

// exercise 3 w3

// Melakukan Looping Data Array

// function dataHandling(arr) {
//     for(i=0; i < arr.length; i++){
//     let object = {
//         NomorID: arr[i][0],
//         NamaLengkap: arr[i][1],
//         TTL: arr[i][2] + ', ' + arr[i][3],
//         Hobi: arr[i][4]
//                     }
//         console.log(object)
//     }
// }
        
// var arr = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ]

// console.log(dataHandling(arr));
//cek













// SAMPINGAN

// let a = 0
// let b = 10

// while (a < 10){
//     a++;
// if (a %3 == 0){
//     console.log(a + ' - Bilangan Kelipatan 3');
// } else if (a %2 == 0){
//     console.log(a + ' - Bilangan Genap')
// } else{
//     console.log(a + ' - Bilangan Ganjil')
// }
// }


// for(let i=1; i <= 10; i++){
//    if (i %3 == 0  ){
//     console.log(i + ' - Kelipatan 3')
   
//     } else if (i %2 == 0){
//         console.log(i + ' - Genap')
//     } else {
//         console.log(i + " - Ganjil");
//     }
// }



// TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
//   console.log(balikKata('John Doe')); // eoD nhoJ
//   console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
//   console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//   console.log(balikKata('Super')); // repuS