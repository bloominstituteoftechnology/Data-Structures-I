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
      value,
      next: null,
    };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const oldHead = this.head;
    if (!this.head) {
      return null;
    }
    this.head = oldHead.next;
    if (!oldHead.next) {
      this.tail = null;
    }
    return oldHead.value;
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node) {
      if (value === node.value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;
