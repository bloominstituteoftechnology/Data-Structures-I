class Stack {
  constructor() {
    this.storage = [];
  }
  push(node) {
    this.storage.push(node);
  }
  pop() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Stack;
