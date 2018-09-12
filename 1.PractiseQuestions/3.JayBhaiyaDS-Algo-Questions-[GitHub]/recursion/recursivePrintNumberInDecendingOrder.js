// Print the numbers from n to 0(zero) using recursion
function recursivePrint(n){  
    if(n == 1){
        console.log(1);
        return;
    }
    console.log(n);
    recursivePrint(n-1);
}

recursivePrint(100);