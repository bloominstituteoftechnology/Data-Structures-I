class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    const storage = this.arr[0];
    this.arr.splice(0, 1);
    return storage;
  }
  get size() {
    return this.arr.length;
  }
}

module.exports = Queue;
