// import LinkedList from './linked-list';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const node = {
      value,
      next: this.head,
      prev: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
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
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  removeFromHead() {
    const removed = this.head;
    return removed.value;
  }

  removeFromTail() {
    const removed = this.tail;
    this.tail = this.tail.prev;
    return removed.value;
  }

  delete(value) {
    this;
  }

  moveToFront(value) {
    this;
  }

  moveToBack(value) {
    this;
  }

}


module.exports = DoublyLinkedList;
