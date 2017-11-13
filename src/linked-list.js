/* eslint-disable class-methods-use-this */
// https://www.interviewcake.com/article/python/data-structures-coding-interview?collection=dsa#linked-lists

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
    // create the node
    const newNode = {
      value,
      next: null,
    };
    // if there are no nodes alreay point head and tail to the node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { // otherwise add it to the last node and change the pointers
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {

  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {

  }
}

module.exports = LinkedList;
