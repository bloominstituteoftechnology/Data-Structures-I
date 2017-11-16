/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
    this.length = 0;
  }
  enqueue(element) {
    this.length++;
    return this.dataStore.push(element);
  }
  dequeue() {
    this.length--;
    return this.dataStore.shift();
  }
  get size() {
    return this.dataStore.length;
  }
}

module.exports = Queue;
