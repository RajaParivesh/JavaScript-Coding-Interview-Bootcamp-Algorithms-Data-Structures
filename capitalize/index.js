// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Method 1  //self attepted // working   // all the below methods are working
// function capitalize(str) {
//
//   var arr1 = str.split(' ');
//   var arr2 =[];
//   // console.log(str);
//
//   for(let element of arr1){
//     arr2.push(element.replace(element.charAt(0),element.charAt(0).toUpperCase()));
//   }
//   var str2 = arr2.join(' ');
//   console.log(str2)
// }
// capitalize('a short sentence');
// module.exports = capitalize;

// Method 2
// function capitalize(str) {
//
//   var arr1 = str.split(' ');
//   var arr2 =[];
//
//   for(let element of arr1){
//     arr2.push(element.replace(element.slice(0,1),element.slice(0,1).toUpperCase()));
//   }
//   var str2 = arr2.join(' ');
//   console.log(str +"  ==>  " + str2);
// }
// capitalize('look, it is working!');
// module.exports = capitalize;


// // Method 3
// function capitalize(str) {
//
//   var arr1 = str.split(' ');
//   var arr2 =[];
//
//   for(let element of arr1){
//     arr2.push(element[0].toUpperCase() + element.slice(1));
//     // same result from the below statement
//     // arr2.push(element.charAt(0).toUpperCase() + element.slice(1));
//   }
//   var str2 = arr2.join(' ');
//   console.log(str +"  ==>  " + str2);
// }
// capitalize('look, it is working!');
// module.exports = capitalize;

// Method 4
function capitalize(str) {

  var arr1 = str.split('');
  var arr2 = [];

  arr2.push(arr1[0].toUpperCase());
  for(var i = 0; arr1.length > i; i++){
    if(arr1[i]==" "){
      arr2.push(arr1[i+1].toUpperCase());
    }else{
      arr2.push(arr1[i+1]);
    }
  }
  console.log(str +"  ==>  " + arr2.join(''));
  return  arr2.join('');
}
capitalize('I Love Breakfast At Bill Miller Bbq');
module.exports = capitalize;
