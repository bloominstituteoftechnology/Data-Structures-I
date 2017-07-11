class Queue {
  constructor() {
    this.structure = [];
  }

  get size() {
    return this.structure.length;
  }

  enqueue(value) {
    this.structure.unshift(value);
  }

  dequeue() {
    return this.structure.pop();
  }
}

module.exports = Queue;
