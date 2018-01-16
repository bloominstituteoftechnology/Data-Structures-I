/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
// class Stack {
//   constructor() {
//     this.storage = [];
//   }
//   get size() {
//     return this.storage.length;
//   }
//   push(input) {
//     this.storage[this.size] = input;
//     return this.size;
//   }
//   pop() {
//     if (this.size === null) return null;
//     const popped = this.storage[l-i];
//     const l = this.size;
//     this.storage[l-i] = null;
//     return popped;
//   }
// }
class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  get size() {
    // let count = 0;
    // if (this.head === null) return;
    // while (this.storage[count]) {
    //   count++;
    // }
    return this.count;
  }
  push(value) {
    this.storage[this.size] = value;
    this.count++;
    return this.count;
  }
  pop(value) {
    if (this.size === 0) return null;
    const popped = this.storage[this.size - 1];
    this.storage[this.size] = null;
    this.count--;
    return popped;
  }
}

module.exports = Stack;
