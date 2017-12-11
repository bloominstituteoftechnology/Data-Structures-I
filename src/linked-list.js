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
      return; // to make sure the "list not empty" code doesn't run
    }
    // list is not empty
    this.tail.next = newNode;
    this.tail = newNode;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // nothing in List
    if (this.head === null) return;
    // one node in List
    if (this.head.next === null) {
      // create a new reference to current head, to return that value
      const head = this.head;
      // set this.head to null
      this.head = null;
      // set this.tail to null
      this.tail = null;
      // return the value from head.
      return head.value;
    }
    // multiple nodes in list
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // if the Linked list is empty, then automatically return false
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      // base case 1: if the current node is the 'given value'
      if (node.value === value) return true;
      // base case 2: we've reached the end of our linked list
      if (node.next === null) return false;
      // call our function recursively, passing it the next node
      return searchLinkedList(node.next);
    };
    // call our recursive function on the first node (head)
    return searchLinkedList(this.head);
  }
}

/* non-recursive method: https://cl.ly/3E1C2S100m2f
contains(value) {
  if (this.head === null) return false; // if linked list is empty, return false
  // start at head
  const currentNode = this.head;
  // iterate through the list
  while (currentNode) {
    if (currentNode.value === value) {
      return true;
    }
  // otherwise update currentNode reference to next node
  currentNode = currentNode.next;
  }
  // return false if value not found
  return false;
}
*/

module.exports = LinkedList;
