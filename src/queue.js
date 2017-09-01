class Queue {
/*
* Should have the methods: `enqueue`, `dequeue`, and a getter for the property `size`
* `enqueue` should add an item to the back of the queue.
* `dequeue` should remove an item from the front of the queue.
* `size` should return the number of items in the queue.
*/
  constructor() {
    this.dataStore = [];
  }
  enqueue(item) {
    this.dataStore.push(item);
  }
  dequeue() {
    return this.dataStore.shift();
  }
  get size() {
    return this.dataStore.length;
  }
}

module.exports = Queue;
