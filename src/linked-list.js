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
  contains() {
    console.log(this);
  }
}

module.exports = LinkedList;
