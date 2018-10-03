// Print the square pattern with the help of *.

// Question 1:
//   * * * *
//   * * * *
//   * * * *
//   * * * *

function square1(n){
  let a="";
  for(let i = 1; i<=n; i++){
    for(let j=1; j<=n; j++){
      a += ' *';
    }
    console.log(a);
    a= "";
  }
}

square1(4);

// Question 2:
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3
// 4 4 4 4 


function square2(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      a += i + " ";
    }
    console.log(a);
    a = "";
  }
}

square2(4);


// Question 3:
// 1 2 3 4 
// 1 2 3 4 
// 1 2 3 4 
// 1 2 3 4 


function square3(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      a += j + " ";
    }
    console.log(a);
    a = "";
  }
}

square3(4);


// Question 4:
// 5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1


function square4(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      a += n - i + 1 + " ";
    }
    console.log(a);
    a = "";
  }
}

square4(5);

