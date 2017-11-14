/* eslint-disable class-methods-use-this */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = prev;
    }
    this.size++;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;

    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node.value;
  }
  get length() {
    return this.size;
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let returnValue = false;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        returnValue = true;
      }
      currentNode = currentNode.next;
    }
    return returnValue;
  }
}
module.exports = DoublyLinkedList;
