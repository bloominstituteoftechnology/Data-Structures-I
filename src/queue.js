// What is a queue.

class Queue {

  constructor() {
    this.data = [];
    this.size = this.data.length;
  }

  dequeue() {
    if (this.data.length > 0) {
      const res = this.data.shift();
      this.updateSize();
      return res;
    }
  }

  enqueue(item) {
    this.data.push(item);
    this.updateSize();
  }

  size() {
    return this.size;
  }

  updateSize() {
    this.size = this.data.length;
  }
}

module.exports = Queue;
