// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// maxchar("aaabbbccd") === "a and b"   // self created   // Not solved
// Method1  (Important concept)
"use strict"

// Method 1
// function maxChar(str) {
//   var arr = str.split('');
//   var obj= {}
//   var max = 0;
//   var maxChar ="";
//   for(var i = 0; i<arr.length; i++){
//     if(!obj[arr[i]]) obj[arr[i]]=1;
//     else obj[arr[i]]++;
//     if(obj[arr[i]]<obj[arr[max]]){
//       max = obj[arr[max]];
//       maxChar = arr[max];
//     }
//     //----------------------------
//     // Below case is not working
//     //----------------------------
//     // else if(obj[arr[i]]==obj[arr[max]]){
//     //   max = obj[arr[max]];
//     //   maxChar = arr[max] +","+ arr[i] ;
//     // }
//     else{
//       max = obj[arr[i]];
//       maxChar = arr[i];
//     }
//   }
//   console.log("max: "+ max)
//   console.log("maxChar: "+ maxChar)
//   console.log(obj)
//
// }
// maxChar('appleeeee 1222222222231111');

// Method 2
function maxChar(str) {
  var arr = str.split('');
  var obj= {}
  var max = 0;
  var maxChar ="";
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i]]) obj[arr[i]]=1;
    else obj[arr[i]]++;
  }
  for(let element in obj){
    console.log(element +", Element Value: "+obj[element]);

    if(obj[element] > max){
      max = obj[element];
      maxChar = element;
    }else if(obj[element] == max){
      max = obj[element];
    }
  }
  console.log("max: "+ max)
  console.log("maxChar: "+ maxChar)

}
maxChar('appleeeee 122231');
module.exports = maxChar;
