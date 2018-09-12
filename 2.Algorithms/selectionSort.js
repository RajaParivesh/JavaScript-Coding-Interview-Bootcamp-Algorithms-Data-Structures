// TAKE CARE
// Very Important Algorithm 

function selectionSort(arr) {
  let smallest;
  
  for(let i = 0; i < arr.length; i++){
    
    let index = i;

    for(let j = i+1; j < (arr.length); j++){

      if(arr[j] < arr[index]){
        index = j;
      }
    }

    if(index !== i){
      let temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    } 
  }
  return arr;
}

console.log(selectionSort([7,1,5,2,4,3]));