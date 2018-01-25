const DoublyLinkedList = require('./doubly-linked-list');
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    // this.items = [];
    this.items = new DoublyLinkedList();
    this.size = 0;
  }
  size() {
    return this.size;
  }
  enqueue(item) {
    this.size++;
    // this.items.push(item);
    this.items.addToTail(item);
  }
  dequeue() {
    if (this.size === 0) {
      return 0;
    }
    --this.size;
    // return this.items.shift();
    return this.items.removeFromHead().value;
  }
}

module.exports = Queue;
