class Stack {
  constructor() {
    this.stack = [];
  }
  add(value) {
    this.stack.push(value);
  }
  remove() {
    return this.stack.pop();
  }
  get size() {
    return this.stack.length;
  }
}

module.exports = Stack;
