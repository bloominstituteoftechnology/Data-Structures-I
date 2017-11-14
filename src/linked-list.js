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
<<<<<<< HEAD
    if (this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
=======

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
>>>>>>> a82418fddfd4408c18d9afb0ecd6120bd0ffdf4e
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
<<<<<<< HEAD
    if (this.head) {
      this.head = this.head.next;
    }
=======
    if (!this.head) return null;
    const currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
>>>>>>> a82418fddfd4408c18d9afb0ecd6120bd0ffdf4e
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
<<<<<<< HEAD
=======
    let currentNode = this.head;
    const nodeCheck = () => {
      if (currentNode.value === value) return true;
      if (currentNode.next === null) return false;
      currentNode = currentNode.next;
      return nodeCheck();
    };
    return nodeCheck();
>>>>>>> a82418fddfd4408c18d9afb0ecd6120bd0ffdf4e
  }
}

module.exports = LinkedList;
