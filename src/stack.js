class Stack {
  constructor() {
    this.storage = [];  //  enables each instance of stack to have its own container
  }

  push(node) {
    this.storage.push(node);
  }

  pop() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Stack;

