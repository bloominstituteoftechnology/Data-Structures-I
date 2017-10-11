/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value,
      next: null,
    };
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // let currentHead = this.head;
    // while (currentHead.next !== null) {
      // currentHead = currentHead.next;
    this.tail.next = newNode;
    this.tail = newNode;
    // }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead(value) {
    if (!this.contains(value)) {
      return;
    }
    if (this.head.value === value) {
      const removed = this.head.value;
      this.head = this.head.next;
      return removed;
    }
    let prev = null;
    let curr = this.head;
    while (curr.value !== value) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    const current = this.head;
    while (current) { // !== null
      if (current === value) {
        return true;
      }
      return false;
    }
  }
}

module.exports = LinkedList;
