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
    // creates the node.
    const newNode = {
      next: null,
      value,
    };
    // checks if list is empty.
    if (!this.head) {
      // makes the node the head and tail.
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const node = this.head;
    this.head = node.next;
    return node.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let checkNode = this.head;
    while (checkNode !== null) {
      if (checkNode.value === value) {
        return true;
      }
      checkNode = checkNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
