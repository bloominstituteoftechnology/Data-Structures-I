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
    this.length++;
    const newNode = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (!this.head) return null;
    this.length--;
    if (!this.head.next) this.tail = null;

    const node = this.head.value;
    this.head = this.head.next;
    return node;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let current = this.head;
    while (current.next !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
// set a variable that references the current node, starting with the head
// loop through list until either I find a value or the current node's next is null
// Within loop, use current node's next property to update current node variable for next loop operation
// if I find the value, return true
// don't find value, return false

module.exports = LinkedList;
