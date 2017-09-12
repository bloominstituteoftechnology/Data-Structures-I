// What is a stack.

class Stack {

  constructor() {
    this.data = [];
    this.size = this.data.length;
  }

  pop() {
    if (this.data.length > 0) {
      const res = this.data.pop();
      this.updateSize();
      return res;
    }
  }

  push(item) {
    this.data.push(item);
    this.updateSize();
  }

  size() {
    return this.size;
  }

  updateSize() {
    this.size = this.data.length;
  }
}

module.exports = Stack;
