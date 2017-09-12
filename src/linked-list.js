class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value, key) {
    const newNode = {
      key,
      value,
      prev: null,
      next: null
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) return undefined;
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return val;
  }

  contains(val) {
    let current = this.head;

    while (current.value !== val) {
      current = current.next;
      if (!current.next) {
        return false;
      }
    }
    return true;
  }

  // Extra methods to help implement Stack, Queue, and Hash Table

  removeTail() {
    if (!this.tail) return undefined;
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head.next = null;
    }
    return val;
  }

  find(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
  }

  deleteNode(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
    return undefined;
  }

  updateNode(key, val) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        current.value = val;
      }
      current = current.next;
    }
    return undefined;
  }

  get size() {
    const recursiveSize = (node) => {
      if (!node) return 0;

      return recursiveSize(node.next) + 1;
    };

    const currentNode = this.head;
    const size = recursiveSize(currentNode, 0);
    return size;
  }
}

module.exports = LinkedList;
