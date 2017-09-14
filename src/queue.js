class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(...arg) {
    return this.array.push(...arg);
  }
  dequeue(item) {
    return this.array.shift(item);
  }
  get size() {
    return this.array.length;
  }
}

module.exports = Queue;
