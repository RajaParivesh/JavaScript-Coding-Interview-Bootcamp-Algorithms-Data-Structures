'use strict'
// Implementation of stack for importing in other programs
class Stack {
    // Returns an empy stack
    constructor () {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return 'underflow';
        }
        return this.items.pop();
    }

    peek() {
        return this.items[items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length;
    }

    print() {
        let str = '[';
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ', ';
        }
        str += ']';
        return str; 
    }
}

module.exports = Stack;