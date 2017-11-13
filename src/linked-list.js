/* eslint-disable class-methods-use-this */

class LinkedList {
  constructor() { this.head = null; this.tail = null; }
  get size() {
    let current = this.head; let i = 0;
    while (current !== null) { current = current.next; i++; }
    return i;
  }

  addToTail(value) {
    const node = { value, next: null };
    if (this.head === null) {
      this.head = node; this.tail = node;
    } else { this.tail.next = node; this.tail = node; }
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

const something = new LinkedList();
let i = 0;
something.addToTail(++i);
something.addToTail(++i);
something.addToTail(++i);
something.addToTail(++i);

console.log(something);

module.exports = LinkedList;
