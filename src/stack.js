class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  push(value) {
    this.size++;
    return this.storage.push(value);
  }
  pop() {
    if (this.size) {
      this.size--;
    }
    return this.storage.pop();
  }
  size() {
    return this.storage.length;
  }
}
module.exports = Stack;
