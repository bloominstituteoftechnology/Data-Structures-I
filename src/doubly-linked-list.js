class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const holder = this.tail; // current tail
    holder.next = newNode;
    this.tail = newNode;
    newNode.prev = holder;
    console.log(newNode, holder);
  }
  addToHead(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const holder = this.head;
    holder.prev = newNode;
    this.head = newNode;
    newNode.next = holder;
    console.log(newNode, holder);
  }
  removeFromHead() {
    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead;
  }

  removeFromTail() {
    const oldTail = this.tail;
    this.tail = oldTail.next;
    return oldTail;
  }
  delete(value) {
    let node = this.head;
    while (node !== null) {
      if (value === node.value) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      node = node.next;
    }
    return this;
  }
  moveToFront() {
    return this;
  }
  moveToBack() {
    return this;
  }
}
