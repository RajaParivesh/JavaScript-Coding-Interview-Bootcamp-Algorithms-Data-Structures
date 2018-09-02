// 

function bubbleSort(arr) {
  for (let i = 0 ; arr.length > i; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {     // Take Care: for-loop range and limit
      if(arr[j]>arr[j+1]){
        let temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp; 
      }
    }
  }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 8, 4, 2]));