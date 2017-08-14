class Queue {
  constructor() {
    this.queue = [];
    this.size = this.queue.length;
  }
  enqueue(x) {
    this.queue.unshift(x);
    this.size = this.size + 1;
  }
  dequeue() {
    if (this.size > 0) {
      this.size = this.size - 1;
    }
    return this.queue.pop();
  }
  size() {
    this.size = 0;
  }

}

module.exports = Queue;
