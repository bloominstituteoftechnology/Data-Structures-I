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
    this.size++;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;

    const node = this.head;
    this.head = this.head.next;
    this.size--;
    return node.value;
  }
  get length() {
    return this.size;
  }

  removeTail() {
    if (!this.tail) return null;
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      return node.value;
    }
    let current = this.head;
    let i = 0;
    while (i < this.length - 2) {
      current = current.next;
      i++;
    }
    const node = current.next;
    current.next = null;
    this.size--;
    return node.value;
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let returnValue = false;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.value);
      if (currentNode.value === value) {
        returnValue = true;
      }
      currentNode = currentNode.next;
    }
    return returnValue;
  }
}

const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);

module.exports = LinkedList;
