/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.i = 0;
  }
  enqueue(v) {
    this.i++;
    const newNode = {
      v,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    this.i = (this.i > 1) ? this.i - 1 : 0;
    if (!this.head) return 0;
    if (!this.head.next) this.tail = null;
    const returnValue = this.head.v;
    this.head = this.head.next;
    return returnValue;
  }
  get size() {
    return this.i;
  }

}

module.exports = Queue;
