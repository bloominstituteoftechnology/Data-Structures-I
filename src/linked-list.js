/* eslint-disable class-methods-use-this */
class LinkedList {
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
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {}
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // set a variable that references the current node, starting with the head
    // loop through list until either I find a value or the current node's next is null
    // Within loop, use current node's next property to update current node variable for next loop operation
    // if I find the value, return true
    // don't find value, return false
  }
}

module.exports = LinkedList;
