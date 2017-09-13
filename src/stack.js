class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    return this.arr.pop();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Stack;
