const LinkedList = require('./linked-list');

// Array implementation
/*
class Queue {
  constructor() {
    this.queue = [];
  }
  get size() {
    return this.queue.length;
  }

  enqueue(item) {
    if (this.size === 0) this.queue[0] = item;
    else {
      this.queue.unshift(item);
    }
  }

  dequeue() {
    return this.queue.splice(this.size - 1, 1)[0];
  }
}
*/

// doubly linked list implementation
class Queue {
  constructor() {
    this.queue = new LinkedList();
  }
  get size() {
    // count from head <-- tail
    // if no nodes
    if (this.queue.head === null) return 0;
    // if one node
    if (this.queue.head === this.queue.tail) return 1;
    // if more than one node
    const countVia = (node) => {
      // recur base case when
      // current node = head
      if (node.previous === null) return 1;
      return 1 + countVia(node.previous);
    };
    return countVia(this.queue.tail);
  }

  enqueue(item) {
    this.queue.addToTail(item);
  }

  dequeue() {
    return this.queue.removeHead();
  }
}

module.exports = Queue;
