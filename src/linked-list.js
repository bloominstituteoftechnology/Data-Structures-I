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
    if (this.tail === null) { // means there's no node
      this.head = newNode;  // set head to newNode (value of whatever) and tail to newNode (next to null)
      this.tail = newNode;
      return;  // exit because we only needed to create a new node
    } // otherwise...you need to add to tail
    const placeHolder = this.tail;  // let a placeHolder have whatever value of the tail.
    placeHolder.next = newNode;  // set the next property to newNode (next to null)
    this.tail = newNode;  // set this.tail to have value of newNode (value of whatever)
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {  // if the head is null that means there's no nodes
      return null;
    }
    const current = this.head;   // otherwise, define a node and set it to this.head(node will have a value of whatever)
    this.head = current.next;    // set the value of whatever to be the node's pointer
    if (this.head === null) {  // if that value is null,
      this.tail = current;  // define the tail to inherit node, which is a value of whatever. basically you're just moving pointers around
    }
    return current.value;  // want to see the value of the node you removed
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;
