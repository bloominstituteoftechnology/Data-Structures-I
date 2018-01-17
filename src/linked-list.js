/* eslint-disable class-methods-use-this */
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
      next: null,
      value,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode; // You have to do this one first, so that this.tail still represents the old tail
    this.tail = newNode; // Once you have the reference set, then you can reassign this.tail to newNode.
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) return; // shorthand way to return nothing

    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  // Checks the linked list for the given value  -- this requires a recursive function to
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    if (this.head === null) return false;
    const findValue = (node) => {
      if (node.value === value) return true;
      if (node.next === null) return false;
      return findValue(node.next);
    };
    return findValue(this.head);
  }
}

module.exports = LinkedList;
