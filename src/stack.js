/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
/* eslint-disable */
class Stack {
  constructor() {
    this.store = [];
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  push(input) {
    let l = this.size;
    this.store[l] = input;
    this.count++;
    return this.store[this.size] = input;
  }
  pop() {
    const l = this.size;
    const popped = this.storage[l - 1];
    this.storage[l - 1] = null;
    this.count--;
    return popped;
    console.log(popped)
  }

}

module.exports = Stack;
