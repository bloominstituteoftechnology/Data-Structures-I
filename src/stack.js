class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
  }
  pop(value) {
    return this.array.pop(value);
  }
  get size() {
    return this.array.length;
  }
}

module.exports = Stack;
