/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  get size() {
    return this.storage.length;
  }
  push(item) {
    this.storage.push(item);
    this.count++;
  }
  pop(item) {
    return this.storage.pop(item);
  }

  // return the last item added to the stack.
  /* peek(item) {
    return this.storage[this.storage.length - 1];
  }

  // verify if the stack is empty or not
  isEmpty() {
    return size === 0;

  //clear all elements
  clear() {
    this.storage = [];
    // or call pop() until it's clear
  }

  //print out items
  print(item) {
    return this.storage[item];
  } */
}

module.exports = Stack;
