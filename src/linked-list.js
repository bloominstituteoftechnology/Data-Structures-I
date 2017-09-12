class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    if (this.tail === null) {
      this.tail = {
        next: null,
        value: item
      };
      this.head = this.tail;
    } else {
      this.tail.next = {
        next: null,
        value: item
      };
      this.tail = this.tail.next;
    }
  }
  removeHead() {
    const temp = this.head;
    this.head = this.head.next;
    return temp.value;
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
