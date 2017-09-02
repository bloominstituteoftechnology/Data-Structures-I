class Stack {
  constructor() {
    this.size = 0;
    this.array = [];
  }

  push(val) {
    this.array.push(val);
    this.size++;
  }

  pop() {
    if (this.size < 1) {
      return undefined;
    }
    this.size--;
    return this.array.pop();
  }

  size() {
    return this.size;
  }
}

module.exports = Stack;
