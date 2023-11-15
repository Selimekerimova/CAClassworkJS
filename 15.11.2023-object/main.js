// let obj = {
//   firstName: "Selime",
//   lastName: "Kerimova",
//   age: "21",
//   skills: ["HTML", "CSS", "JavaScript", "React"],
//   uni: "GDU",
// };
// obj["city"] = "Goranboy";
// obj["phone number"] = 11223344;
// console.log(obj);

// console.log(Object.keys(obj))

// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jimiuhiuhikj",
//   accountant: "Oscar",
// };
// console.log(Object.values(employees))
// console.log(Object.entries(employees))
// let arr = Object.values(employees);
// let result=arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(result.length<arr[i].length){
//         result=arr[i];
//     }
// }
// console.log(result);

// delete obj.age
// console.log(obj)

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

let check =library.forEach((item) => {
  item.readingStatus === true
    ? console.log(`Already read ${item.title} ${item.author}`)
    : console.log(`You still need to read ${item.title} by ${item.author}`);
});
console.log(check)