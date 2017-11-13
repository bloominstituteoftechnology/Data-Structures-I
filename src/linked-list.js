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
  addToTail(value){
    let newNode = new Node(value);
    if(this.tail === null && this.head === null){
      this.tail = newNode;
      this.head = newNode;
    } else if(this.tail === null){
      tailNode.head = this.tail;
      this.tail = tailNode;
    } else{
      this.tail.tail = newNode;
      this.tail = newNode;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if(this.head !== null){
      let headVal = this.head.value;
      this.head = this.head.tail;
      return headVal;
    }
    return null;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.tail;
    }
    return false;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.head = null;
    this.tail = null;
  }
}

module.exports = LinkedList;
