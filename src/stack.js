class Stack {
  constructor() {
    this.arr = [];
  }
  add(value) {
    this.arr.push(value);
  }
  remove(value) {
    return this.arr.pop(value);
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Stack;
