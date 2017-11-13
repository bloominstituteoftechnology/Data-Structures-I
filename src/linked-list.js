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
    this.length++;
    const newNode = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (!this.head) return null;
    this.length--;
    if (!this.head.next) this.tail = null;

    const node = this.head.value;
    this.head = this.head.next;
    return node;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    const copyList = this;
    let returnVal = false;
    for (let i = 0; i < copyList.length; i++) {
      if (value !== copyList.head.value) {
        copyList.removeHead();
      } else {
        returnVal = true;
      }
    }
    return returnVal;
  }
}

module.exports = LinkedList;
