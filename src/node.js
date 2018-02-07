class Node {
  constructor({ value, next = null, prev = null }) {
    Object.assign(this, { value, next, prev });
  }

  setNext(next) {
    this.next = next;
  }

  setPrev(prev) {
    this.prev = prev;
  }

  getNext() {
    return this.next;
  }

  getPrev() {
    return this.prev;
  }

  equals(node) {
    if (Array.isArray(node.value)) {
      return node.value[0] === this.value[0];
    }
    return node.value === this.value;
  }
}

module.exports = Node;
