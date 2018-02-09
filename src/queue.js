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
  enqueue(item) {
    this.storage[this.storageLength] = item;
    this.storageLength++;
  }
  dequeue() {
    if (this.storageLength === 0) return;
    const firstItem = this.storage[0];
    for (let i = 0; i < this.storage.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.storage[this.storageLength] === null;
    this.storageLength--;
    return firstItem;
  }
}

module.exports = Queue;
