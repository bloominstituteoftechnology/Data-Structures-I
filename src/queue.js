class Queue {
  constructor() {
    this.newQueue = [];
  }
  enqueue(item) {
    return this.newQueue.push(item);
  }
  dequeue() {
    return this.newQueue.shift();
  }
  get size() {
    return this.newQueue.length;
  }
}

module.exports = Queue;
