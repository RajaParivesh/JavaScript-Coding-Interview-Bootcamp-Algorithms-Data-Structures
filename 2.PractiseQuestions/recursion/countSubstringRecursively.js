// Given two strings str1 and searchString,
// the task is to count the number of times “searchString” occurs in “str1” using recursion.
// Ex:
// Input: abcabc, ab
// Output: 2


// Method 1

// function countSubstringRecursively(string, searchString){
//     if(string.length < searchString.length){
//         return 0;
//     }
//     if(string.substring(0, searchString.length) === searchString){
//         string = string.slice(searchString.length, string.length);
//         return countSubstringRecursively(string, searchString) + 1;
//     }
//     string = string.slice(1, string.length);
//     return countSubstringRecursively(string, searchString);
// }
// console.log(countSubstringRecursively('abcabc', 'ab'));


// Method 2

function countSubstringRecursively(string, searchString){
    if(string.length < searchString.length){
        return 0;
    }
    let count = 0;
    if(string.substring(0, searchString.length) === searchString){
        string = string.slice(searchString.length, string.length);
        count = 1;
    } else {
        string = string.slice(1, string.length);
    }
    
    return count + countSubstringRecursively(string, searchString);
}

console.log(countSubstringRecursively('abcabc', 'ab'));