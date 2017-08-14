class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(input) {
    // return this.arr.shift(input);
    return this.arr.push(input);
  }
  dequeue() {
    return this.arr.shift();
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Queue;