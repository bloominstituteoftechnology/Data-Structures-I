/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.counter = 0;
    this.stack = {};
  }
  get size() {
    return this.counter;
  }
  push(value) {
    this.stack[this.counter] = value;
    this.counter++;
  }
  pop() {
    if (this.counter === 0) return;
    this.counter--;
    const removed = this.stack[this.counter];
    delete this.stack[this.counter];
    return removed;
  }
}

module.exports = Stack;
