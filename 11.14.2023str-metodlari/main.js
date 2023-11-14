// let text = "Java is awesome. Java is fun.";
// console.log(text.replace('Java', 'Javascript'))


//____________________________________
//mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

// function mixUp(a, b) {
//     return b.slice(0,2)+a.slice(2)+' '+  a.slice(0,2)+b.slice(2);

// }
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

//_________________________________
// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin

// function verbing(word) {
// if(word.length<3){
//     return word
// }
// if(word.endsWith('ing')){
//     return word + 'ly'
// }
// else {
//     return word + 'ing'
// }
// }

// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingl

// -------------------------------------------- TASK 4 --------------------------------------------
// Sözün palindrom olub olmadığını yoxlayın.
// function isPalindrome(string) {
// if(string===string.split('').reverse().join('')){
// return ` palindrondur `
// }
// else{
//     return ` palindron deyil`
// }
// }
// console.log(isPalindrome("radar"))

// -------------------------------------------- TASK 5 --------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, len) {
    return   arr.slice(len);

}



console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]