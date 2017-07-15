class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(element) {
    this.arr.push(element);
  }
  dequeue() {
    return this.arr.shift();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Queue;
