class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
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
    if (this.head === null) {
      return null;
    }
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  contains(value) {
    if (this.head === null) {
      return false;
    }
    const searchLinkedList = (node) => {
      if (node.value === value) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
}

module.exports = LinkedList;
