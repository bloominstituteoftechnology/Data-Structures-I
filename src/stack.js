class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }
  add(value) {
    this.stack.push(value);
    this.count++;
  }
  remove() {
    if (this.count) {
      this.count--;
      return this.stack.pop();
    }
  }
  get size() {
    return this.count;
  }
}

module.exports = Stack;
