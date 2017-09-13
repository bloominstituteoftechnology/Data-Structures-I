class Stack {
  constructor() {
    this.size = 0;
    this.storage = [];
  }
  push(item) {
    this.storage[this.size] = item;
    this.size++;
  }
  pop() {
    if (this.size === 0) {
      return 0;
    }
    this.size--;
    const result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }
  size() {
    return this.size;
  }
}

module.exports = Stack;
