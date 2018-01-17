class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const newNode = {
      next: null,
      prev: null,
      value: val,
    };

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  removeHead() {
    if (this.head === null) return;

    if (this.head.next === null) {
      const val = this.head.value;
      this.head = null;
      this.tail = null;
      return val;
    }

    const value = this.head.value;
    this.head = this.head.next;   // i think this would work?

    return value;
  }
}
