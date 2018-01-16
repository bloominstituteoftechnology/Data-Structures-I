/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = {};
    this.firstIn = 0;
    this.lastIn = 0;
  }
  get size() {
    const difference = this.lastIn - this.firstIn;
    return difference;
  }
  enqueue(value) {
    this.storage[this.lastIn] = value;
    this.lastIn++;
  }
  dequeue() {
    if ((this.lastIn - this.firstIn) === 0) return;
    const removed = this.storage[this.firstIn];
    delete this.storage[this.firstIn];
    this.firstIn++;
    return removed;
  }
}

module.exports = Queue;
