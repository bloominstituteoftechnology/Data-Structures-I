class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(el) {
    return this.queue.push(el);
  }

  dequeue() {
    return this.queue.shift();
  }

  get size() {
    return this.queue.length;
  }
}

module.exports = Queue;
