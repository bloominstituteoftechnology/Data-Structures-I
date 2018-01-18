/* eslint-disable */
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  size() {
    return this.length;
  }
  enqeue(items) {
    this.length++;
    const newNode = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    return this.storage.shift();
  }
}

module.exports = Queue;
