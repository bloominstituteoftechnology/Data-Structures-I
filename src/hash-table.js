/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('./linked-list');

// Object implementation
/*
class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  exceedsCapacityPercent() {
    let filledHashes = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) filledHashes++;
    });
    return (filledHashes + 1) / this.limit > 0.75;
  }

  resize() {
    this.limit *= 2;
    // keep old storage for buckets
    const oldStorage = this.storage;
    // make new storage with larger capacity
    this.storage = new LimitedArray(this.limit);
    // for each bucket in old storage
    oldStorage.each((bucket) => {
      // if the bucket is empty, don't fill it
      if (!bucket) return;
      // else create [ [key1, value1], [key2, value2] ... ]
      const bucketKeys = Object.keys(bucket);
      const bucketVals = Object.values(bucket);
      const bucketKeysVals = [];
      for (let i = 0; i < bucketKeys.length; i++) {
        bucketKeysVals.push([bucketKeys[i], bucketVals[i]]);
      }
      // for each key-value pair
      bucketKeysVals.forEach((pair) => {
        // insert into new larger capacity storage
        this.insert(pair[0], pair[1]);
      });
    });
  }

  insert(key, value) {
    // if ((this.storage.length + 1) / this.limit > 0.75) {
    //   this.storage.limit *= 2;
    //   this.limit *= 2;
    // }
    if (this.exceedsCapacityPercent()) {
      this.resize();
    }
    const index = getIndexBelowMax(key, this.limit);
    // this.storage.get(index) is the bucket in hash table
    if (this.storage.get(index) === undefined) this.storage.set(index, {});
    this.storage.get(index)[key] = value;
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.retrieve(key) === undefined) return undefined;
    delete this.storage.get(index)[key];
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage.get(index) === undefined) return undefined;
    return this.storage.get(index)[key];
  }
}
*/

// doubly linked list implementation
class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  exceedsCapacityPercent() {
    let filledHashes = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) filledHashes++;
    });
    return (filledHashes + 1) / this.limit > 0.75;
  }

  resize() {
    this.limit *= 2;
    // keep old storage for buckets
    const oldStorage = this.storage;
    // make new storage with larger capacity
    this.storage = new LimitedArray(this.limit);
    // for each bucket in old storage
    oldStorage.each((bucket) => {
      // if the bucket is empty, don't fill it
      if (!bucket) return;
      // else create [ [key1, value1], [key2, value2] ... ]
      const bucketKeys = Object.keys(bucket);
      const bucketVals = Object.values(bucket);
      const bucketKeysVals = [];
      for (let i = 0; i < bucketKeys.length; i++) {
        bucketKeysVals.push([bucketKeys[i], bucketVals[i]]);
      }
      // for each key-value pair
      bucketKeysVals.forEach((pair) => {
        // insert into new larger capacity storage
        this.insert(pair[0], pair[1]);
      });
    });
  }

  insert(key, value) {
    if ((this.storage.length + 1) / this.limit > 0.75) {
      this.storage.limit *= 2;
      this.limit *= 2;
    }
    const index = getIndexBelowMax(key, this.limit);
    // this.storage.get(index) is the bucket in hash table
    if (this.storage.get(index) === undefined) this.storage.set(index, new LinkedList());
    this.storage.get(index).addToTail(key);
    this.storage.get(index).addToTail(value);
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    // if there is no linked list container in the bucket
    if (this.storage.get(index) === undefined) return undefined;
    // if key is not in bucket, return undefined
    if (!(this.storage.get(index).contains(key))) return undefined;
    // if there is only one key, value linked list in the bucket or
    // if the head.next (key) === tail (value)
    if (this.storage.get(index).head.next === this.storage.get(index).tail) {
      // set the bucket to an empty linked list
      this.storage.set(index, new LinkedList());
      return;
    }
    // otherwise
    // search for node that contains key
    const searchForKeyNode = (node) => {
      if (node.value === key) {
        // if node with key is the head
        // keyNode will never be the tail node
        // as long as a node with the key exists
        if (this.storage.get(index) === this.head) this.storage.get(index).removeHead();
        // if node with key is not the head
        const previousNode = node.previous;
        const nextNode = node.next;
        // set previous node to point to node after node with key AND value (.next.next)
        previousNode.next = nextNode;
        // set following (this is after the value node) to point to previous node before node with key
        nextNode.previous = previousNode;
        return;
      }
      return (searchForKeyNode(node.previous));
    };
    searchForKeyNode(this.storage.get(index).tail);
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    // if there is no linked list container in the bucket
    if (this.storage.get(index) === undefined) return undefined;
    // if key is not in bucket, return undefined
    if (!(this.storage.get(index).contains(key))) return undefined;
    // search for node that contains key
    const searchForKeyNode = (node) => {
      if (node.value === key) return node.next.value;
      return (searchForKeyNode(node.previous));
    };
    return searchForKeyNode(this.storage.get(index).tail);
  }
}


module.exports = HashTable;
