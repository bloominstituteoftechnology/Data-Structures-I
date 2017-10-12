/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
const LinkedList = require('./linked-list.js');

class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  get size() {
    return this.storage.length;
  }

  push(item) {
    this.storage.addToHead(item);
  }
  pop() {
    const item = this.storage.removeHead();
    return item;
  }
}

module.exports = Stack;
