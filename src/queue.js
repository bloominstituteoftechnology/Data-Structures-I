/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.counter = 0;
    this.arrHolder = [];
  }
  enqueue(item) {
    this.arrHolder[this.counter] = item;
    this.counter++;
  }
  dequeue() {
    if (this.counter !== 0) {
      const tempHolder = this.arrHolder[0];
      this.arrHolder.splice(0, 1);
      this.counter--;
      return tempHolder;
    }
  }
  get size() {
    return this.counter;
  }
}

module.exports = Queue;
