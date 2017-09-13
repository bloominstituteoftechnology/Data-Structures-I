class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {};
    node.value = value;
    node.next = null;
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail === null) {
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }
  removeHead() {
    if (this.head === null) {
      return null;
    }
    const store = this.head.value;
    this.head = this.head.next;
    this.tail = this.tail.next;
    return store;
  }
  contains(item) {
    let node = this.head;
    while (node) {
      if (node.value === item) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;
