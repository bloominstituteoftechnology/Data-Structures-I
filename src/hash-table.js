/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('../src/linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, val) {
    /*
    if ((this.storage.length + 1) / this.limit > 0.75) {
      // re balance
      this.limit *= 2;
      const temp = [];
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage.get(i)) {
          temp.push(this.storage.get(i));
        }
      }
      this.storage = new LimitedArray(this.limit);
      for (let i = 0; i < temp.length; i++) {
        this.storage.set(getIndexBelowMax(temp[i][0][0], this.limit), temp[i]);
      }
    }
    */
    if ((this.storage.length + 1) / this.limit > 0.75) {
      // re balance
      this.limit *= 2;
      const temp = [];
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage.get(i)) {
          temp.push(this.storage.get(i));
        }
      }
      this.storage = new LimitedArray(this.limit);
      for (let i = 0; i < temp.length; i++) {
        this.storage.set(getIndexBelowMax(temp[i].head.value[0], this.limit), temp[i]);
      }
    }
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    /*
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = val;
        }
      }
      bucket.push([key, val]);
      this.storage.set(index, bucket);
    } else {
      this.storage.set(index, [[key, val]]);
    }
    */
    if (bucket) {
      bucket.remove(key);
      bucket.addToTail([key, val]);
    } else {
      const linkedlist = new LinkedList();
      linkedlist.addToTail([key, val]);
      this.storage.set(index, linkedlist);
    }
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    /*
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
    */
    let node = bucket.head;
    while (node) {
      if (node.value[0] === key) {
        return node.value[1];
      }
      node = node.next;
    }
    return undefined;
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    /*
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.storage.set(index, bucket);
      }
    }
    */
    console.log(bucket.remove(key));
  }
}

/*
if ((this.storage.length + 1) / this.limit >= 0.75) {
      // re balance
      this.limit *= 2;
      // should be all key value pairs
      const temp = [];
      // iterate through buckets
      for (let i = 0; i < this.storage.length; i++) {
        // if bucket exists
        if (this.storage[i]) {
          // iterate through key value pairs
          for (let j = 0; j < this.storage[i].length; j++) {
            // there is always at least 1 if a bucket exists
            temp.push(this.storage[i][j]);
          }
          this.storage[i] = undefined; // null the bucket since it had stuff
        }
      }
      // iterate through key value pairs in temp and rehash them
      for (let i = 0; i < temp.length; i++) {
        const index = getIndexBelowMax(temp[i][0], this.limit);
        if (this.storage[index]) {
          this.storage[index].push(temp[i]);
        } else {
          this.storage[index] = [temp[i]];
        }
      }
    }
    */

module.exports = HashTable;
