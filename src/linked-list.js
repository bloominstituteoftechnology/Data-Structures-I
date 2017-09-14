class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  // Added key parameter to help with hash table implementation
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
    if (!this.head) return;
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
    // Iterative solution
    // let current = this.head;

    // while (current.value !== val) {
    //   current = current.next;
    //   if (!current.next) {
    //     return false;
    //   }
    // }
    // return true;

    // Recursive solution
    const recursiveContains = (node, value) => {
      if (node.value === value) return true;
      if (!node.next) return false;
      return recursiveContains(node.next, value);
    };

    return recursiveContains(this.head, val);
  }

  // Extra methods to help implement Stack, Queue, and Hash Table

  removeTail() {
    if (!this.tail) return;
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
    const recursiveFind = (node, val) => {
      if (!node) return;
      if (node.key === val) return node.value;

      return recursiveFind(node.next, val);
    };

    return recursiveFind(this.head, key);
  }

  deleteNode(key) {
    const recursiveDelete = (node, val) => {
      if (!node) return;
      if (node.key === val) {
        if (node === this.head && node === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (node === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (node === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        }
        return node.value;
      }

      return recursiveDelete(node.next, val);
    };
    return recursiveDelete(this.head, key);
  }

  updateNode(key, val) {
    const recursiveUpdate = (node, keyVal) => {
      if (!node) return;
      if (node.key === keyVal[0]) return node.value = keyVal[1];

      return recursiveUpdate(node.next, keyVal);
    };

    return recursiveUpdate(this.head, [key, val]);
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
