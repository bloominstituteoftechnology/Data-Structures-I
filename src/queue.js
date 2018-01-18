/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    const newNode = {
      value,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  dequeue() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;

    const node = this.head;
    this.head = this.head.next;
    this.length--;
    return node.value;
  }
  get size() {
    return this.length;
  }
}
const queue = new Queue();

module.exports = Queue;
