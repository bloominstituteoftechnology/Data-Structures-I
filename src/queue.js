class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    this.length++;       // this.storage.push(value);
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
  dequeue() {    // this.storage.shift();
    this.length--;
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }
  get size() {
    const size = this.length;
    if (this.head === this.tail) return 0;
    return size;
  }
}

module.exports = Queue;
