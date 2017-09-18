class Queue {
  constructor() {
    this.queue = {};
    this.size = 0;
    this.index = 0;
  }
  enqueue(item) {
    this.queue[this.size] = item;
    this.size++;
    return true;
  }
  dequeue() {
    if (this.size - 1 < 0) return 0;
    const value = this.queue[this.index];
    delete this.queue[this.index];
    this.size--;
    this.index++;
    return value;
  }
  size() {
    return this.size;
  }
}

module.exports = Queue;
