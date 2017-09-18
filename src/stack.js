class Stack {
  constructor() {
    this.size = 0;
    this.stack = {};
  }
  push(item) {
    this.stack[this.size] = item;
    this.size++;
    return true;
  }
  pop() {
    const value = this.stack[this.size - 1];
    if (this.size - 1 < 0) return 0;
    delete this.stack[this.size - 1];
    this.size--;
    return value;
  }
  size() {
    return this.size;
  }
}

module.exports = Stack;
