/* eslint-disable */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;     
  }

  addToTail(value) {
    const newNode = {
      next: null,
      previous: this.tail,
      value,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } 

    this.tail.next = newNode;
    this.tail = newNode;
  }

  addToHead(value) {
    const newNode = {
      next: this.head,
      previous: null,
      value,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.head.previous = newNode;
    this.head = newNode;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    return this.tail ? this.tail.value : null;
  }

  removeTail() {
    if (this.tail === null) return;
    if (this.tail.previous === null) {
      const value = this.tail.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return value;
  }

  removeHead() {
    // need to check if there is a head node
    if (this.head === null) return;
    // check if head has a next
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return value;
  }

  containsFromHead(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.next;
    } 
    return false;
  }

  containsFromTail(value) {
    let node = this.tail;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.previous;
    } 
    return false;
  }

  eachFromHead(cb) {
    let node = this.head;
    while (node !== null) {
      cb(node);
      node = node.next;
    } 
  }

  eachFromTail(cb) {
    let node = this.tail;
    while (node !== null) {
      cb(node);
      node = node.previous;
    } 
  }

  findFromHead(cb) {
    let node = this.head;
    while (node !== null) {
      if (cb(node)) return node;
      node = node.next;
    } 
    return null;
  }

  findFromTail(cb) {
    let node = this.tail;
    while (node !== null) {
      if (cb(node)) return node;
      node = node.previous;
    } 
    return null;
  }
}
module.exports = DoublyLinkedList;
