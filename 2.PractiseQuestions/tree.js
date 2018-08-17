// --- Directions
// 1) Create a tree class.  The constructor
// should accept an argument that gets assigned
// to the value property, left and right property
// 2) Contruct inOrder, preOrder and PostOrder of the constructed tree.

class tree{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let a = new tree(1);
let b = new tree(2);
let c = new tree(3);
let d = new tree(4);
let e = new tree(5);
let f = new tree(6);
let g = new tree(7);
let h = new tree(8);
let i = new tree(9);
let j = new tree(10);
let k = new tree(11);

a.left = b;
b.left = d;
c.left = f;
d.left = i;
e.left = h;

a.right =  c;
b.right =  e;
c.right =  g;
d.right =  j;
e.right =  k;

let arr = [];

function inOrder(tree){  // LNR
    if(tree){
        inOrder(tree.left);
        arr.push(tree.value);
        inOrder(tree.right);
    }
    return arr;
}

function postOrder(tree){ // LRN
    if(tree){
        postOrder(tree.left);
        postOrder(tree.right);
        arr.push(tree.value);
    }
    return arr;
}

function preOrder(tree){  //NLR
    if(tree){
        arr.push(tree.value);
        preOrder(tree.left);
        preOrder(tree.right);
    }    
    return arr;
}

// console.log(inOrder(a));
// console.log(postOrder(a));
console.log(preOrder(a));