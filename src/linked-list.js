/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head ***
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list ***
  addToTail(value) {
    const objNode = {
      v: value,
      next: null,
    };

    if (this.tail === null) {
      this.head = objNode;
      this.tail = objNode;
      return;
    }

    const tailHolder = this.tail;
    tailHolder.next = objNode;
    this.tail = objNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {
      return null;
    }
    const headHolder = this.head;
    this.head = headHolder.next;
    if (headHolder.next === null) {
      this.tail = headHolder.next;
    }
    return headHolder.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;
