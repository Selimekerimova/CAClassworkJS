// for(let i=1; i<100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Task 2
// let str='Selime';
// let strLength=str.length;
// for(let i=0;i<strLength;i++){
//     console.log(str[i])
// }

// Task 3
// for(let i=0; i<99;i++){
//     if(i%10==7){
//         console.log(i)
//     }
// }

// Task 4
// let country='Azerbaycan';
// for(let i=0;i<country.length;i++){
//     if([i]==3)
//     break;
//     console.log(country[i]);
// }

// Task 5,3,5&3 bolunenler
// for(let i=0;i<=45;i++){
//     if(i%3==0){
//         console.log(`Fizz ${i}`)
//     }
//      if(i%5==0){
//         console.log(`Buzz ${i}`)
//     }
//      if(i%15==0){
//         console.log(` Fizz & Buzz ${i}`)
//     }

// }

// TASK ededin butun bolenleri
// let number=30;
// for(let i=0;i<30;i++){
//     if(number%i==0){
//         console.log(i);
//     }
// }

// TASK 4
// for(let i=1;i<100;i++){
//     if(i%11==0){
//         console.log(i)
//     }
// }

let number = 6;
let vurma = 1;
for (let i = 1; i <= number; i++) {
  vurma *= i;
}
console.log(`faktorial ${vurma}`);
