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
    const o = {
      value,
      next: null,
      previous: this.tail
    }
    if (this.tail != null) {
      this.tail.next = o
    }
    this.tail = o
    if (this.head === null) {
      this.head = o
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {
      return undefined
    }
    const o = this.head
    this.head = this.head.next
    return o.value
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    if (this.head === null) {
      return false
    }
    let current = this.head
    do {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    while (current)
    return false
  }
}

module.exports = LinkedList;
