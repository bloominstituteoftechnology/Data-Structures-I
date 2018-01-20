/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  // build a constructor here
  constructor() {
    this.array = [];
  }
  // size getter that returns number of items
  get size() {
    return this.array.length;
  }
  // push method
  push(n) {
    this.array.push(n);
    return this.array;
  }
  // pop method
  pop() {
    return this.array.pop();
  }
}


module.exports = Stack;
