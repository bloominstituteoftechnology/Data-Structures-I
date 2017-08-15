/* eslint-disable class-methods-use-this */
/**
 * #### Linked Lists

 * Should have the methods: `addToTail`, `removeHead`, and `contains`.
 * `addToTail` replaces the tail with a new value that is passed in.
 * `removeHead` removes and returns the head node.
 * `contains` should searth through the linked list and return true if a matching value is found.
 * The `head` property is a reference to the first node and the `tail` property is a reference to
 * the last node.  These are the only two properties that you need to keep track of an infinite
 * number of nodes.  Build your nodes with objects.
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  newNode(value) {
    return {
      previous: null,
      value,
      next: null
    };
  }
  addToTail(value) {
    const node = this.newNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (!this.head.next) {
      node.previous = this.head;
      this.head.next = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  addToHead(value) {
    const node = this.newNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (!this.tail.next) {
      node.previous = this.head;
      this.head = node;
      this.tail.next = this.head;
    } else {
      node.previous = this.head;
      this.head = node;
      this.tail.next = node;
    }
  }
  removeHead() {
    if (!this.head) return null;
    if (!this.head.next) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    const returnVal = this.head.value;
    this.head = this.head.next;
    return returnVal;
  }
  removeTail() {
    if (!this.tail) return null;
    if (!this.tail.next) {
      const tail = this.tail;
      this.head = null;
      this.tail = null;
      return tail.value;
    }
    const returnVal = this.tail.value;
    this.tail = this.tail.next;
    return returnVal;
  }
  contains(value) {
    if (this.head === null) return false;
    const findValue = (node) => {
      if (node.next === null) return false;
      else if (node.value === value) return true;
      return findValue(node.next);
    };
    return findValue(this.head);
  }
}

module.exports = LinkedList;
