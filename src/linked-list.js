class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(val) {
    const newNode = {
      value: val,
      prev: null,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
      return value;
    }
  }

  contains(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
