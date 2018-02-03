/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
// stacks are Last In, First Out LIFO
class Stack {
// mimic the stack behavior using an array
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  get size() {
    return this.count;
  }
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    if (this.count === 0) return null;
    --this.count;
    const item = this.storage[this.count];
    this.storage[this.count] = null;
    return item;
  }
}

module.exports = Stack;
