/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// class HashTable {
//   constructor() {
//     this.limit = 8;
//     this.storage = new LimitedArray(this.limit);
//     // Do not modify anything inside of the constructor
//   }
//   checkCapacity() {
//     // OLD/WRONG SOLUTION - counts empty cells and ends up resizing too soon
//     // if (this.storage.length > this.limit * 0.75) {
//     //   return true;
//     // }

//     // return false;

//     let cells = 0;
//     this.storage.each((elem) => {
//       if (!elem) return;
//       cells++;
//     });

//     return (this.limit * 0.75) <= cells;
//   }

//   resize() {
//     // OLD SOLUTION - overly complicated/unnecessary no need to copy element
//     // by element into temp storage.
//     // const tempStorage = new LimitedArray(this.limit);
//     // this.limit *= 2;
//     // this.storage.each((elem, idx) => {
//     //   tempStorage.set(idx, elem);
//     // });
//     // this.storage = new LimitedArray(this.limit);
//     // tempStorage.each((elem, idx) => {
//     //   this.storage.set(idx, elem);
//     // });
//     this.limit *= 2;
//     const tempStorage = this.storage;
//     this.storage = new LimitedArray(this.limit);
//     tempStorage.each((elem, idx) => {
//       if (!elem) return;
//       this.storage.set(idx, elem);
//     });
//     return;
//   }

//   insert(key, val) {
//     if (this.checkCapacity()) {
//       this.resize();
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
//     return;
//   }

//   retrieve(key) {
//     const index = getIndexBelowMax(key, this.limit);
//     const bucket = this.storage.get(index);

//     if (!bucket) return;

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
//     return;
//   }
// }

/* ******* LINKED LIST VERSION ******* */

const LinkedList = require('./linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
  }

  checkCapacity() {
    // OLD/WRONG SOLUTION
    // if (this.storage.length > this.limit * 0.75) {
    //   return true;
    // }

    // return false;
    let cells = 0;
    this.storage.each((elem) => {
      if (!elem) return;
      cells++;
    });

    return (this.limit * 0.75) <= cells;
  }

  resize() {
    // OLD SOLUTION
    // const tempStorage = new LimitedArray(this.limit);
    // this.limit *= 2;
    // this.storage.each((elem, idx) => {
    //   tempStorage.set(idx, elem);
    // });
    // this.storage = new LimitedArray(this.limit);
    // tempStorage.each((elem, idx) => {
    //   this.storage.set(idx, elem);
    // });

    this.limit *= 2;
    const tempStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    tempStorage.each((elem, idx) => {
      if (!elem) return;
      this.storage.set(idx, elem);
    });
    return;
  }

  insert(key, val) {
    if (this.checkCapacity()) {
      this.resize();
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
    return;
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);

    if (!bucket) return;

    return bucket.find(key);
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);

    bucket.deleteNode(key);
    this.storage.set(index, bucket);
    return;
  }
}

module.exports = HashTable;
