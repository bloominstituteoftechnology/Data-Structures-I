class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  add(x) {
    this.stack.push(x);
    this.size = this.size + 1;
  }
  remove() {
    if (this.size > 0) {
      this.size = this.size - 1;
    }
    return this.stack.pop();
  }
  size() {
    this.size = 0;
  }
}

module.exports = Stack;
