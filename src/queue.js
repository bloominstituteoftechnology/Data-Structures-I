class Queue {
  constructor() {
    this.queueStorage = [];
  }
  enqueue(x) {
    this.queueStorage.push(x);
  }
  dequeue() {
    return this.queueStorage.shift();
  }
  get size() {
    return this.queueStorage.length;
  }
}

module.exports = Queue;
