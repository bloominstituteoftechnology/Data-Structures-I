class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  size() {
    return this.size;
  }
  push(item) {
    this.size++;
    return this.storage.push(item);
  }
  pop() {
    if (this.size < 0) {
      return undefined;
    }
    this.size--;
    return this.storage.pop();
  }
}

module.exports = Stack;
