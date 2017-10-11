/* eslint-disable class-methods-use-this */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  size() {
    let current = this.head;
    for (let count = 0; current !== null; ++count) {
      current = current.next;
    }; return count;
  }

  addToHead(value) {
    const newNode = {
      value,
      previous: null,
      next: this.head
    }; this.head = newNode;
  }

  addToTail(value) {
    const node = { value, previous: null, next: null}
    if (this.head === null) { this.head, node.previous, this.tail = node, node, node; return}
    let current = this.tail;
    while (current.next !== null) {
      current = this.next;
    }; this.tail.next, node.previous, this.tail = node, this.tail, node;
  }

  removeHead() {
    if (this.head === null) return;
    let _return = this.head.value;
    this.head = this.head.next;
    return _return;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }; return false;
  }
}

module.exports = LinkedList;
