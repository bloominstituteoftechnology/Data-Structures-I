/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
// Stack
// Last in First out

class Stack {
  constructor() {
    this.storage = [];
  }
  push(item) {
    this.storage.push(item);
  }
  pop() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

const newStack = new Stack();
console.log(newStack.push(1));
console.log(newStack);

module.exports = Stack;
