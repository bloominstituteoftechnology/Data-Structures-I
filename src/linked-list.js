/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) { // Wraps the given value in a node object and adds the node to the tail of the list. If the list is empty, the new element is considered the tail as well as the head. If there is one element in the list before the new element is added, the new element becomes the tail of the list
    const newNode = {
      next: null,
      value,
    };
    if (this.head === null) { // check if a head already exists. If it doesn't, add this.head and this.tail to newNode
      this.head = newNode;
      this.tail = newNode;
    } else { // Suggests the list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeHead() { // Removes the current head node from the list, replacing it with the next element in the list. Returns the value of the removed node.
    if (this.head === null) return; // Check to be sure the list isn't empty.
    if (this.head.next === null) { // Check to see if there is only one node in the list
      const head = this.head; // Create a new reference to our current head, so that we can return the value
      this.head = null; // set this.head to null and this.tail to null
      this.tail = null;
      return head.value; // return the value from the head.
    }
    const head = this.head; // These steps are for when there are multiple nodes in the list once empty and single-node possibilities are proven false.
    this.head = this.head.next;
    return head.value;
  }
  contains(value) { // Checks the linked list for the given value. Returns true if the the value is found in the list, false otherwise.
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.value === value) return true;
      if (node.next === null) return false;
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
}

module.exports = LinkedList;
