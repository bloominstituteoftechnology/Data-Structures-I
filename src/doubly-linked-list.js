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
