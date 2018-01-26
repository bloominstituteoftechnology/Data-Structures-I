/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this ****
  2. Add a size getter that returns the number of items the stack is storing ****
  3. Add a `push` method that accepts an item as input and adds it to the storage structure ****
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.incrementStack = 0;
    this.storage = {};
  }

  push(item) {
    this.storage[this.incrementStack] = item;
    this.incrementStack++;
  }

  pop() {
    if (this.incrementStack === 0) {
      return null;
    }
    this.incrementStack--;
    const poppedResult = this.storage[this.incrementStack];
    this.storage[this.incrementStack] = null;
    return poppedResult;
  }

  get size() {
    return this.incrementStack;
  }
}

module.exports = Stack;
