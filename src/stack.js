class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  size() {
    return this.size;
  }
  add(num) {
    ++this.size;
    this.arr.push(num);
  }
  remove() {
    if (this.size > 0) --this.size;
    return this.arr.pop();
  }
}

module.exports = Stack;
