class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(elements) {
    this.storage.push(elements);
  }
  dequeue() {
    return this.storage.shift();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
