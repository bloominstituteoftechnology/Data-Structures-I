/* eslint-disable */
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.length = 0;

    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
    this.length++;
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
  dequeue() {
    if (this.length === 0) return 0;

    this.length--;

    if (!this.head) return null;
    if (!this.head.next) this.tail = null;

    const returnVal = this.head.value;
    this.head = this.head.next;
    return returnVal;
  }
  get size() {
    return this.length;
  }
}
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.size = 0;
//   }
//   enqueue(item) {
//     this.queue.push(item);
//     this.size++;
//   }
//   dequeue(item) {
//     if (this.queue.length === 0) return 'empty';
//     this.size--;
//     return this.queue.shift();
//   }
//   size() {
//     if (this.size < 0) return 0;
//     return this.size;
//   }
// }
