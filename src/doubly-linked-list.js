class Node {
  constructor({ value, next, prev }) {
    Object.assign(this, { value, next, prev });
  }
  //equals() {

  //}
}

class DoublyLinkedList {
  constructor() {
    Object.assign(this, { head: null, tail: null });
  }

  addToHead(value) {
    const node = new Node({
      value,
      next: this.head,
      prev: null,
    });

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head.prev = node;
    this.head = node;
  }

  addToTail(value) {
    const node = new Node({
      value,
      next: null,
      prev: this.tail,
    });

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
    removed.next = null;
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
    if (!this.head) return undefined;

    const value = node.value;
    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }

    if (current.prev === null) {
      current.next.prev = null;
      this.head = current.next;
      current.next = null;
      return node;
    }

    if (current.next === null) {
      current.prev.next = null;
      this.tail = current.prev;
      current.prev = null;
      return node;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    current.next = null;
    current.prev = null;

    return node;
  }

  moveToFront(node) {
    this.delete(node);
    this.addToHead(node.value);
  }

  moveToBack(node) {
    this.delete(node);
    this.addToTail(node.value);
  }
}

const DLL = new DoublyLinkedList();
DLL.addToHead(103);
DLL.addToHead(102);
DLL.addToHead(101);
DLL.delete({ value: 101 });
DLL.delete({ value: 102 });
//DLL.delete({ value: 103 });
console.log(DLL);
//DLL.delete({ value: 104 });

module.exports = DoublyLinkedList;
