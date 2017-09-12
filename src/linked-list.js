class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    if (this.head === null) {
      this.head = {
        value,
        next: null
      };
      this.tail = this.head;
    } else {
      this.tail.next = {
        value,
        next: null
      };
      this.tail = this.tail.next;
    }
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
