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
      // list is empty
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // there may be an empty list
    if (this.head === null) return;
    // there may be one node in the list
    if (this.head.next === null) {
      // create a new reference to current head to return value
      const head = this.head;
      // set this.head to null
      this.head = null;
      // set this.tail to null
      this.tail = null;
      // return value from our head
      return head.value;
    }
    // there may be multiple nodes in the list
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  // Recursive answer
  contains(value) {
    // if the link list is empty, return false;
    if (this.head === null) return false;
    const searchLinkList = (node) => {
      // base case 1: if the current node has the value
      if (node.value === value) return true;
      // base case 2: we've reached the end of the list
      if (node.next === null) return false;
      // call our function recursively, passing it the next node
      return searchLinkList(node.next);
    };
    // call our recursive function on our first node
    return searchLinkList(this.head);
  }
}

module.exports = LinkedList;
