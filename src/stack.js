class Stack {
  constructor() {
    this.storage = [];
  }
  add(x) {
    return this.storage.push(x);
  }
  remove(y) {
    return this.storage.pop(y);
  }
  get size() {
    return this.storage.length;
  }
}


module.exports = Stack;
