class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    return this.storage.shift();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
