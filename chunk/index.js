// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Method 1
function chunk(array, size) {
  var arr = [];
  var first = 0
  for(var i = 0; array.length/size > i; i++){
      var last = size*(i+1);
      arr.push(array.slice(first,last))
      first = last;
  }
  console.log(arr);
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
module.exports = chunk;
