'use strict'

const BinaryTree = require('../lib/tree.js');
const Queue = require('../lib/queue.js');

function bfRowWisePrint(tree){
    let Q = new Queue();
    Q.enqueue(tree);
    let string = '';
    let count = 1;
    let childrenCount = 0;
    while(Q.size()){
        let elem = Q.dequeue();
        count--;
        string = string + " " +elem.val;
        if(elem.left){
            Q.enqueue(elem.left);
            childrenCount++;
        }
        if(elem.right){
            Q.enqueue(elem.right);
            childrenCount++;
        }
        if(count === 0){
            count = childrenCount;
            childrenCount = 0;
            console.log(string);
            string = '';
        }
    }
}


let a = new BinaryTree(1);
let b = new BinaryTree(2);
let c = new BinaryTree(3);
let d = new BinaryTree(4);
let e = new BinaryTree(5);
let f = new BinaryTree(6);
let g = new BinaryTree(7);
let h = new BinaryTree(8);
let i = new BinaryTree(9);
let j = new BinaryTree(10);
let k = new BinaryTree(11);

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


bfRowWisePrint(a);