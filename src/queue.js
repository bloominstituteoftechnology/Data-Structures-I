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

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    if (this.size === 0) return;
    const tempValue = this.storage[0];
    this.storage.shift();
    return tempValue;
  }

  size() {
    return this.storage.length;
  }
}


// Queue.prototype.enqueue = function (item) {
//   // Check to see if value is defined
//   if (item) {
//     this.storage[this.count] = item;
//     this.count++;
//   }
// };

// Queue.prototype.dequeue = function () {
//   if (this.count - this.lowestCount === 0) {
//     return undefined;
//   }
// };

module.exports = Queue;
