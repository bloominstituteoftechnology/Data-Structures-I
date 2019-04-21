/* eslint-disable */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // should have the methods "addToHead", "addToTail", "removeFromHead", "removeFromTail", "delete", "moveToFront", and "moveToBack"'
  addToHead(value) {
    let node = {
      value,
      next: null
    };
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
  }
  addToTail(value) {
    let node = {
      value,
      next: null,
      previous: this.tail
    };
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } 
    else {
      let oldTail = this.tail;
      console.log('oldTail', oldTail)
      oldTail.next = node;
      this.tail = node;
      // this.tail.previous = oldTail;
    }
  }
  removeFromHead() {
    let newHead = this.head.next;
    this.head = newHead;
  }
  removeFromTail() {
    return;
  }
  delete() {
    return;
  }
  moveToFront() {
    return;
  }
  moveToBack() {
    return;
  }
}

module.exports = DoublyLinkedList;
