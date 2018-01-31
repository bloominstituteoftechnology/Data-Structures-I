// need to add to tail and head, remove from tail and head, contains.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) = {
    const newTail = {
      value,
      next = null;
      previous = null;
    }
    if(this.tail === null) {
      this.head = newTail;
      this.tail = newTail;
    }
    const oldTail = this.tail;
    oldTail.next = newTail;
    this.tail = newTail;
    newTail.previous = oldTail;
  }
  addToHead(value) = {
    const newHead = {
      value,
      next = null;
      previous = null;
    }
    if(this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    }
    const oldHead = this.head;
    oldHead.previous = newHead;
    this.head = newHead;
    this.head.next = oldHead;
  }
}
