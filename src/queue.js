class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  size() {
    return this.size.length;
  }

  enqueue(item) {
    this.size++;
    return this.storage.push(item);
  }

  dequeue() {
    if (this.storage.length === 0) return;
    this.size--;
    return this.storage.shift();
  }
}

module.exports = Queue;
