class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    if (!this.head) {
      // it's the first item
      this.head = {
        value,
        next: null
      };
      this.tail = this.head;
    } else {
      // put it at the end
      this.tail.next = {
        value,
        next: null
      };
      this.tail = this.tail.next;
    }
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  contains(value) {
    if (!this.head) {
      return false;
    }
    let iter = this.head;
    while (iter.next !== null) {
      if (iter.value === value) {
        return true;
      }
      iter = iter.next;
    }
    return false;
  }
}

module.exports = LinkedList;
