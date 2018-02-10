/* eslint-disable */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // should have the methods "addToHead", "addToTail", "removeFromHead", "removeFromTail", "delete", "moveToFront", and "moveToBack"'
  addToHead(value) {
    const node = {
      value,
      next : this.head,
      prev: null,
    }
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }
    this.head.prev = node;
    this.head = node;
  }

  addToTail(value) {
    const node = {
      value,
      next: null,
      prev: this.tail,
    }
    if (!this.head) {
      this.head = node;
      return;
    }
    let oldTail = this.tail;
    this.tail = node;
    this.oldTail.next = node;
  }

  removeFromHead() {

  }
  removeFromTail() {

  }
  delete() {

  }
  moveToFront() {

  }
  moveToBack() {

  }
}

module.exports = DoublyLinkedList;
