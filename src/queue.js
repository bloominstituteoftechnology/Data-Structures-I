class Queue {
  constructor() {
    this.size = 0;
    this.data = [];
  }
  enqueue(value) {
    this.size += 1;
    this.data.push(value);
  }
  dequeue() {
    if (this.size > 0) {
      this.size -= 1;
    }
    return this.data.shift();
  }
  size() {
    return this.size;
  }
}

module.exports = Queue;
