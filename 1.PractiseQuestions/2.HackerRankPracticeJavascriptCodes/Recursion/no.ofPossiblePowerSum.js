//Question: https://www.hackerrank.com/challenges/the-power-sum/problem

NOT SOLVED YET 

function powerSum(X, P, N = 1) {
  let i_pow = Math.pow(N,P);
  
  //base case
  if(i_pow > X){
    return "raja";
  }
  else if(i_pow == X)
    return 1;
  return powerSum(X, P, N + 1) + powerSum(X-i_pow, P, N+1);
}

console.log(powerSum(7,2));

NOT SOLVED YET