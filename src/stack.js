// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(item) {
//     this.stack.push(item);
//   }

//   pop() {
//     return this.stack.pop();
//   }

//   get size() {
//     return this.stack.length;
//   }
// }

// ****** LINKED LIST VERSION ******

const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  push(item) {
    this.storage.addToTail(item);
  }

  pop(item) {
    return this.storage.removeTail();
  }

  get size() {
    return this.storage.size;
  }
}

module.exports = Stack;
