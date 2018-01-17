/* eslint-disable class-methods-use-this */

/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

class Stack {
  constructor() {
    //  this.size = 0;
    this.storage = [];
  }

  get size() {
    return this.storage.length;
  }

  push(val) {
    //  this.storage[this.size] = val;
    //  this.size++;
    return this.storage.push(val);
  }

  pop() {
    if (this.size === 0) return undefined;

    // this.size--;
    //  const result = this.storage[this.size];
    //  delete this.storage[this.size];
    return this.storage.pop();
  }
}

module.exports = Stack;
