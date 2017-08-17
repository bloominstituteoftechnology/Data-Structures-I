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
 *
 * ### Extra Credit
 *
 * Make your linked list implementation a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list).
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  newNode(value) {
    return {
      value,
      next: null
    };
  }
  initializeList(node) {
    this.head = node;
    this.tail = node;
  }

  getPrevious() {
    const size = this.size;
    let count = 0;
    let currentNode = this.head;
    let previousNode;
    while (currentNode) {
      if (count === size - 2) {
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }
    return previousNode;
  }

  addToTail(value) {
    const node = this.newNode(value);
    if (!this.head) {
      this.initializeList(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addToHead(value) {
    const node = this.newNode(value);
    if (!this.head) {
      this.initializeList(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  removeHead() {
    if (!this.head) return;
    const nextHead = this.head.next;
    const returnVal = this.head.value;
    this.head = nextHead;
    if (!nextHead) this.initializeList();
    return returnVal;
  }

  removeTail() {
    if (!this.head) return;
    const previousTail = this.getPrevious();
    const returnVal = this.tail.value;
    this.tail = previousTail;
    if (!previousTail) this.initializeList();
    return returnVal;
  }

  contains(value) {
    if (!this.head) return false;
    const findValue = (node) => {
      if (!node.next) return false;
      else if (node.value === value) return true;
      return findValue(node.next);
    };
    return findValue(this.head);
  }

  get size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}

module.exports = LinkedList;
