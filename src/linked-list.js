class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = {
      next: null,
      value,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (this.head === null) return;
    if (this.head.next === null) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  contains(value) {
    if (this.head === null) return false;
    const searchList = (node) => {
      if (node.value === value) return true;
      if (node.next === null) return false;
      return searchList(node.next);
    };
    return searchList(this.head);
  }
}

module.exports = LinkedList;
