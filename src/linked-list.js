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
      next: null,
      value,
    };
    // check if a head already exists
    if (this.head === null) {
      // our list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // there may be nothing in our list
    if (this.head === null) return;
    // there may be one node in our list
    if (this.head.next === null) {
      // create a new reference to our current head, so that we can return the value
      const head = this.head;
      // set this.head to null
      this.head = null;
      // set this.tail to null
      this.tail = null;
      // return the value from our head
      return head.value;
    }
    // there may be multiple nodes in our list
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // if the linked list is emtpy, then automatically return false
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      // base case 1: if the current node we're looking at has the value we're looking for
      if (node.value === value) return true;
      // base case 2: we've reached the end of our linked list
      if (node.next === null) return false;
      // call our function recursively, passing it the next node in our linked list
      return searchLinkedList(node.next);
    };
    // call our recursive function on our first linked list node
    return searchLinkedList(this.head);
  }
}

module.exports = LinkedList;
