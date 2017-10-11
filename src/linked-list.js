class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    const node = {
      value: item,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      return;
    }
    if (this.head.next === null) {
      this.head.next = node;
      this.tail = node;
    }
    this.tail = node;
    this.tail.next = node;
  }
  removeHead() {
    const oldHead = this.head.value;
    this.head = this.head.next;
    this.tail = this.tail.next;
    return oldHead;
  }
  contains(newItem) {
    let node1 = this.head;
    while (node1) {
      if (node1.value === newItem) {
        return true;
      }
      node1 = node1.next;
    }
    return false;
  }
}

module.exports = LinkedList;
