class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(input) {
    const node = {
      value: input,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    const headObj = this.head.value;
    if (this.head !== null) {
      this.head = this.head.next;
    }
    return headObj;
  }
  contains(input) {
    const cb = (node) => {
      if (node.value === input) return true;
      return false;
    };
    if (this.head.value === input) return true;
    let current = this.head.next;
    let bool = false;
    while (current.next !== null) {
      bool = cb(current);
      current = current.next;
    }
    return bool;
  }
}

module.exports = LinkedList;
