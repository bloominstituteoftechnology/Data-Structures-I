/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
  }
  get size() {
    // const storage = this.storage;
    // return storage.length;  
    return this.storage.length;  
  }
  push(item) {
    return this.storage.length();
  }
  pop() {
    // if it's empty, return null;
    if (!this.storage) return null;
    // store the value to be popped
    const value = this.storage[this.storage.length - 1];
    this.storage.pop();
    return value;
  }
}

module.exports = Stack;
