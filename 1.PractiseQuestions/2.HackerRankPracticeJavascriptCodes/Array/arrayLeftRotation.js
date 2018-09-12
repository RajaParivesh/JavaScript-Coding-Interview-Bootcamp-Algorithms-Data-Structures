function rotLeft(a, d) {
    while(d>0){
        let e = a.shift()
        a.push(e);
        d--;
    }
    return a;
}

console.log(rotLeft([1,2,3,5],5));
