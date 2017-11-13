/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.decCount = 0;
  }
  get size() {
    return this.count;
  }
  enqueue(item) {
    this.storage[this.count] = item;
    this.count++;
  }
  dequeue() {
    if (this.count === '0' || this.decCount === this.count);
    this.count--;
    const oldItem = this.storage[this.decCount];
    delete this.storage[this.decCount++];
    return oldItem;
  }

}
//TESTING
let obj = new Queue;

obj.enqueue(true);
obj.enqueue('hi');
obj.enqueue(null);
obj.enqueue(77);
console.log(obj);
console.log(obj.dequeue())//.toBe(true);
console.log(obj);
console.log(obj.dequeue())//.toBe('hi');
console.log(obj.dequeue())//.toBe(null);
obj.dequeue()//.toBe(77);

module.exports = Queue;
