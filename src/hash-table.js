/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
  // Need this to resize array properly:
    this.filled = 0;
    // Do not modify anything inside of the constructor
  }
  getSize(arr) {
    let size = 0;
    for (let i = 0; i < arr.storage.length; i++) {
      if (typeof arr.storage[i] !== 'undefined') {
        size++;
      }
    }
    return size;
  }
  // -----------------------------------------------------------
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    let size = this.getSize(this.storage);
    this.filled++;
    !!value ? value : value = this.filled;
    if (!size) { size = 0; value = 1; }
    // ---------------------------------------------------------
    const index = this.map(key);
    const bucket = this.storage.get(index);
    // ---------------------------------------------------------
    console.log(`>>> F: ${this.filled}  S: ${size}  L: ${this.storage.length} Limit: ${this.limit}`);
    if (this.filled + this.filled > this.limit && this.filled - 1 >= this.limit * 0.75) {
      this.limit += this.limit;            
      this.storage = this.resize(this.limit, this.storage);
    }
    // ---------------------------------------------------------
    if (!bucket) {
      this.storage.set(index, [[key, value]]);
    } else {
      // -------------------------------------------------------
      const reIndex = bucket.indexOf(bucket.filter(arrItem => arrItem[0] === key)[0]);
      // -------------------------------------------------------
      if (reIndex !== -1) {
        bucket[reIndex] = [key, value];
      } else {
      // -------------------------------------------------------
        this.storage.set(index, [...bucket, [key, value]]);
      }
    }
  }
  // -----------------------------------------------------------
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  // -----------------------------------------------------------
  remove(key) {
  // -----------------------------------------------------------
    this.filled--;
    const index = this.map(key);
    const bucket = this.storage.get(index);
  // -----------------------------------------------------------
    if (!bucket || bucket === []) { return undefined; }
  // -----------------------------------------------------------
    let reValue;
    this.storage.set(index, undefined);
  // -----------------------------------------------------------
    const l = bucket.length;
    for (let i = 0; i < l; i++) {
      if (bucket[0] !== key) {
        this.insert(bucket[i]);
      } else {
        reValue = bucket[i];
      }
    }
    return reValue;
  }
  // -----------------------------------------------------------
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  // -----------------------------------------------------------
  retrieve(key) {
    const bucket = this.storage.get(this.map(key));
    // ---------------------------------------------------------
    if (bucket === undefined || bucket === []) { return undefined; }
    // ---------------------------------------------------------
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) { return bucket[i][1]; }
    }
    // ---------------------------------------------------------
  }
  // -----------------------------------------------------------
  map(key) {
    // ---------------------------------------------------------
    if (!key.isNaN) { key = key.toString(); }
    // ---------------------------------------------------------
    return getIndexBelowMax(key, this.limit);
  }
}
// -------------------------------------------------------------
// Prototype practice:
HashTable.prototype.resize = (resizeTo, oldArr) => {
  // -----------------------------------------------------------
  console.log('resized to: ', resizeTo);
  const arrTmp = new LimitedArray(resizeTo);
  for (let i = 0; i < oldArr.storage.length; i++) {
    if (typeof oldArr.storage[i] !== 'undefined') {
      arrTmp.storage.push(oldArr.storage[i]);
    }
  }
  // -----------------------------------------------------------
  console.log('%%%R: ', arrTmp.storage);
  return arrTmp;
};
/*
// -------------------------------------------------------------
const hashTable = new HashTable(8);
// -------------------------------------------------------------
console.log(`S: ${hashTable.size}  L: ${hashTable.storage.length} Limit: ${hashTable.limit}`);

hashTable.insert('John', { name: 'John' });
const John = hashTable.retrieve('John');
hashTable.insert('John2', { name: 'Johnathan' });
const John2 = hashTable.retrieve('John2');
console.log(`S: ${hashTable.size}  L: ${hashTable.storage.length} Limit: ${hashTable.limit}`);
// -------------------------------------------------------------
console.log("<< John: ", John);
console.log("<< John2: ", John2);
console.log(">> 'John':", hashTable.retrieve('John'));
console.log(">> 'John2':", hashTable.retrieve('John2'));
console.log(`S: ${hashTable.size}  L: ${hashTable.storage.length} Limit: ${hashTable.limit}`);

// -------------------------------------------------------------
hashTable.insert('0', 1);
hashTable.insert('1', 1);
hashTable.insert('2', 2333);
hashTable.insert('3', 3);
hashTable.insert('4', 4);
hashTable.insert('5', 5);
hashTable.insert('6', 6);
console.log(`S: ${hashTable.size}  L: ${hashTable.storage.length} Limit: ${hashTable.limit}`);
hashTable.insert('a');
hashTable.insert('b');
hashTable.insert('c');
hashTable.insert('d');
hashTable.insert('e');
console.log(`S: ${hashTable.size}  L: ${hashTable.storage.length} Limit: ${hashTable.limit}`);
// -------------------------------------------------------------
console.log(">> 'a':", hashTable.retrieve('a'));
console.log(">> 'b':", hashTable.retrieve('b'));
*/
// -------------------------------------------------------------
module.exports = HashTable;
