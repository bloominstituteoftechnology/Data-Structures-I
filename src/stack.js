'use strict';

class Stack {
    constructor() {
        // empty stack
        this.stack=[];
    }

    add(item) {
        // add item to the stack
        this.stack.push(item);
    }

    remove() {
        // if there's an item to remove from the stack, remove it
        if(!this.stack.length <= 0) {
            return this.stack.pop();
        }
    }

    size() {
        // return the size of the stack
        return this.stack.length;
    }
}

module.exports = Stack;