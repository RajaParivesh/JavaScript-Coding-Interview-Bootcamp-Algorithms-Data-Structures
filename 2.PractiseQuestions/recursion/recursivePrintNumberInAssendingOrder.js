// Print the numbers from 0(zero) to n using recursion
function recursivePrint(n){  
    if(n == 1){
        console.log(1);
        return;
    }
    recursivePrint(n-1);
    console.log(n);
}

recursivePrint(100);