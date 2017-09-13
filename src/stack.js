const LinkedList = require('../src/linked-list');

class Stack {
  constructor() {
    this.size = 0;
    // this.array = [];
    this.array = new LinkedList();
  }

  push(val) {
    // this.array.push(val);
    this.array.addToTail(val);
    this.size++;
  }

  pop() {
    if (this.size < 1) {
      return undefined;
    }
    this.size--;
    // return this.array.pop();
    return this.array.removeTail();
  }

  size() {
    return this.size;
  }
}

/*
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
*/

module.exports = Stack;
