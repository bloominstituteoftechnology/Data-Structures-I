const LinkedList = require('./linked-list');
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

// example of Queue using linked list.
class Queue {
  constructor() {
    this.storage = new LinkedList();
  }
  enqueue(value) {
    this.storage.addToTail(value);
  }
  dequeue() {
    return this.storage.removeHead();
  }
  get size() {
    return this.storage.size;
  }
}
/*
// example of Queue using array.
class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    if (this.size === 0) return;
    const tempValue = this.storage[0];
    this.storage.shift();
    return tempValue;
  }
  get size() {
    return this.storage.length;
  }
}
*/
module.exports = Queue;
