class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  enqueue(val) {
    if (!this.head) {
      // it's the first item
      this.head = {
        val,
        next: null
      };
    } else {
      // put it at the front
      const newhead = {
        val,
        next: this.head
      };
      this.head = newhead;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) {
      const val = this.head.val;
      this.head = null;
      this.size--;
      return val;
    }
    let beforelast = this.head;
    while (beforelast.next.next !== null) {
      beforelast = beforelast.next;
    }
    const endoflistval = beforelast.next.val;
    beforelast.next = null;
    this.size--;
    return endoflistval;
  }

  size() {
    return this.size;
  }
}

module.exports = Queue;
