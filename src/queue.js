/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.size = 0;
    this.lowestSize = 0;
    this.storage = {};
  }

  size() {
    return this.size - this.lowestSize;
  }

  enqueue(value) {
    this.storage[this.size] = value;
    ++this.size;
  }

  dequeue() {
    if (this.size - this.lowestSize === 0) return undefined;

    const result = this.storage[this.lowestSize];
    delete this.storage[this.lowestSize];
    ++this.lowestSize;
    return result;
  }
}

module.exports = Queue;
