// [Very Good Question] [IMP]

//Count the number of zeroes in present in the factorial of n
// Example : 10! = 10*9*8*7*6*5*4*3*2*1 = 3628800 
// i.e    two Zeroes are present in 10! So, Output = 2

function countZeroInFactorial(n){
  let count = 0;
  for (let i = 1; n/Math.pow(5,i) > 1; i++) {
    count += i-2;
  }
  return Math.floor(n/5) + count*(count+1)/2;
}

console.log("No. of zeroes in given factorial is: "+ countZeroInFactorial(10));