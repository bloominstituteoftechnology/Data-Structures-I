/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.stack = [];
  }
  get size() {
    return this.stack.length;
  }
  // add an element to the end of queue
  push(element) {
    this.stack.push(element);
  }
  // remove the first element from queue or return undefine if queue is empty
  pop() {
    if (this.size === 0) {
      return;
    }
    return this.stack.pop();
  }
}

module.exports = Stack;
