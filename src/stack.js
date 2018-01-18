/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a sizeVal getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.arrHolder = [];
    this.sizeVal = 0;
  }
  push(item) {
    this.arrHolder[this.sizeVal] = item;
    this.sizeVal++;
  }
  pop(item) {
    if (this.sizeVal !== 0) {
      const holder = this.arrHolder[this.sizeVal - 1];
      this.arrHolder.splice(this.sizeVal - 1, 1);
      this.sizeVal--;
      return holder;
    }
  }
  get size() {
    return this.sizeVal;
  }
}

module.exports = Stack;
