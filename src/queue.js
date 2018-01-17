/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  enqueue(item) {
    this.storage.push(item);
    this.size++;
    // return this.storage[0];
  }
  dequeue(item) {
    if (this.storage.length === 0) return 'empty';
    this.size--;
    return this.storage.shift();
  }
  size() {
    if (this.size < 0) return 0;
    return this.size;
  }
}

module.exports = Queue;
