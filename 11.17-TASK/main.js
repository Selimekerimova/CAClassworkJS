// ------------------------------------------------------- TASK 1 -------------------------------------------------------

// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
function reverse(x){
return x.split('').reverse().join('')
}
// console.log(reverse('64738'))

// ------------------------------------------------------- TASK 2 -------------------------------------------------------

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function str(str) {
  let result = str.split("").sort((a, b) => a.localeCompare(b)).join('');
  return result;
}
// console.log(str('webmaster'))

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '



