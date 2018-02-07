/* eslint-disable arrow-parens */

const Node = require('./node');

class DoublyLinkedList {
  constructor() {
    Object.assign(this, { head: null, tail: null });
  }

  addToHead(value) {
    const node = new Node({ value });
    node.setNext(this.head);
    node.setPrev(null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head.setPrev(node);
    this.head = node;
  }

  addToTail(value) {
    const node = new Node({ value });
    node.setNext(null);
    node.setPrev(this.tail);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.setNext(node);
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
    this.head = this.head.getNext();
    this.head.setPrev(null);
    removed.setNext(null);
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
    this.tail = this.tail.getPrev();
    this.tail.setNext(null);
    removed.setPrev(null);
    return removed;
  }

  // delete :: Node -> Node | undefined
  delete(node) {
    let n = this.find(node);
    if (!n) return undefined;

    if (!n.getPrev()) {
      this.removeFromHead();
    } else if (!n.getNext()) {
      this.removeFromTail();
    } else {
      n.getNext().setPrev(n.getPrev());
      n.getPrev().setNext(n.getNext());
      n = null;
    }
    return n;
  }

  // find :: Node -> Node | undefined
  find(node) {
    const recurse = n => {
      if (!n) return undefined;
      if (n.equals(node)) return n;
      return recurse(n.getNext());
    };
    return recurse(this.head);
  }

  // each :: Function -> Side Effect
  each(cb) {
    const recurse = n => {
      if (!n) return;
      cb(n);
      return recurse(n.getNext());
    };
    recurse(this.head);
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
