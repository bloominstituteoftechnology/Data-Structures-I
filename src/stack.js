// const LinkedList = require('./linked-list');

/* eslint-disable class-methods-use-this */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // addToTail(value) {
  //   const newNode = {
  //     next: null,
  //     value,
  //   };
  //   // check if head already exists (or if is empty)
  //   if (this.head === null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //     return;
  //   }
  //   this.tail.next = newNode;
  //   this.tail = newNode;
  // }

  // doubly linked list
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

  // removeHead() {
  //   // no nodes
  //   if (this.head === null) return;
  //   // one node
  //   if (this.head.next === null) {
  //     const head = this.head;
  //     this.head = null;
  //     this.tail = null;
  //     return head.value;
  //   }
  //   // multiple nodes
  //   const head = this.head;
  //   this.head = this.head.next;
  //   return head.value;
  // }

  // doubly linked list
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

  // contains(value) {
  //   if (this.head === null) return false;
  //   const searchLinkedList = (node) => {
  //     if (node.value === value) return true;
  //     if (node.next === null) return false;
  //     return searchLinkedList(node.next);
  //   };
  //   return searchLinkedList(this.head);
  // }

  // doubly linked list
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

class Stack {
  constructor() {
    // Array implementation
    // this.stack = [];

    // LinkedList implementation
    this.stack = new LinkedList();
  }
  // // Array implementation
  // get size() {
  //   return this.stack.length;
  // }

  // LinkedList implementation
  get size() {
    let count = 0;
    let node = this.stack.tail;
    // no nodes
    if (node === null) return 0;
    // one node
    if (node.next === null && node.previous === null) return 1;
    // more than one more
    while (node.previous != null) {
      count++;
      node = node.previous;
    }
    // account for last node (tail)
    return ++count;
  }

  // // Array implementation
  // push(item) {
  //   this.stack[this.size] = item;
  // }

  // LinkedList implementation
  push(item) {
    this.stack.addToTail(item);
  }

  // // Array implementation
  // pop() {
  //   const popItem = this.stack[this.size - 1];
  //   this.stack = this.stack.splice(0, this.size - 1);
  //   return popItem;
  // }

  //  LinkedList implementation
  pop() {
    // no nodes
    if (this.stack.tail === null) return;
    // one node
    if (this.stack.tail === this.stack.head) {
      const tail = this.stack.tail;
      this.stack.head = null;
      this.stack.tail = null;
      return tail.value;
    }
    // multiple nodes
    const tail = this.stack.tail;
    this.stack.tail = tail.previous;
    this.stack.tail.next = null;
    return tail.value;
  }
}

module.exports = Stack;
