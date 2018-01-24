/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  size() {
    return this.stack.size;
  }
  push(value) {
    this.stack.push(value);
    this.size ++;
    return this.size;
  }
  pop() {
    this.stack.size --;
    return this.stack.pop();
  }
}

module.exports = Stack;
