class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(any) {
    this.storage.push(any);
  }

  dequeue() {
    return this.storage.shift();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
