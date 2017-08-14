class Stack {
  constructor() {
    this.arr = [];
  }
  add(input) {
    return this.arr.push(input);
  }
  remove() {
    return this.arr.pop();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Stack;
