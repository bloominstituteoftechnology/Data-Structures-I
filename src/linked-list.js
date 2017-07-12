class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(newValue) {
    const node = {
      value: newValue,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.head.value = newValue;
      this.tail = node;
      this.tail.value = newValue;
    } else if (this.head === this.tail) {
      this.head.next = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
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
    while (current.next !== null) {
      if (current.value === item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;
