class Queue {
  constructor() {
    this.storage = [];
  }
  get size() { return this.storage.length; }
  enqueue(listItem) { return this.storage.push(listItem); }
  dequeue() { return this.storage.shift(); }
}
// * Should have the methods: `enqueue`, `dequeue`, and a getter for the property `size`
// * `enqueue` should add an item to the back of the queue.
// * `dequeue` should remove an item from the front of the queue.
// * `size` should return the number of items in the queue.
module.exports = Queue;
