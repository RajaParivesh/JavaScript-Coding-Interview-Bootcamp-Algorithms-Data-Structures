// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//  Method 1

// function anagrams(stringA, stringB) {
//   arr1= stringA.replace(/[^\w]/g,'').toLowerCase().split('');
//   arr2= stringB.replace(/[^\w]/g,'').toLowerCase().split('');
//   obj1 ={};
//   obj2 ={};
//   for(let e1 of arr1){
//     if(!obj1[e1]) obj1[e1]=1;
//     else obj1[e1]++;
//   }
//   for(let e2 of arr2){
//     if(!obj2[e2]) obj2[e2]=1;
//     else obj2[e2]++;
//   }
//
//   var flag = true;
//   if(Object.keys(obj1).length!=Object.keys(obj2).length){
//     flag = false;
//   }
//   for(let e1 of arr1){
//     if(obj1[e1]!=obj2[e1]){
//       flag = false;
//     }
//   }
//
//   if(flag){
//     console.log("true");
//   }else{
//     console.log("false");
//   }
//
//   // console.log(Object.keys(obj1));   //  IMP
//   // console.log(Object.values(obj1));    // IMP
//   // console.log(obj1);
//   // console.log(obj2);
// }
//
// anagrams('RAIL! SAFETY!', 'fairy tales');
// module.exports = anagrams;


// Method 2

function anagrams(stringA, stringB) {
  strA = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  strB = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  if(strA==strB) console.log(true);
  else console.log(false);
  // console.log(strA);
  // console.log(strB);
}

anagrams('RAjaa', 'ajar');
module.exports = anagrams;
