class Queue {
  constructor(dataStore) {
    this.dataStore = [];
  }
  get size() {
    return this.dataStore.length;
  }
  enqueue(item) {
    this.dataStore.push(item);
  }
  dequeue() {
    return this.dataStore.shift();
  }
}

module.exports = Queue;
