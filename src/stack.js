const { Node, LinkedList } = require('./linked-list.js');

class Stack {
  constructor() {
    this.storage = [];
  }

  add(value) {
    return this.storage.push(value);
  }

  remove() {
    return this.storage.pop();
  }

  get size() {
    return this.storage.length;
  }

}

module.exports = Stack;

