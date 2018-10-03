// Print the square pattern with the help of *.

// Question 1:
//   * 
//   * * 
//   * * * 
//   * * * *

function triangle1(n){
  let a = "";
  for(let i = 1; i<=n; i++){
    for(let j = 1; j <= i ;j++){
      a += "* ";
    }
    console.log(a);
    a = "";
  }
}
triangle1(4);

// Question 2:
//   1
//   2 2 
//   3 3 3 
//   4 4 4 4

function triangle2(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      a += i + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle2(4);



// Question 3:
//   A 
//   B B 
//   C C C 
//   D D D D

function triangle3(n) {
  let a = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alpha = [];
  alpha = string.split('');
  
  for(let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
      a += alpha[i - 1] + " "; 
    }
    console.log(a);
    a ="";
  }
}
triangle3(4);


// Question 4:
//   A 
//   A B 
//   A B C 
//   A B C D

function triangle4(n) {
  let a = "";
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alpha = [];
  alpha = string.split('');
  
  for (let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      a += alpha[j-1] + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle4(4);


// Question 5:
//   1 1 1 1 1
//   2 2 2 2
//   3 3 3
//   4 4 
//   5 

function triangle5(n) {
  let a = "";
  for(let i = 1; i <= n; i++){
    for (let j = i; j<=n; j++){
      a += i + " ";
    }
    console.log(a);
    a = ""; 
  }
}
triangle5(5);

// Question 6:
//   1 2 3 4 5 
//   1 2 3 4
//   1 2 3
//   1 2
//   1

function triangle6(n) {
  let a = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j<=n-i+1; j++){
      a += j + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle6(5);


// Question 7:
//   A A A A A 
//   B B B B
//   C C C
//   D D 
//   E

function triangle7(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha = string.split('');
  for(let i = 1; i <= n; i++){
    for(let j = 1; j<=n-i+1; j++){
      a += alpha[i-1] + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle7(5);


// Question 8:
//   A B C D E 
//   A B C D 
//   A B C 
//   A B 
//   A 

function triangle8(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha = string.split('');
  for(let i = 1; i <= n; i++){
    for(let j = 1; j<=n-i+1; j++){
      a += alpha[j-1] + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle8(5);

// Question 9:
//   5 5 5 5 5 
//   4 4 4 4 
//   3 3 3  
//   2 2 
//   1 

function triangle9(n) {
  let a = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j<=n-i+1; j++){
      a += n-i+1 + " ";
    }
    console.log(a);
    a = "";
  }
}
triangle9(5);


// Question 10:
//   5 4 3 2 1 
//   5 4 3 2  
//   5 4 3 
//   5 4  
//   5  

function triangle10(n) {
  let a = "";
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i+1; j++){
      a += n-j+1  + " ";
    }
    console.log(a);
    a = ""
  }
}
triangle10(5);


// Question 11:
//   E E E E E 
//   D D D D
//   C C C 
//   B B 
//   A

function triangle11(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const aplha = string.split('');
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i+1; j++){
      a += aplha[n-i] + " ";
    }
    console.log(a);
    a = ""
  }
}
triangle11(5);

// Question 12:
//   E D C B A 
//   E D C B  
//   E D C  
//   E D  
//   E  

function triangle12(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const aplha = string.split('');
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      a += aplha[n - j] + " ";
    }
    console.log(a);
    a = ""
  }
}
triangle12(5);



// Question 13:
//           * 
//         * *  
//       * * *  
//     * * * *  
//   * * * * *  

function triangle13(n) {
  let a = "";
  for (let i = 1; i <= n; i++){
    for ( let j = 1; j <= n; j++){
      if(j<=n-i){
        a += "  ";
      }else{
        a += "*" + " ";
      }
    }
    console.log(a);
    a = "";
  }
}
triangle13(5);



// Question 14:
//           1 
//         1 2  
//       1 2 3  
//     1 2 3 4  
//   1 2 3 4 5  

function triangle14(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    let b = 1;
    for (let j = 1; j <= n; j++){
      if (j <=n-i){
        a += "  ";
      }else{
        a += b + " ";
        b++;
      }
    }
    console.log(a);
    a = "";
  }
}

triangle14(5);


// Question 15:
//           1 
//         2 1  
//       3 2 1  
//     4 3 2 1  
//   5 4 3 2 1  

function triangle15(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        a += "  ";
      } else {
        a += n-j+1 + " ";
      }
    }
    console.log(a);
    a = "";
  }
}

triangle15(5);


// Question 16:
//           A
//         B A  
//       C B A  
//     D C B A  
//   E D C B A  

function triangle16(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRST";
  let alpha = [];
  alpha = string.split('');
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        a += "  ";
      } else {
        a += alpha[n-j] + " ";
      }
    }
    console.log(a);
    a = "";
  }
}

triangle16(5);

// Question 17:
//           A
//         A B 
//       A B C
//     A B C D
//   A B C D E 

function triangle17(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRST";
  let alpha = [];
  let init = 0
  alpha = string.split('');

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n-i) {
        a += "  ";  // here 2 space 
      } else {
        a += alpha[init] + " ";
        init++;
      }
    }
    console.log(a);
    a = "";
    init = 0;
  }
}

triangle17(5);


// Question 18:

//     A
//    A B
//   A B C
//  A B C D
// A B C D E
function triangle18(n) {
  let a = "";
  const string = "ABCDEFGHIJKLMNOPQRST";
  let alpha = [];
  let init = 0
  alpha = string.split('');

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        a += " ";  // here single space // same as in question 17 but instead of two space put single space
      } else {
        a += alpha[init] + " ";
        init++;
      }
    }
    console.log(a);
    a = "";
    init = 0;
  }
}

triangle18(5);