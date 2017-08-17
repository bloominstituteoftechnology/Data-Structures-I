class Stack {
  constructor() {
    this.queueStorage = [];
  }
  add(value) {
    this.queueStorage.push(value);
  }
  remove() {
    return this.queueStorage.pop();
  }
  get size() {
    return this.queueStorage.length;
  }
}

module.exports = Stack;
