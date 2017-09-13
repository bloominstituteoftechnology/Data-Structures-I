class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    return this.arr.shift();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Queue;
