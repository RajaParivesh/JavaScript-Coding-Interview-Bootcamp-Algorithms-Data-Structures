'use strict'

class Queue {
    // Returns an empty Queue
    constructor () {
        this.items = [];
    }

    enqueue(item) {
        this.items.unshift(item);
    }

    dequeue() {
        if (this.items.length === 0) {
            return 'underflow';
        }
        return this.items.pop();
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

module.exports = Queue;