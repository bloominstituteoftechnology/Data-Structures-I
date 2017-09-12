class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
      next: null
    };
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  contains(value) {
    let node = this.head;
    while (node.next !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;
