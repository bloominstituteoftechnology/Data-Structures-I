/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  get size() {
    return this.count;
  }

  push(value) {
    this.storage[this.count] = value;
    ++this.count;
  }

  pop() {
    if (this.count === 0) return null;
    --this.count;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
}

module.exports = Stack;
