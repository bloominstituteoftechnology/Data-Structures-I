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
  addToTail(value) {
    const node = {
      next: null,
      value
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    if (this.head.next === null) {
      this.head.next = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
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

  contains(value) {
    if (this.head === null) return false;
    const findValue = (node) => {
      if (node.next === null) return false;
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
