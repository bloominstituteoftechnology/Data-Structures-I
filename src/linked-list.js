class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const newNode = {
      value,
      next: null
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeHead() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  contains(value) {
    let nodeWalker = this.head;
    while (nodeWalker) {
      if (nodeWalker.value === value) {
        return true;
      }
      nodeWalker = nodeWalker.next;
    }
    return false;
  }
}

module.exports = LinkedList;
