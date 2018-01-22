/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = [];
  }

  get size() {
    return this.storage.length; // get property that returns the size of the queue
  }

  enqueue(item) {
    this.storage.push(item); // pushes the data onto the queue
  }

  // Guessing there is a better way to do this...
  dequeue(item) {
    const removed = this.storage.splice(0, 1); // removes the first item from the queue
    const remVar = removed[0]; // reassigns the spliced array to a type variable
    return remVar;
  }
}

module.exports = Queue;
