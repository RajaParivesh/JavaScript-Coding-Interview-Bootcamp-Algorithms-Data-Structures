// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
  //Method 1 - self
//
//   var revStr ="";
//   for (var i = str.length; i>0; i--) {
//     revStr += str.charAt(i-1)
//   }
// return revStr;

  // Method 2 - from  tutorial

// return  str.split('').reverse().join('');

// Method 3 - from  tutorial
function reverse(str) {
var revStr ="";
debugger;
console.log(str.split('').reduce((first, second)=>{
    return revStr =  second +  first;
  }));
}

reverse("abc def")
module.exports = reverse;
