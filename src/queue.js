class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(x) {
    return this.storage.push(x);
  }
  dequeue(y) {
    return this.storage.shift(y);
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
