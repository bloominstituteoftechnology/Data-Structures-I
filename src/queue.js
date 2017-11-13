/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    // Total number of items enqueued
    this.length = 0;
    // Head & Tail in Storage marks the first and last active items
    this.head = null;
    this.tail = null;
  }

  // Adds new item to the storage Queue
  enqueue(value) {
    // Incrementing the Total number of items
    this.length++;
    // Initializing new items in Object form
    const newItem = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }
  }

  // Removes the first/earliest item from the storage
  dequeue() {
    // Returns the 0 when the storage is empty.
    if (this.length === 0) return 0;

    // Decrementing the Total number of items
    this.length--;

    if (!this.head) return null;
    if (!this.head.next) this.tail = null;

    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }

  // Returns Total number of items in the storage
  get size() {
    return this.length;
  }
}

module.exports = Queue;
