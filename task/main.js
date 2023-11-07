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
const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];
let str=company.map((item)=>{
    return `${item.firstName} ${item.lastName} illik ${item.salary} maas alir ve ${item.yearsWorked} il calisir`
})
console.log(str)