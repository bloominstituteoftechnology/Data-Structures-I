/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.storage = {};
  }

  get size() {
    return this.count - this.lowestCount;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    ++this.count;
  }

  dequeue() {
    if (this.count - this.lowestCount === 0) return undefined;

    const result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    ++this.lowestCount;
    return result;
  }
}

module.exports = Queue;
