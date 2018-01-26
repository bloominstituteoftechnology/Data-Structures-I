/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

const DLL = require('./doubly-linked-list');

class Queue {
  constructor() {
    this.storage = new DLL();
    this.count = 0;
  }

  enqueue(value) {
    this.storage.addToTail(value);
    return ++this.count;
  }

  dequeue() {
    if (this.count === 0) return;
    const { value } = this.storage.removeFromHead();
    this.count--;
    return value;
  }

  get size() {
    return this.count;
  }
}

module.exports = Queue;
