class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(node) {
    this.storage.push(node);
  }
  dequeue() {
    const store = this.storage[0];
    this.storage.splice(0, 1);
    return store;
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
