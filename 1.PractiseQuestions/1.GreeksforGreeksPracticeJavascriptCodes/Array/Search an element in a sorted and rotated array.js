// Search an element in a sorted and rotated array

// Method 1
function searchElementIndex(array, element){
    var word = array.toString().replace(/,/g,'');
    var index = word.indexOf(element);
    if(index==-1){
      console.log("Element is not present");
    }else{
      console.log(word);
      console.log("Index of the letter "+ element +" is:"+index);
    }
}
searchElementIndex([8,9,1,2,3,4],8)
// this method fails when element =12 or 2digit no.
//like : searchElementIndex([8,9,1,2,3,4],12)
// Note This program is not working for 2digit no.
