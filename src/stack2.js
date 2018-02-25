/* eslint-disable*/
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack2 {
  constructor() {
    this.storage = [];
    this.storageLength = 0;
  }
  get size() {
    return this.storageLength;
  }
  push(item) {
    this.storage[this.storageLength] = item;
    this.storageLength++;
    return this.storageLength;
  }
  pop() {
    if (this.storageLength === 0) return null;
    const popped = this.storage[this.storageLength - 1];
    this.storage[this.storageLength - 1] = null;
    this.storageLength--;
    return popped;
  }
 }

module.exports = Stack2;
