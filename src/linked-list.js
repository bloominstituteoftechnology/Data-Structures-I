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
    };
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.tail = node;
      this.head = node;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const oldHead = this.head;
    this.head = this.head.next || null;
    return oldHead.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    const compare = (node, val) => {
      if (!node || !node.next) return false;
      if (node.value === val) return true;
      return compare(node.next, val);
    };
    return compare(this.head, value);
  }
}

module.exports = LinkedList;
