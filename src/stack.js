/* eslint-disable */
class Stack {
  constructor() {
    this.storage = [];
  }

  get size() {
    return this.storage.length;
  }

  add(item) {
    this.storage.push(item);
  }

  remove() {
    return this.storage.pop();
  }
}

module.exports = Stack;
