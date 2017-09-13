const LinkedList = require('../src/linked-list');

class Queue {
  constructor() {
    // this.queue = [];
    this.queue = new LinkedList();
  }
  enqueue(object) {
    // return this.queue.push(object);
    return this.queue.addToTail(object);
  }
  dequeue() {
    // return this.queue.shift();
    return this.queue.removeHead();
  }
  get size() {
    // return this.queue.length;
    return this.queue.size;
  }
}

module.exports = Queue;
