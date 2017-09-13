class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  enqueue(value) {
    this.size++;
    return this.storage.push(value);
  }
  dequeue(value) {
    if (this.size) {
      this.size--;
    }
    return this.storage.shift();
  }
  size() {
    return this.size;
  }
}

module.exports = Queue;
