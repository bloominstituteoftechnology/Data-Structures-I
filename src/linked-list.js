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
  addToTail(value) {  // creates new node
    const newNode = {
      value,
      next: null,
    };

    if (this.tail === null) { // adds new node to head and tail
      this.tail = newNode;
      this.head = newNode;
      return;
    }
    const holder = this.tail; // adds tail to exising node
    holder.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) { // determine if there is a head
      return null;
    }
    const node = this.head; // if there is a head, moves the pointer to next head
    this.head = node.next;
    if (this.head === null) {
      this.tail = null; // removes the tail by setting it to null
    }
    return node.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {

  }
}

module.exports = LinkedList;
