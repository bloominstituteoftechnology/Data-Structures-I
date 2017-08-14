class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(element) {
    const node = {
      value: element,
      next: null
    };

    if (this.head === null) {
      this.head = node; // correct
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    // `removeHead` removes and returns the head node.
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;
