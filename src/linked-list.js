class Node {
  constructor(value) {
    this.next = null;
    this.last = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
