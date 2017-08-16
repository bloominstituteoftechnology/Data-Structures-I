/**
 * #### Stacks
 * ### Extra Credit
 *  * If you used arrays as your underlying data structure for implementing stacks,
 * queues, and hash table buckets, convert these to use linked lists instead as the
 * underlying data structure. If you started off with linked lists, convert these to
 * use arrays. In order to do this, you'll need to export your linked list implementation
 * by wrapping it inside a `module.exports`. Just comment out your initial implementation;
 * don't delete perfectly good code!
 */

const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }
  add(item) {
    this.stack.addToHead(item);
  }
  remove() {
    return this.stack.removeHead();
  }
  get size() {
    return this.stack.size;
  }
}

module.exports = Stack;
