class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeHead() {
    const previousHead = this.head;
    this.head = this.head.next;
    return previousHead.value;
  }
  contains(element) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === element) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
