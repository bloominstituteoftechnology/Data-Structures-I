class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
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
  dequeue() {
    this.length--;
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }
  get size() {
    return this.length;
  }
}

module.exports = Queue;
