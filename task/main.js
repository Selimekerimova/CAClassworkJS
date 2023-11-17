//TASK1
// const number =[1,2,3,4,5,6,7,8];
// let num=number.filter((item,i)=>{
//  return item%2===1;
// })
// console.log(num)
// part2
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let num2=array.filter((item,i)=>{
// return 0<item && item<11
// })
// console.log(num2)

//TASK2
// const users = [
//     {
//       first_name: 'Mike',
//       last_name: 'Sheridan'
//     },
//     {
//       first_name: 'Tim',
//       last_name: 'Lee'
//     },
//     {
//       first_name: 'John',
//       last_name: 'Carte'
//     }
//   ];

//   const userName= users.map((item,i)=>{
// return  item.first_name+' '+item.last_name
//   })
//   console.log(userName)

//task3
//part1
// const persons = [
//   { name: "Akif", age: 25 },
//   { name: "Aysu", age: 32 },
//   { name: "Ali", age: 35 },
// ];
// let firstPerson = persons.find((item, i) => {
//   console.log("index:", i);
//   return item.age > 30;
// });
// console.log(firstPerson);


//task4
// const array1 = [1, 4, 9, 16];
// let newArray=array1.map((item,i)=>{
// return item**2
// })
// console.log(newArray)

//Task 5
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
// console.log(animals.slice(2,5))
// console.log(animals.slice(2,4))
// console.log(animals.slice(1,5))
// console.log(animals.slice(3,5))
// console.log(animals.slice())

//TASK6
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// months.splice(4,1,'May')
// console.log(months);


//TASK7
// const company = [
//   { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
//   { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
//   { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
//   { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
// ];
// let str=company.map((item)=>{
//     return `${item.firstName} ${item.lastName} illik ${item.salary} maas alir ve ${item.yearsWorked} il calisir`
// })
// console.log(str)



////////
// Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let array = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// let max=array[0].length;
// let maxIndex=0;
// function maxLength(arr){
//   arr.forEach((element,i) => {
//     if(element.length>max){
//       max=element
//       maxIndex=element[i]
//     }
//   });
//   return max
// }
// console.log(maxLength(array))


////////
const products = [
  { name: "one Product 1", price: 20, category: "Electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

//only price more tha 50 objects
// console.log(products.filter((item) => {
//  return item.price>50?item:null
// }));



//50 dən böyük və catagory elektroniks olanlar
// console.log(
//   products.filter((item) => item.price > 50 && item.category.toLocaleLowerCase() === 'electronics' ? item : null)
// );


// 50 dən böyük və catagory "c" ilə başlayan
// console.log(products.filter((item) => item.price > 50 && item.category.startsWith('C') ? item : null))


////////////////////
//Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "APPLE",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(
companies.filter((item,i)=>item===item.toLocaleUpperCase()?item:null)
)
// 3. APPLE
// 4.IBM