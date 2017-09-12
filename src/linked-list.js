class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {};
    node.value = value;
    node.next = null;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    if (this.head) {
      const cached = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.head = null;
        this.tail = null;
      }
      return cached;
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
module.exports = LinkedList;
