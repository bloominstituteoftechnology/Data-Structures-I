class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  get size() {
    return this.queue.length;
  }
}


module.exports = Queue;
