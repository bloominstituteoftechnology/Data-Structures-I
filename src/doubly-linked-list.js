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
    if (this.head === this.tail) {
      const removed = this.head;
      this.head = null;
      this.tail = null;
      return removed;
    }
    const removed = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    removed.next = null
    return removed;
  }

  removeFromTail() {
    if (this.tail === this.head) {
      const removed = this.tail;
      this.tail = null;
      this.head = null;
      return removed;
    }
    const removed = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    removed.prev = null;
    return removed;
  }

  delete(node) {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    // if node is head, remove head
    if (node.prev === null) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    // if node is tail, remove tail
    if (node.next === null) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

    let head = this.head;
    while (head.value !== node.value) {
      head = this.head.next;
    }

    head.next.prev = head.prev;
    head.prev.next = head.next;
  }

  moveToFront(node) {
    this.delete(node);

    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    // this line is creating an infinite loop?
    //this.head = node;

  }

  moveToBack(node) {

  }

}


module.exports = DoublyLinkedList;

