// let hava = prompt("derece");
// if (hava >= 22) {
//   console.log("Nazik geyinin");
// } else if (hava >= 15) {
//   console.log("Pencek geyin");
// } else {
//   console.log("Qalin geyin");
// }

// Task 2
// let herf = prompt("Herf daxil edin");
// if(herf=='a'){
//     console.log('daxil edilen herf saitdir')
// }
// else if(herf=='i'){
//     console.log('herf saitdir')
// }
// else if(herf=='o'){
//     console.log('herf saitdir')
// }
// else if(herf=='u'){
//     console.log('herf saitdir')
// }
// else if(herf=='e'){
//     console.log('herf saitdir')
// }
// else{
//     console.log('herf samitdir')
// }

// Task 3
let a = 25;
let b = 52;
let c = 88;
if (a > b && a > c) {
  console.log(`${a} is greater`);
} else if (b > c && b > a) {
  console.log(`${b} is greater`);
} else if (c > a && c > b) {
  console.log(`${c} is greater`);
}

// Task 4
// let examScore = prompt("Balinizi daxil edin");
// if (examScore >= 90) {
//   console.log("A");
// } else if (examScore >= 80) {
//   console.log("B");
// } else if (examScore >= 70) {
//   console.log("C");
// } else if (examScore >= 60) {
//   console.log("D");
// } else {
//   console.log("Kesirin pulunu hazirla");
// }

// Task 5
let firstName = "Selime";
if (firstName.length < 5) {
  console.log(`salam ${firstName} adiniz qisadir`);
} else if (5 < firstName.length < 10) {
  console.log(`salam ${firstName} orta uzunluqda adiniz var`);
} else if (firstName.length > 10) {
  console.log(`salam ${firstName} Adiniz cox uzundur`);
}
