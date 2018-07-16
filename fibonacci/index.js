// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // Method 1
// function fib(n) {
//     var zeroth = 0;
//     var first = 1;
//     for(i=2; n>=i; i++){
//       var fibonacci = zeroth + first;
//        zeroth = first;
//        first = fibonacci
//     }
//     if(n==2 || n==1){
//       fibonacci = 1;
//     }
//     if(n<1){
//       fibonacci = 0
//     }
//   console.log(fibonacci);
//   return fibonacci;
// }
//
// fib(4)
//
// module.exports = fib;


// // Method 2  //taken help from tutorial  // iterative solution
// function fib(n) {
//   const result = [0, 1];
//   for (var i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   console.log(result[n]);
//   return result[n];
// }
// fib(4)
// module.exports = fib;

// Method 3  // recursive solution  // very IMP
function fib(n) {
  if(n<2){
    return n;
  }
  return fib(n-1) + fib(n-2);  //If Possible Remember this // O(n^n)
                              // exponential run time complexity
          // If you want to reduce complexity then you can use "memoization" 
          // or you can go for iterative solution
}
fib(4)
module.exports = fib;
