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
    return this.storage.length;
  }
  push(item) {
    return this.storage.push(item);
  }
  pop() {
    return this.storage.pop();
  }
}
/*  constructor() {
    this.items = [];
    this.length = 0;
  }
  push(item) {
    this.items.push(item);
    this.length = this.length + 1;
  }
  pop() {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
    return this.items.pop();
  }
  size() {
    return this.length;
  }
  peek() {
    return this.items.slice(-1)[0];
  }

}
*/
module.exports = Stack;
