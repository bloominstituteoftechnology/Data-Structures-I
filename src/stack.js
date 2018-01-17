/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  get size() {
    return this.count;
  }
  push(val) {
    const i = this.size;
    this.storage[i] = val;
    this.count++;
  }
  pop() {
    if (this.size === 0) {
      return 0;
    }
    const val = this.storage[this.size - 1];
    this.storage[this.size - 1] = null;
    this.count--;
    return val;
  }
}

module.exports = Stack;
