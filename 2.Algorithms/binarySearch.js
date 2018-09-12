// [IMP] For binary search we need a sorted array

function binarySearch(arr, key){
	var len = arr.length;
	var mid = Math.floor(len/2);
	var leftArray =  arr.slice(0, mid);
	var rightArray =  arr.slice(mid, len);	
	
	if(arr[mid] === key){
		return true;
	}
	else if(len > 1 && key < arr[mid]){
		return	binarySearch(leftArray, key);     //take care: here return is important
	}
	else if(len > 1 && key > arr[mid]){
		return	binarySearch(rightArray, key);
	}
	else{
		return false;
	}
}

console.log(binarySearch([1,2,3,4,5],1));
