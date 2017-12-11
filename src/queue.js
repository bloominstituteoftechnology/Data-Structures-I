class Queue {
  constructor() {
    this.queue = [];
  }
  get size() {
    return this.queue.length;
  }

  enqueue(item) {
    if (this.size === 0) this.queue[0] = item;
    else {
      this.queue.unshift(item);
    }
  }

  dequeue() {
    return this.queue.splice(this.size - 1, 1)[0];
  }
}

module.exports = Queue;
