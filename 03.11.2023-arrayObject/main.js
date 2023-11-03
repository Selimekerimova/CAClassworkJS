const number = [12, 45, 6, 78, 34, 99, 23];
// let max = number[0];
// let min = number[0];
// for (let i = 0; i < number.length; i++) {
//   if (max < number[i]) {
//     max = number[i];
//   }
// }
// for (let i = 0; i < number.length; i++) {
//   if (min > number[i]) {
//     min = number[i];
//   }
// }
// console.log(min);
// console.log(max);

// TASK2
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// console.log(sum);

// TASK3;
// const elements = [1, 2, 3, 4, 5];
// console.log(`First element ${elements}`);
// let temp = elements[2];
// elements[2] = elements[3];
// elements[3] = temp;
// console.log(`New element ${elements}`);

// TASK4
const numbers = [12, -5, 6, -3, 34, -1, 23];
let pozitivNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    pozitivNumbers.push( numbers[i]);
}
}
console.log(`Musbet ededler ${pozitivNumbers}`);

// TASK5
