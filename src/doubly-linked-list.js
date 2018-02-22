class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) {
    const newTail = {
      value,
      next: null,
      prev: null,
    };
    if (this.tail === null) {
      this.head = newTail;
      this.tail = newTail;
      return;
    }
    const oldTail = this.tail;
    oldTail.next = newTail;
    this.tail = newTail;
    newTail.prev = oldTail;
  }
  addToHead(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const oldHead = this.head;
    oldHead.prev = newNode;
    this.head = newNode;
    this.head.next = oldHead;
  }
  removeFromHead() {
    const oldHead = this.head;
    if (oldHead === null) return null;
    if (oldHead.next !== null) {
      this.head = oldHead.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  removeFromTail() {
    const oldTail = this.tail;
    if (oldTail === null) return null;
    if (oldTail.prev !== null) {
      this.tail = oldTail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return oldTail;
  }
  delete(node) {
    if (node.value === this.head.value) {
      this.removeFromHead();
    }
    if (node.value === this.tail.value) {
      this.removeFromTail();
    }
    let current = this.head;
    while (current !== null) {
      if (current.value === node.value) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        break;
      }
      current = current.next;
    }
    return;
  }
  moveToFront(node) {
    if (this.head.value === node.value) return;
    this.delete(node);
    this.addToHead(node.value);
  }
  moveToBack(node) {
    if (this.tail.value === node.value) return;
    this.delete(node);
    this.addToTail(node.value);
  }
}

module.exports = DoublyLinkedList;
