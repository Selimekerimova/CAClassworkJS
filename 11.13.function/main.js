// function findFirstNotRepeatedChar(string){
//     let newStr='';
//     for(let i=0;i<string.length;i++){
//         string.indexOf(string[i])===string.lastIndexOf(string[i])?(newStr+=string[i]):null;
//     }
//     return newStr[0]
// }
// console.log(findFirstNotRepeatedChar('abacddbecz'))



// console.log(charCount('w3rescource.com', 'c'));
// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.
// Nəticə: 3

let count=0;
function charCount(a,b){
    for(let i=0;i<a.length;i++){
        if((a[i])===b){
            count+=1;
        }
    }
    return count
}
 console.log(charCount('w3rescource.com', 'c'))


//  makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
//  Məsələn =====>> 4SGqCfrz

function makeId(num){

}
 
 console.log(makeId(8))
// let arr1=[1, 0, 2, 3, 4];
// let arr2=[3, 5, 6, 7, 8];

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));
// Nəticə: =====>> [4, 5, 8, 10, 12]

// for(let i=0;i<arr1.length;i++){
//     for(let i=0;i<arr1.length;i++){

//     }
// }