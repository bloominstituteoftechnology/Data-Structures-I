/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// class HashTable {
//   constructor() {
//     this.limit = 8;
//     this.storage = new LimitedArray(this.limit);
//     // Do not modify anything inside of the constructor
//   }

//   insert(key, val) {
//     if (this.storage.length > (this.limit * 0.75)) {
//       this.limit *= 2;
//       this.storage.limit = this.limit;
//     }
//     const index = getIndexBelowMax(key, this.limit);
//     let bucket = this.storage.get(index);

//     if (!bucket) {
//       bucket = [];
//     } else {
//       bucket.forEach((elem) => {
//         if (elem[0] === key) {
//           elem[1] = val;
//         }
//       });
//     }
//     bucket.push([key, val]);
//     this.storage.set(index, bucket);
//     return undefined;
//   }

//   retrieve(key) {
//     const index = getIndexBelowMax(key, this.limit);
//     const bucket = this.storage.get(index);

//     if (!bucket) return undefined;

//     for (let i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === key) return bucket[i][1];
//     }
//   }

//   remove(key) {
//     const index = getIndexBelowMax(key, this.limit);
//     const bucket = this.storage.get(index);
//     bucket.forEach((elem) => {
//       if (elem[0] === key) {
//         elem.shift();
//       }
//     });
//     this.storage.set(index, bucket);
//     return undefined;
//   }
// }

/* ******* LINKED LIST VERSION ******* */

const LinkedList = require('./linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
  }

  insert(key, val) {
    if (this.storage.length > (this.limit * 0.75)) {
      this.limit *= 2;
      this.storage.limit = this.limit;
    }

    const index = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(index);

    if (!bucket) {
      bucket = new LinkedList();
    }
    if (!bucket.updateNode(key, val)) {
      bucket.addToTail(val, key);
    }
    this.storage.set(index, bucket);
    return undefined;
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);

    if (!bucket) return undefined;

    return bucket.find(key);
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);

    bucket.deleteNode(key);
    this.storage.set(index, bucket);
    return undefined;
  }
}

module.exports = HashTable;
