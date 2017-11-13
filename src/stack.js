/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }
  push(value) {
    this.storage[this.size] = value;
    this.size++;
  }
  pop() {
    if (this.size < 1) return this.size;
    this.size--;
    const lastAdded = this.storage[this.size];
    delete this.storage[this.size];
    return lastAdded;
  }
  size() {
    return this.size;
  }
}

module.exports = Stack;
