class Queue {
  constructor() {
    this.store = [];
    this.total = 0;
  }

  enqueue(val) {
    this.store.push(val);
    this.total++;
  }

  dequeue() {
    if (this.total <= 0) return undefined;
    this.total--;
    return this.store.shift();
  }

  get size() {
    return this.total;
  }
}

module.exports = Queue;
