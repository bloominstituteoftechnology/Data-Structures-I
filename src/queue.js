/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.store = {};
    this.start = -1;
    this.end = -1;
  }
  get size() {
    if (this.end === -1) return 0;
    return this.end - this.start;
  }
  enqueue(value) {
    this.store[++this.end] = value;
  }
  dequeue() {
    if (this.size) {
      const dequeued = this.store[++this.start];
      delete this.store[this.start];
      return dequeued;
    }
  }
}


module.exports = Queue;
