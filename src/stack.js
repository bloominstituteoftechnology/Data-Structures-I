class Stack {
  constructor() {
    this.size = 0;
    this.data = [];
  }
  push(value) {
    this.data.push(value);
    this.size += 1;
  }
  pop() {
    if (this.size > 0) {
      this.size -= 1;
    }
    return this.data.pop();
  }
  size() {
    return this.size;
  }
}

module.exports = Stack;
