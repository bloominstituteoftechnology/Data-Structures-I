class Stack {
  constructor(options) {
    this.data = [];
    this.size = 0;
  }
  push(val) {
    this.data.push(val);
    this.size++;
  }
  pop() {
    if (this.size > 0) {
      this.size--;
    }
    return this.data.pop();
  }
  size() {
    return this.size;
  }
}

module.exports = Stack;
