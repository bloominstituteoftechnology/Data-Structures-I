/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

const LinkedList = require('./linked-list');

class Queue {
  // constructor() {
  //   this.storage = [];
  // }

  constructor() {
    this.storage = new LinkedList();
  }

  // get size() {
  //   return this.storage.reduce((count, item) => ++count, 0);
  // }

  get size() {
    let node = this.storage.head;
    let count = 0;
    while (node !== null) {
      node = node.next;
      count++;
    }
    return count;
  }

  // enqueue(item) {
  //   this.storage = this.storage.concat(null).map((el, index) => {
  //     return index === 0 ? el : this.storage[index - 1];
  //   });
  // }

  enqueue(item) {
    this.storage.addToTail(item);
  }

  // dequeue(item) {
  //   const top = this.storage[this.size - 1];
  //   this.storage.splice(this.size - 1);
  //   return top;
  // }

  dequeue(item) {
    return this.storage.removeHead();
  }
}

module.exports = Queue;
