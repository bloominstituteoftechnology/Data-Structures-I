const { LimitedArray, getIndexBelowMax } = require('./src/hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  checkCapacity() {
    let fullCells = 1;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return (fullCells / this.limit) > 0.75;
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.forEach((bucket) => {
      if (bucket === undefined) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      this.storage.set(index, [key, value]);
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        this.storage.set(index, bucket);
        return;
      }
    }
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket.length === 1) return this.storage.set(index, undefined);
    bucket.forEach((pair, i) => {
      if (pair[0] === key) bucket.splice(i, 1);
      this.storage.set(index);
    });
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) return undefined;
  }

}
let hashTable = new HashTable();
hashTable.insert('Ben', 'Nelson');
hashTable.insert('Sean', 'Chen');
hashTable.insert('Ryan', 'Hamblin');
hashTable.insert('Karthik', 'Viswanathan');
hashTable.insert('Austen', 'Allred');
// hashTable.remove('Ben');
// hashTable.remove('Austen');

console.log(hashTable)
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     // Do not modify anything inside of the constructor
//   }

//   // const node = (val) {
//   //   this.value = val;
//   //   this.next = null;
//   // }
//   function Node(data) {
//     this.value = data;
//     this.next = null;
//   }

//   addToTail(val) {
//     let node = new Node(val);
//     // add node to tail
//     this.tail = val;
//     return;

//     // add new tail to that node
//   }

//   removeHead() {
//     const val = this.head;
//     delete this.head;
//     return val;
//   }

//   contains(query) {
//     // while loop through all nodes til node is null, (tail)
//     while (this.node) {
//       if (this.node.val === query) {
//         return true;
//       }
//     }

//     return false;
//   }

// }

// let ll = new LinkedList()
// ll.addToTail(5)
// // ll.removeHead()
// // console.log(ll.removeHead());
// console.log(ll.tail.value)
