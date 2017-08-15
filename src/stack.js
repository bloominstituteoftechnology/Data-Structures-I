const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.count = 0;
  }
  add(value) {
    this.stack.addToTail(value);
    this.count++;
  }
  remove() {
    if (this.count) {
      this.count--;
      return this.stack.removeTail();
    }
  }
  get size() {
    return this.count;
  }
}

module.exports = Stack;
