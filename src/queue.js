class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(...args) {
    this.queue.push(...args);
  }
  dequeue(...args) {
    return this.queue.shift(...args);
  }
  get size() {
    return this.queue.length;
  }
}

module.exports = Queue;

// * Should have the methods: `enqueue`, `dequeue`, and a getter for the property `size`
// * `enqueue` should add an item to the back of the queue.
// * `dequeue` should remove an item from the front of the queue.
// * `size` should return the number of items in the queue.
