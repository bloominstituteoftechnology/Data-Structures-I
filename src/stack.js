class Stack {
  // Ivan's video on Data Structures 10.10.2017
  constructor() {
    // this.size = 0;
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
