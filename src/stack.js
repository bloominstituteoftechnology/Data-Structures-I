class Stack {
  constructor() {
    this.stack = [];
  }
  get size() {
    return this.stack.length;
  }

  push(item) {
    this.stack[this.size] = item;
  }

  pop() {
    const popItem = this.stack[this.size - 1];
    this.stack = this.stack.splice(0, this.size - 1);
    return popItem;
  }
}

module.exports = Stack;
