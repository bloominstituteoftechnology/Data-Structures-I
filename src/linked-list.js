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
  addToTail(val) {
    const newNode = {
      value: val,
      next: null,
    };

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const holder = this.tail;
    holder.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const val = this.head.value;
    this.head = this.head.next;
    return val;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let Node = this.head;
    while (Node !== null) {
      if (Node.val === value) {
        return true;
      }
      Node = Node.next;
    }
    return false;
  }
}
module.exports = LinkedList;
