// function printFullName(firstName = "lorem", lastName = "ipsum") {
//   console.log(`I am ${firstName} ${lastName}`);
// }
// printFullName("Selime", "Kerimova");
// printFullName();

//TASK2
// function number(num1,num2){
//     let sum=num1+num2;
//     return sum;
// }
// console.log(number(2,3))

// function number(num1,num2){
//     let  multiply=num1*num2;
//     return multiply;
// }
// console.log(number(2,3))
// function number(num1,num2){
//     let subtruct=num1-num2;
//     return subtruct;
// }
// console.log(number(2,3))
// function number(num1,num2){
//     let divide=num1/num2;
//     return divide;
// }
// console.log(number(2,3))

//Task 3
// function calculator(num1, num2, operator) {
//     let result;
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   }
//   else if (operator === "-") {
//     result = num1 - num2;

//   } else if (operator === "/") {
//     result = num1 / num2;
//   }
// else{
//     result='bele bir emeliyyat movcud deyil'
// }
//   return result;
// }
// console.log(calculator(2,3,'a'))

//Task 4
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];
// function filterEmployess(array){
//     let  emptyArray=[];
//    for(let i=0;i<array.length;i++){
//     if(array[i].salary>60000){
//         emptyArray.push(array[i])
//     }
//    }
//    return emptyArray;
// }
// console.log(filterEmployess(employees))

//Task 5

// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("Hello"));

//Task 6

let str = "Lorem Ipsum is simply dummy ,text of the ! printing and type  ";
function count(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " " && text[i] != "," && text[i] != "!") {
      count = count + 1;
    }
  }
  return count;
}
console.log(count(str));




