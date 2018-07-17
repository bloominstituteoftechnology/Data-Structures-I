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
    const node = {
      value,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
/* const newNode = {
value: item,
next: null
};
if (this.head === null) {
this.head = newNode;
this.tail = newNode;
return;
}
if (this.head.next === null) {
this.tail = newNode;
this.head.next = newNode;
return;
}
this.tail.next = newNode;
this.tail = newNode;
*/
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) return null;
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
/* if (this.head === null) return;
if (this.head.next === null) {
const reference = this.head;
this.head = null;
this.tail = null;
return reference;
}
const value = this.head.value;
this.head = this.head.next;
return value;
*/
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
  if (this.head === null) return false;
//here we are using recursive function.( or you can use while loop)
const searchLinkedList = (node) => {
if (node.value === value) return true;
if (node.next === null) return false;
return searchLinkedList(node.next);
};
return searchLinkedList(this.head)
  }
}
module.exports = LinkedList;
