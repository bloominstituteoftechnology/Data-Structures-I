class Queue {
  constructor(options) {
    this.data = [];
    this.size = 0;
  }
  enqueue(val) {
    this.data.push(val);
    this.size++;
  }
  dequeue() {
    if (this.size > 0) {
      this.size--;
    }
    return this.data.shift();
  }
  size() {
    return this.size;
  }

}

module.exports = Queue;
