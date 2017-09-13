class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  push(val) {
    this.stack.push(val);
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    this.size--;
    return this.stack.pop();
  }

  size() {
    return this.size;
  }
}

module.exports = Stack;
