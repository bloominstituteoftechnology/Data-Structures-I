class Node {
  constructor(data) {
    this.value = data;
    this.previous = undefined;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(object) {
    const node = new Node(object);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head; // tests expect the head to also be the tail if size === 1
      return this.size;
    }
    if (this.head === this.tail) {
      node.previous = this.head;
    } else {
      node.previous = this.tail;
    }
    this.tail.next = node;
    this.tail = node;
    return this.size;
  }
  removeHead() {
    if (this.size > 0) {
      const data = this.head.value;
      if (this.head.next !== undefined) {
        this.head = this.head.next;
        this.head.previous = undefined;
      } else {
        this.head = null;
        this.tail = null;
      }
      return data;
    }
  }
  removeTail() { // for LIFO
    if (this.tail === null) {
      return;
    }
    if (this.tail === this.head) {
      return this.removeHead();
    }
    const data = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = undefined;
    return data;
  }
  contains(object) {
    if (this.size > 0) {
      let current = this.head;
      while (current !== undefined) {
        if (current.value === object) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  get size() {
    if (this.head === null) {
      return 0;
    }
    let count = 0;
    let current = this.head;
    while (current !== undefined) {
      count++;
      current = current.next;
    }
    return count;
  }
}

module.exports = LinkedList;
