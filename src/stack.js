/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

const DLL = require('./doubly-linked-list');

class Stack {
  constructor() {
    this.storage = new DLL();
    this.count = 0;
  }

  push(value) {
    this.storage.addToTail(value);
    return ++this.count;
  }

  pop() {
    if (this.count === 0) return;
    const { value } = this.storage.removeFromTail();
    --this.count;
    return value;
  }

  get size() {
    return this.count;
  }
}

module.exports = Stack;
