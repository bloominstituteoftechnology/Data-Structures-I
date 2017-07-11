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
    const thingToAdd = new Node(element);
    let checkNode = this.head;
    if (!checkNode) {
      this.head = thingToAdd;
      this.tail = this.head;
      return thingToAdd;
    }
    while (checkNode.next) {
      checkNode = checkNode.next;
    }
    checkNode.next = thingToAdd;
    this.tail = checkNode.next;
    return this.tail;
  }
  removeHead() {
    const nodeBeingRemoved = this.head.value;
    this.head = this.head.next;
    return nodeBeingRemoved;
  }
  contains(item) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === item) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
