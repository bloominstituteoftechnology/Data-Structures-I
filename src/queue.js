class Queue {
  constructor(options) {
    this.queue = [];
    this.size = 0;
  }
  enqueue(items) {
    this.queue.push(items);
    this.size = this.queue.length;
  }
  dequeue() {
    if (this.queue.length) {
      const shift = this.queue.shift();
      this.size = this.queue.length;
      return shift;
    }
    return Queue;
  }
  size() {
    return this.size;
  }
}

const queue = new Queue();
module.exports = Queue;
