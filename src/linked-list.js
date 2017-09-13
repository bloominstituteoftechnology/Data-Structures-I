class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    if (!this.head) {
      // it's the first item
      this.head = {
        value,
        next: null,
        prev: null,
      };
      this.tail = this.head;
    } else {
      // put it at the end
      this.tail.next = {
        value,
        next: null,
        prev: this.tail,
      };
      this.tail = this.tail.next;
    }
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
    return value;
  }

  removeTail() {
    if (!this.tail) {
      // there is nothing
      return;
    }
    const value = this.tail.value;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return value;
  }

  remove(key) {
    let node = this.head;
    while (node) {
      if (node.value[0] === key) {
        if (node.prev && node.next) {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        } else if (node.prev) {
          node.prev.next = null;
          this.tail = node.prev;
        } else if (node.next) {
          node.next.prev = null;
          this.head = node.next;
        } else {
          this.head = null;
          this.tail = null;
        }
        return node.value;
      }
      node = node.next;
    }
  }

  contains(value) {
    if (!this.head) {
      return false;
    }
    let iter = this.head;
    while (iter.next !== null) {
      if (iter.value === value) {
        return true;
      }
      iter = iter.next;
    }
    return false;
  }
}

module.exports = LinkedList;
