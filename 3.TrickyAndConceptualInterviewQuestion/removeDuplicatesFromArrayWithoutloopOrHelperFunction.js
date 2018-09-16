//Remove duplicates from array without using loop or helper function 
// example- 
//Input  [1,2,2,3]    //output  [1,2,3]


// Concept: we use a new data-structure called Set. And Set Data-Structure only returns unique elements in object form.

let a = [1,2,2,3];
setObj = new Set(a);
console.log([...setObj]);