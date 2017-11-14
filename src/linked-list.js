/* eslint-disable class-methods-use-this */
// https://www.interviewcake.com/article/python/data-structures-coding-interview?collection=dsa#linked-lists
// https://medium.com/@mrjimbot/linked-list-data-structure-javascript-3268e103597
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
    // create the node
    const newNode = {
      value,
      next: null,
    };
    // if there are no nodes alreay point head and tail to the node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { // otherwise add it to the last node and change the pointers
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {
      return null;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.addToTail(1);
// myLinkedList.addNode(2);
myLinkedList.addToTail(3);
// myLinkedList.addToTail(4);
console.log(myLinkedList);
myLinkedList.removeHead();
console.log(myLinkedList);
myLinkedList.removeHead();
console.log(myLinkedList);
myLinkedList.removeHead();
console.log(myLinkedList);

module.exports = LinkedList;
