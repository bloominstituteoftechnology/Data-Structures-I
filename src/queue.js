/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = [];
    this.storageLength = 0;
  }
  get size() {
    return this.storageLength;
  }
  enqueue(value) {
    this.storage[this.storageLength] = value;
    this.storageLength++;
  }
  dequeue() {
    if (this.storageLength > 0) {
      const updatedQueue = [];
      const firstInFirstOut = this.storage[0];
      for (let i = 1; i < this.storageLength; i++) {
        updatedQueue[i - 1] = this.storage[i];
      }
      this.storage = updatedQueue;
      this.storageLength--;
      return firstInFirstOut;
    }
  }
}

module.exports = Queue;
