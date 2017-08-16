const LinkedList = require('./linked-list');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.count = 0;
  }
  enqueue(item) {
    this.queue.addToTail(item);
    this.count++;
  }
  dequeue() {
    if (this.count > 0) this.count--;
    return this.queue.removeHead();
  }
  get size() {
    return this.count;
  }
}


module.exports = Queue;
