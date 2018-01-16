/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.arr = [];
  }
  get size() {
    const l = this.arr.length;
    return l;
  }

  push(value) {
    const l = this.arr.length;
    this.arr[l] = value;
  }

  pop(value) {
    const l = this.arr.length;
    if (l === 0) return;
    const popped = this.arr[l - 1];
    this.arr.splice(l - 1);
    return popped;
  }
}

module.exports = Stack;
