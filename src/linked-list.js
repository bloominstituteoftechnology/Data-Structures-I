function Node(val) {
  this.value = val;
  this.next = null;
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(val) {
    const newNode = new Node(val);
    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }
  removeHead() {
    const headVal = this.head.value;
    this.head = this.head.next;
    return headVal;
  }
  contains(val) {
    let currNode = this.head;
    while (currNode.value !== val) {
      currNode = currNode.next;
      if (currNode === null) {
        return false;
      }
    }
    return true;
  }
}
module.exports = LinkedList;
