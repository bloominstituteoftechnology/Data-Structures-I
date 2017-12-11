class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  size() {
    return this.size.length;
  }

  push(item) {
    this.size++;
    return this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }
}

module.exports = Stack;
