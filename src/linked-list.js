class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(itemToInsert) {
    const node = {
      value: itemToInsert,
      next: null
    };
    // insert 1 in the head
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      return;
    }
    // insert head.next
    if (this.head.next === null) {
      this.tail = node;
      this.head.next = node;
      return;
    }
    const tail = this.tail;
    tail.next = node;
    this.tail = node;
  }

  removeHead() {
    if (this.head.next === null) {
      return this.head.value;
    }
    const temphead = this.head;
    this.head = this.head.next;
    return temphead.value;
  }

  contains(item) {
    let currNode = this.head;
    while (currNode.next !== null) {
      if (currNode.value === item) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
