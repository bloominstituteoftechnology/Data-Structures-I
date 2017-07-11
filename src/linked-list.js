class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(newValue) {
    if (this.head === null) {
      this.head = {
        value: newValue,
        next: null
      };
      this.tail = this.head;
    } else {
      this.tail.next = LinkedList.constructor();
      this.tail = this.tail.next;
    }
    this.tail.value = newValue;
  }
  removeHead() {
    const rem = this.head;
    this.head = this.head.next;
    return rem.value;
  }
  contains(item) {
    let current = this.head;
    // return this.current.next.value;
    while (this.current.value !== item) {
      current = this.current.next;
    }
    if (this.current.value !== item) {
      return false;
    }
    return true;
  }
}

module.exports = LinkedList;
