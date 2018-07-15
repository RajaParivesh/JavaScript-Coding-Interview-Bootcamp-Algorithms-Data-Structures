// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Method 1
// function reverseInt(n) {
//   var str= n.toString();
//   var revInt= parseInt(str.split('').reverse().join(''));
//   if (n>0){
//     console.log(revInt);
//   }else{
//     console.log(-1*revInt);
//   }
//   // console.log(typeof(revInt));
// }
// reverseInt(-90);

// Method 2
function reverseInt(n) {
  var str= n.toString();
  var revInt= parseInt(str.split('').reverse().join(''));
  console.log((revInt)*Math.sign(n));   // Here Math.sign will return the sign of integer n
  // console.log(typeof(revInt));
}
reverseInt(-958);




module.exports = reverseInt;
