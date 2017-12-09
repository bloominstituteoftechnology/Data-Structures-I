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
    this.size += 1;
    return this.storage.unshift(item);
  }

  dequeue() {
    return this.storage.pop();
  }
}

const test = new Queue();

// console.log(Object.getPrototypeOf(test).hasOwnProperty('enqueue'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('dequeue'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('size'));

test.enqueue(true);
test.enqueue('hi');
test.enqueue(null);
test.enqueue(77);
console.log(test.dequeue());

module.exports = Queue;
