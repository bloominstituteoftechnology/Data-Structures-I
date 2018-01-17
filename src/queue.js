/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  size() {
    return this.storage.length;
  }
  enqueue(item) {
    // this.storage.unshift(item);
    // return this.size;
    this.size++;
    this.storage.push(item);
  }
  dequeue() {
    // The shift() method removes the first element from an array and
    // returns that removed element. This method changes the length of the array.
    return this.storage.shift();
  }
}

module.exports = Queue;
