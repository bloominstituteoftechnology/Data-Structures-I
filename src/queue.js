// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(item) {
//     this.queue.push(item);
//   }

//   dequeue() {
//     return this.queue.shift();
//   }

//   get size() {
//     return this.queue.length;
//   }
// }

// ****** LINKED LIST VERSION *******

const LinkedList = require('./linked-list');

class Queue {
  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(item) {
    this.storage.addToTail(item);
  }

  dequeue() {
    return this.storage.removeHead();
  }

  get size() {
    return this.storage.size;
  }
}

module.exports = Queue;
