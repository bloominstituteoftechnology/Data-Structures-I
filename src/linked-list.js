class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = node;
    } else {
      let thNode = this.head;
      while (thNode.next) {
        thNode = thNode.next;
      }
      thNode.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    const headOff = this.head.value;
    this.head = this.head.next;
    return headOff;
  }
  contains(value) {
    let isItHere = this.head;
    while (isItHere.next) {
      if (isItHere.value === value) return true;
      isItHere = isItHere.next;
    }
    return false;
  }
}

module.exports = LinkedList;
