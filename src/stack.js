/* eslint-disable class-methods-use-this */

const LinkedList = require('./linked-list');

// // Array implementation
// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   get size() {
//     return this.stack.length;
//   }

//   push(item) {
//     this.stack[this.size] = item;
//   }

//   pop() {
//     const popItem = this.stack[this.size - 1];
//     this.stack = this.stack.splice(0, this.size - 1);
//     return popItem;
//   }
// }

// doubly linked list implementation
class Stack {
  constructor() {
    this.stack = new LinkedList();
  }
  get size() {
    let count = 0;
    let node = this.stack.tail;
    // no nodes
    if (node === null) return 0;
    // one node
    if (node.next === null && node.previous === null) return 1;
    // more than one more
    while (node.previous != null) {
      count++;
      node = node.previous;
    }
    // account for last node (head)
    return ++count;
  }

  push(item) {
    this.stack.addToTail(item);
  }

  pop() {
    // no nodes
    if (this.stack.tail === null) return;
    // one node
    if (this.stack.tail === this.stack.head) {
      const tail = this.stack.tail;
      this.stack.head = null;
      this.stack.tail = null;
      return tail.value;
    }
    // multiple nodes
    const tail = this.stack.tail;
    this.stack.tail = tail.previous;
    this.stack.tail.next = null;
    return tail.value;
  }
}

module.exports = Stack;
