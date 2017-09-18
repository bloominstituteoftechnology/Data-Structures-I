class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    const node = { value: item, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    const removedValue = this.head.value;
    const nextNode = this.head.next;
    this.head = nextNode;
    return removedValue;
  }
  contains(item) {
    if (!this.head) return false;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === item) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}
module.exports = LinkedList;
