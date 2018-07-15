// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Method 1
// function vowels(str) {
//   var arr = str.toLowerCase().split('');
//   var obj = {}
//   for (let element of arr){
//       if(!obj[element]) obj[element]=1;
//       else obj[element]++;
//   }
//   var sum=0;
//   if(obj['a']){
//     sum+=obj['a'];
//   }
//   if(obj['e']){
//     sum+=obj['e'];
//   }
//   if(obj['i']){
//     sum+=obj['i'];
//   }
//   if(obj['o']){
//     sum+=obj['o'];
//   }
//   if(obj['u']){
//     sum+=obj['u'];
//   }
//     console.log(sum);
//     return sum;
// }
// vowels('Why do you ask?');
//
// module.exports = vowels;

// //Method 2
// function vowels(str) {
//   var count = 0;
//   const checker = ['a','e','i','o','u']
//   for(let char of str.toLowerCase()){
//     if(checker.includes(char)) count++;
//   }
//   console.log(count);
//   return count;
// }
// vowels('Why do you ask?');
//
// module.exports = vowels;



//Method 3  // Using regular expression
function vowels(str) {
  var matches = str.match(/[aeiou]/gi);
  var count = matches ? matches.length : 0
  console.log(count);
  return count;
}
vowels('Why do you ask?');

module.exports = vowels;
