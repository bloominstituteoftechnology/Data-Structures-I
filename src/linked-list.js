const { Stack } = require('./stack');


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
      previous: null
    };
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
    }
    this.tail = node;
    this.len++;
  }
  removeHead(value) {
    if (this.head) {
      this.len--;
      const origHead = this.head.value;
      this.head = this.head.next;
      return origHead;
    }
  }
  removeTail() {
    let currentNode = this.head;
    if (currentNode.next === null) {
      const pull = this.head.value;
      currentNode = null;
      return pull;
    }
    while (currentNode.next !== this.tail) {
      if (currentNode.next.next === null) {
        const val = currentNode.next.value;
        currentNode.next = null;
        return val;
      }
      currentNode = currentNode.next;
    }
    const pull = this.tail.value;
    currentNode.next = null;
    return pull;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  containsKey(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value[0] === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  change(key, value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value[0] === key) {
        currentNode.value[1] = value;
      }
      currentNode = currentNode.next;
    }
  }

  remove(key) {
    let currentNode = this.head;
    if (currentNode.value[0] === key) {
      this.head = currentNode.next;
      this.length--;
    } else {
      while (currentNode.next) {
        if (currentNode.next.value[0] === key) {
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
      }
    }
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value[0] === key) {
        return currentNode.value[1];
      }
      currentNode = currentNode.next;
    }
  }
}

module.exports = LinkedList;
