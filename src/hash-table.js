/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);

    // Do not modify anything inside of the constructor
  }
  hashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
    }
  hashfunc(key) {
    let total = 0;
    this.buckets = this.storage.length;
    for (let i = 0; i < key.length; i++) {
       total += key.charCodeAt(i);
    }
    let bucket = total % this.buckets;
    return bucket;
    }
  insert(key, value) {
    let index = this.hashfunc(key);
    if (!this.storage[index]) {
      this.storage[index] = new hashNode(key, value);
    } else if (this.storage[index].key === key) {
        this.storage[index].value = value;
    } else {
      let currentNode = this.storage[index];
       while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new hashNode(key, value);
    }  
  }
  retrieve(key) {
    let index = this.hashfunc(key); 
    if (!this.storage[index]) return null;
    let currentNode = this.storage[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value
      currentNode = currentNode.next;
      }
      return null;
    }
}
module.exports = HashTable;
