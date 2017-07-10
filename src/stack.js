class Stack {
  constructor() {
    this.stack = [];
  }

  add(value) {
    this.stack.push(value);
  }
  remove() {
    const valueRemoved = this.stack.pop();
    return valueRemoved;
  }
  get size() {
    const size = this.stack.length;
    return size;
  }
}

module.exports = Stack;
