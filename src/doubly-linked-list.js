class Node {
  constructor({ value, next, prev }) {
    Object.assign(this, { value, next, prev });
  }
  equals(node) {
    return node.value === this.value;
  }
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
    const recurse = n => {
      if (!n) return undefined;
      if (n.equals(node)) {
        if (!n.prev) {
          this.removeFromHead();
        } else if (!n.next) {
          this.removeFromTail();
        } else {
          n.next.prev = n.prev;
          n.prev.next = n.next;
          n = null;
        }
        return n;
      }

      return recurse(n.next);
    };

    return recurse(this.head);
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

module.exports = DoublyLinkedList;
