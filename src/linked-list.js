class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(data) {
    const newNode = {
      value: data,
      next: null
    };

    // if empty linked list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // if one node in linked list
    if (this.head.next === null) {
      this.head.next = newNode;
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
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  contains(query) {
    if (this.head === null) return false;
    const searchLinkList = (node) => {
      if (node.value === query) return true;
      // check if next node is the tail, which means didnt find query
      if (node.next === null) return false;
      return searchLinkList(node.next);
    };
    return searchLinkList(this.head);
  }
}

module.exports = LinkedList;
