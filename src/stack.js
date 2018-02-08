/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.length = 0;

    this.head = null;
    this.tail = null;
  }
  push(value) {
    this.length++;
    const newItem = {
      value,
      next: null,
    };

    if (this.head) {
      this.head = newItem;
      this.tail = newItem;
    }
  }
  pop() {
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


module.exports = Stack;
