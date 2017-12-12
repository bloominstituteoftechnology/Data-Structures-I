/* eslint-disable class-methods-use-this */

// // single linked list implementation
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addToTail(value) {
//     const newNode = {
//       next: null,
//       value,
//     };
//     // check if head already exists (or if is empty)
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }

//   removeHead() {
//     // no nodes
//     if (this.head === null) return;
//     // one node
//     if (this.head.next === null) {
//       const head = this.head;
//       this.head = null;
//       this.tail = null;
//       return head.value;
//     }
//     // multiple nodes
//     const head = this.head;
//     this.head = this.head.next;
//     return head.value;
//   }

//   contains(value) {
//     if (this.head === null) return false;
//     const searchLinkedList = (node) => {
//       if (node.value === value) return true;
//       if (node.next === null) return false;
//       return searchLinkedList(node.next);
//     };
//     return searchLinkedList(this.head);
//   }
// }

// doubly linked list implementation
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = {
      previous: null,
      next: null,
      value,
    };
    // check if head already exists (or if is empty)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const oldTail = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.previous = oldTail;
  }

  removeHead() {
    // no nodes
    if (this.head === null) return;
    // one node
    if (this.head.next === null) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    // multiple nodes
    const head = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    return head.value;
  }

  // start from tail
  // search head <--- tail
  contains(value) {
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.value === value) return true;
      // if we reach the head, return false
      if (node.previous === null) return false;
      return searchLinkedList(node.previous);
    };
    return searchLinkedList(this.tail);
  }
}

module.exports = LinkedList;
