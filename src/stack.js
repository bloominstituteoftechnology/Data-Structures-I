/* eslint-disable class-methods-use-this */

const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    // Array implementation
    // this.stack = [];

    // LinkedList implementation
    this.stack = new LinkedList();
  }
  // // Array implementation
  // get size() {
  //   return this.stack.length;
  // }

  // LinkedList implementation
  // using doubly linked list and
  // counting from head <-- tail
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

  // // Array implementation
  // push(item) {
  //   this.stack[this.size] = item;
  // }

  // LinkedList implementation
  push(item) {
    this.stack.addToTail(item);
  }

  // // Array implementation
  // pop() {
  //   const popItem = this.stack[this.size - 1];
  //   this.stack = this.stack.splice(0, this.size - 1);
  //   return popItem;
  // }

  //  LinkedList implementation
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
