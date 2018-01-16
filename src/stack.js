/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
    return this.counter = 0;
  }
  push(value) {
    this.counter++;
    this.storage.push(value);
  }
  pop() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
      return this.counter;
    }
    return this.storage.pop();
  }
  get size() {
    return this.counter;
  }
}

module.exports = Stack;
