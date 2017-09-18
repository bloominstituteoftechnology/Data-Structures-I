/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const node = { [key]: value, next: null };
    const index = getIndexBelowMax(key, this.limit);
    let currentNode = this.storage.get(index);
    if (!currentNode) {
      this.storage.set(index, node);
    } else {
      while (currentNode) {
        if (currentNode[key]) {
          currentNode[key] = node[key];
          break;
        }
        if (currentNode.next === null) {
          currentNode.next = node;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    let currentNode = this.storage.get(index);
    if (currentNode[key]) {
      this.storage.set(index, currentNode.next || undefined);
      return;
    }
    if (currentNode) {
      while (currentNode) {
        if (currentNode.next[key]) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    let currentNode = this.storage.get(index);
    if (currentNode) {
      while (currentNode) {
        if (currentNode[key]) return currentNode[key];
        currentNode = currentNode.next;
      }
      return undefined;
    }
    return undefined;
  }
}
module.exports = HashTable;
