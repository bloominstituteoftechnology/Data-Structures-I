/* eslint-disable class-methods-use-this */

class LinkedList {
  constructor() { this.head = null; this.tail = null; }
  get size() {
    let current = this.head; let i = 0;
    while (current !== null) { current = current.next; i++; }
    return i;
  }

  addNode(value) {
    const node = { value, next: null };
    if (this.head === null) {
      this.head = node; this.tail = node;
    } else { this.tail.next = node; this.tail = node; }
  }

  addToHead(value) {
    const node = { value, previous: null, next: this.head };
    this.head = node;
  }

  addToTail(value) {
    const node = { value, previous: null, next: null };
    if (this.head === null) { this.head = node; node.previous = node; this.tail = node; return; }
    let current = this.tail;
    while (current.next !== null) { current = this.next; }
    this.tail.next = node; node.previous = this.tail; this.tail = node;
  }

  removeHead() {
    if (this.head === null) return null;
    if (this.head.next === null) this.tail = null;
    const nodeValue = this.head.value;
    this.head = this.head.next;
    return nodeValue;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    } return false;
  }
}

module.exports = LinkedList;

let i = 0;
const ll = new LinkedList();
ll.addNode(i++);
ll.addNode(i++);
ll.addNode(i++);
ll.addNode(i++);
ll.removeHead();
ll.removeHead();
ll.removeHead();
ll.removeHead();
console.log(ll.size);
