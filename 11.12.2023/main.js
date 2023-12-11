const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 6000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

//   #ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.
console.log(employees.filter((item) => item.salary > 20000));

//   #ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.
console.log(
  employees.filter((item) => item.salary > 10000 && item.department === "IT")
);

//   #sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
let arr = employees.filter((item) => item.department === "HR");

console.log(arr);

//   -------------------
//   TASK 2

//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//     city: "Ganja",
//     website: "code.edu.az",
//     languageInfo: {
//       eng: "Advance",
//       aze: "Fluenty",
//       rus: "Intermediate",
//     },
//   };

//   person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
//   personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
//   let {firstName,languageInfo:{eng},languageInfo:{rus},...otherInfo}=person;
//   console.log(firstName,eng,rus,otherInfo);

// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}

//   -------------------------

//   TASK 3

const person = {
  firstName: "Michael",
  lastName: "Pam",
  age: 26,
  city: "Poland",
};

// //   1. employees object-nin sadəcə key-lərini console-a çıxardın.
// console.log(Object.keys(person))
// // //   2. employees object-nin sadəcə value-lərini console-a çıxardın.
// console.log(Object.values(person));
// // //   3. Aşağıdakı kimi console-a çıxardın.
// console.log(Object.entries(person));

//       [firstName: 'Michael']
//       [lastName: 'Pam']
//       [age:26]
//       [city: 'Poland']
//   4. object-in age propertysini silin.
// delete person.age;
// console.log(person);
//   5. Ən uzun string value-nu console-a çıxardın.
let maxLength = Object.values(person)[0].length;
let maxLengthElem = Object.values(person)[0];
for (let i in person) {
  if (person[i].length > maxLength) {
    maxLength = person[i].length;
    maxLengthElem = person[i];
  }
}
console.log(maxLengthElem);
//   ------------------------------

//   TASK 4

const text = "Java is awesome. Java is fun.";

//   text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
//   ====>> JavaScript is awesome. Javascript is fun.
// console.log(text.replaceAll("Java", "Javascript"));

//   ---------------------

//   TASK 5

//   Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  let check =
    string === string.split("").reverse().join("")
      ? console.log("is polindrom")
      : console.log("not is polindrom");
  return check;
}

isPalindrome("hello");

//   ------------------

//   TASK 6
function longestWord(str){
 let arr= str.split(' ');
 let maxSimvol=arr[0].length;
 let maxSimvolElem=arr[0]
 arr.forEach((item)=>{
  if(item.length>maxSimvol){
    maxSimvol=item.length
    maxSimvolElem=item
  }
 })
 return maxSimvolElem
}
  console.log(longestWord("Hello word hi programmers"));

//   Ən uzun sözü tapın.  ======>> programmers

//   ------------------

//   TASK 7

  const persons = [
      { name: "Akif", age: 25 },
      { name: "Aysu", age: 32 },
      { name: "Ali", age: 35 }
  ];

//   find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
//   mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }
let firstPerson=persons.find((item)=>item.age>30)
console.log(firstPerson);

//   ------------------------------ part II

//   tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

let array = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
let max = array[0].length;
let maxElem = array[0];
array.forEach((item) => {
  if (item.length > max) {
    max = item.length;
    maxElem = item;
  }
});
// console.log(maxElem);
