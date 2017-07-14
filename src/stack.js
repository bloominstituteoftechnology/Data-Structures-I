class Stack {
  constructor() {
    this.array = [];
  }
  add(element) {
    return this.array.push(element);
  }

  remove() {
    return this.array.pop();
  }

  get size() {
    return this.array.length;
  }
}

module.exports = Stack;
