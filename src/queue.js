/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = [];
  }
  get size() {
    return this.newestIndex - this.oldestIndex;
  }
  enqueue(item) {
    this.storage[this.newestIndex] = item;
    this.newestIndex++;
  }
  dequeue(item) {
    const oldestIndex = this.oldestIndex;
    const deletedItem = this.storage[oldestIndex];
    if (this.newestIndex === oldestIndex) return 0;
    delete this.storage[oldestIndex];
    this.oldestIndex++;
    return deletedItem;
  }
  }


module.exports = Queue;
