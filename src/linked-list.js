class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    const node = { value, next: null };
    // Both head & tail are empty, new LinkedList
    if (this.head === null && this.tail == null) {
      // it's an empty list.  make head and tail same thing (cause they are!)
      this.head = node;
      this.tail = this.head;
    } else {
      // This is not a new list
      // The current head node.
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (this.head.next === null) this.tail = null;
    this.head = this.head.next;
    removedHead.next = null;
    return removedHead.value;
  }

  contains(val) {
    let currentNode = this.head;
    if (currentNode.value === val) return true;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === val) return true;
    }
    return false;
  }
}

module.exports = LinkedList;
