class Queue {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  enqueue(num) {
    ++this.size;
    this.arr.unshift(num);
  }
  dequeue() {
    if (this.size > 0) --this.size;
    return this.arr.pop();
  }
  size() {
    return this.size;
  }
}

module.exports = Queue;
