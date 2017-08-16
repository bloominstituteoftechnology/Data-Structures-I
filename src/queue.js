class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
