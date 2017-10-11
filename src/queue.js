/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor(maxSize = 100) {
    this.maxSize = maxSize;
    this.queue = [];
  }

  enqueue(item) {
    if (this.size > 100) {
      return;
    }
    this.queue.push(item);
  }

  dequeue() {
    if (this.queue.length === 0) {
      return null;
    }
    const result = this.queue[0];
    this.queue.shift();
    return result;
  }

  get size() {
    return this.queue.length;
  }

}

module.exports = Queue;
