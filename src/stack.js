class Stack {
  constructor() {
    this.stack = [];
  }
  push(el) {
    return this.stack.unshift(el);
  }
  pop() {
    return this.stack.shift();
  }
  get size() {
    return this.stack.length;
  }
}

module.exports = Stack;
