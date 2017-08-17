class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    const node = {
      value: item,
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      return;
    }
    if (this.head.next === null) {
      this.tail = node;
      this.head.next = node;
      return;
    }
    const tail = this.tail;
    tail.next = node;
    this.tail = node;
  }
  removeHead() {
    if (this.head.next === null) {
      return this.head.value;
    }
    const temporary = this.head;
    this.head = this.head.next;
    return temporary.value;
  }
  contains(newItem) {
    let ourNode = this.head;
    while (ourNode.next !== null) {
      if (ourNode.value === newItem) {
        return true;
      }
      ourNode = ourNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
