class Stack {
  constructor() {
    this.storage = [];
  }
  pop() {
    return this.storage.pop();
  }
  push(node) {
    this.storage.push(node);
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Stack;
