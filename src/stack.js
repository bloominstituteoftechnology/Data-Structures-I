class Stack {
  constructor() {
    this.structure = [];
  }

  get size() {
    return this.structure.length;
  }

  add(value) {
    this.structure.push(value);
  }

  remove() {
    return this.structure.pop();
  }
}

module.exports = Stack;
