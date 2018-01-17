/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.items = {};
    this.size = 0;
    this.enqueue = this.enqueue;
    this.dequeue = this.dequeue;
  }

  enqueue(item) {
    if (this.size === 0) {
      this.items[0] = item;
      this.size++;
    } else {
      const allItems = Object.keys(this.items).map(el => this.items[el]);
      allItems.unshift(item);

      for (let i = 0; i < allItems.length; i++) {
        this.items[i] = allItems[i];
      }

      this.size++;
    }
  }

  dequeue() {
    if (this.size === 0) {
      return 0;
    }

    let firstInQueue = '';
    let allItems = Object.keys(this.items).map(el => this.items[el]);
    firstInQueue = allItems[allItems.length - 1];
    allItems = allItems.slice(0, allItems.length - 1);

    for (let i = 0; i < allItems.length - 1; i++) {
      this.items[i] = allItems[i];
    }

    delete this.items[this.size - 1];
    this.size--;

    return firstInQueue;
  }

  size() {
    return this.size;
  }
}

module.exports = Queue;
