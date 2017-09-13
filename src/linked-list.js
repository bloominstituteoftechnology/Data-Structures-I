class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(data) {
    const node = {
      value: data,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    if (this.head.next === null) {
      this.head.next = node;
      this.tail = node;
      return;
    }
    this.head = node;
  }
  removeHead() {
    const removed = this.head.value;
    this.head = this.head.next;
    return removed;
  }
  contains(item) {
    let index = this.head;
    while (index.next !== null) {
      if (index.value === item) {
        return true;
      } index = index.next;
    } return false;
  }
}

module.exports = LinkedList;
