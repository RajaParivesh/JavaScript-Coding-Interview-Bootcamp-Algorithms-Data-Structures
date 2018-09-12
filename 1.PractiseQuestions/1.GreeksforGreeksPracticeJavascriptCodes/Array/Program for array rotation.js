// Program for array rotation
// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
// Array  ArrayRotation([1,2,3,4,5],2)  ==> [4,5,1,2,3]
// Rotation of the above array by 2 will make array
//
// // Method 1
// function ArrayRotation(array,d){
//     rotatedArray = [];
//     for(let r1 of array.slice(array.length-d)){
//       rotatedArray.push(r1);
//     }
//     for(let r2 of array.slice(0, array.length-d)){
//       rotatedArray.push(r2);
//     }
//     console.log(array.slice(array.length-d));
//     console.log(array.slice(0,array.length-d));
//     console.log(rotatedArray);
// }
//
// ArrayRotation([1,2,3,4,5],3)
//

// Method 2
function ArrayRotation(array,d){
  var temp = [];
  for(var i=0; d>i; i++){
    temp.push(array[i]);
  }
  for(var i=0; d>i; i++){
    array.shift()
  }
  for(let t of temp){
    array.push(t);
  }
  console.log(array);
}

ArrayRotation([1,2,3,4,5],3)
