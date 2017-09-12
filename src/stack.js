class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }

  get size() {
    return this.arr.length;
  }
}

module.exports = Stack;
