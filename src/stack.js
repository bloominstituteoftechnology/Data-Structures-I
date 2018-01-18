/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

const LinkedList = require('./linked-list');

class Stack {
  // constructor() {
  //   this.storage = [];
  // }
  constructor() {
    this.storage = new LinkedList();
  }

  // get size() {
  //   return this.storage.reduce((count, item) => ++count, 0);
  // }

  get size() {
    let node = this.storage.head;
    let count = 0;
    while (node !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  // push(item) {
  //   this.storage[this.size] = item;
  // }

  push(item) {
    this.storage.addToHead(item);
  }

  // pop(item) {
  //   const top = this.storage[this.size - 1];
  //   this.storage.splice(this.size - 1);
  //   return top;
  // }

  pop(item) {
    return this.storage.removeHead(item);
  }
}

module.exports = Stack;
