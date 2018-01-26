class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const node = {
      value,
      next: null,
      prev: null,
    };
    if (this.tail) {
      const temp = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.prev = temp;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  addToHead(value) {
    const node = {
      value,
      next: null,
      prev: null,
    };
    if (this.head) {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    } else {
      this.head = node;
      this.tail = node;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeFromHead() {
    if (!this.head) return null;
    const node = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return node;
  }

  removeFromTail() {
    if (!this.tail) return null;
    const node = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return node;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  delete(node) {
    let current = this.head;
    while (current) {
      if (current.value === node.value) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        break;
      }
      current = current.next;
    }
  }

  moveToFront(node) {
    let current = node;
    while (current) {
      if (current === this.head) {
        const temp = this.head;
        this.head = node;
        this.head.next = temp;
        break;
      }
      current = current.prev;
    }
  }

  moveToBack(node) {
    let current = node;
    while (current) {
      if (current === this.tail) {
        const temp = this.tail;
        this.tail = node;
        this.tail.prev = temp;
        break;
      }
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;
