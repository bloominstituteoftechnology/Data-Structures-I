class Queue {
  constructor(options) {
    this.newArr = [];
  }
  enqueue(value) {
    return this.newArr.unshift(value);
  }
  dequeue() {
    return this.newArr.pop();
  }
  get size() {
    return this.newArr.length;
  }
}

module.exports = Queue;
