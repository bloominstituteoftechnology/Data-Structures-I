/* eslint-disable class-methods-use-this */

/*
 * Should have the methods: `addToTail`, `removeHead`, and `contains`.
 * `addToTail` replaces the tail with a new value that is passed in.
 * `removeHead` removes and returns the head node.
 * `contains` should searth through the linked list and return true if a matching value is found.
 * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects.
 * */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const t = this.head.value;
    this.head = this.head.next;
    return t;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    const x = (v, o) => {
      if (o.value === v) return true;
      if (o.next !== null) return x(v, o.next);
    };
    return x(value, this.head) || false;
  }
}
module.exports = LinkedList;
