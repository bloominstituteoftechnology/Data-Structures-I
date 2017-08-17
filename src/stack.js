class Stack {
  constructor() {
    this.arr = [];
  }
  add(item) {
    this.arr.push(item);
  }
  remove() {
    return this.arr.pop();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Stack;
