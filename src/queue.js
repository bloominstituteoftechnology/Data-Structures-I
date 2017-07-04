class Queue {
  constructor() {
    this.queue = [];
  }
  get size() {
    return this.queue.length;
  }
  enqueue(val) {
    this.queue.push(val);
  }
  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
