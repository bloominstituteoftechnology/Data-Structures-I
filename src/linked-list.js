class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const newNode = {
      value,
      next: null
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeHead(node) {
    this.length--;
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }
  contains(value) {
    let checkNode = this.head;
    let count = 0;
    if (value > this.length) return undefined;
    while (count < value) {
      checkNode = checkNode.next;
      count++;
    }
    if (checkNode) return true;
  }
  }


module.exports = LinkedList;
