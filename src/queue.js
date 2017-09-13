class Queue {
  constructor() {
    this.contents = [];
  }


  enqueue(item) {
    this.contents.push(item);
  }

  dequeue() {
    const dequeued = this.contents[0];
    this.contents.shift();
    return dequeued;
  }


  get size() {
    return this.contents.length;
  }
}

module.exports = Queue;
