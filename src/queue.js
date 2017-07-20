class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
  }
  dequeue(value) {
    return this.arr.shift(value);
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Queue;
