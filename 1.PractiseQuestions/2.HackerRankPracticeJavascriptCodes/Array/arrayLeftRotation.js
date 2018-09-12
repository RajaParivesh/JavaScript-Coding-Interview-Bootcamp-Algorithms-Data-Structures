function rotLeft(a, d) {
    let addAtEnd = a.splice(0, d);
    let arr = a.concat(addAtEnd);
    let string = arr.toString();
    string = string.replace(/,/g, ' ');
    return string;
}


console.log(rotLeft([1,2,3,5],1));
