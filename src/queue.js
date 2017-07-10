class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    return this.queue.shift();
  }
  get size() {
    const size = this.queue.length;
    return size;
  }
}

module.exports = Queue;
