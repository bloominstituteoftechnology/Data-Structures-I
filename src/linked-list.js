class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  makeNode(data) {
    this.data = data;
    this.next = {};
  }
  addToTail(data) {
    const node = LinkedList.makeNode(data);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    const current = this.head;
    this.head = this.head.next;
    return current;
  }
  contains(value) {
    let inHere = false;
    let current = this.start;
    while (current !== null) {
      if (current === value) {
        inHere = true;
        current = current.next;
      }
      inHere = false;
      current = current.next;
    }
    return inHere;
  }
}

module.exports = LinkedList;
