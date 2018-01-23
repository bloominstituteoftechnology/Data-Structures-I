/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
    this.counter = 0;
  }

  get size() {
    return this.counter;
  }

  push(item) {
    const len = this.size;
    this.storage[len] = item;
    this.counter++;
    return this.counter;
  }

  pop() {
    const len = this.size;
    if (len === 0) return null;
    const popped = this.storage[len - 1];
    this.storage[len - 1] = null;
    this.counter--;
    return popped;
  }
}

module.exports = Stack;
