/* eslint-disable */

// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) { // receives a limit argument - which is set as 8 in hash-tables.js 
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.storage = [];
    this.limit = limit;
    // So any index received, if it is over 8, then it will not be valid.
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  // For convenience: this is just a helpful method - a built in method that iterates over an array ???
  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class INCORRECT!
  // This is not a getter!  This is just a method on the LimitedArray class called "get"
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }
  // [20:39] This IS a getter.  So you use this getter function to fetch the length of this.sto
  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  // set is the oppisite of get.  It is how you ADD things to this LimitedArray class
  set(index, value) {
    // Checks that the limit is valid
    this.checkLimit(index);
    // Adds value to this.storage at given index
    this.storage[index] = value;
  }
}
/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array

// This is the hash function! *********** We are not going into this now ***********
const getIndexBelowMax = (str, max) => { // returns an index of this.storage where an array/kvpair [key, value] can/would be stored.???
  let hash = 0;
  // For each value in the string array...
  for (let i = 0; i < str.length; i++) {
    // charCodeAt returns the Unicode equivalent value (between 0 and 65535), which is how items are organized in a hash table
     // string. turns that numerical value into a string
     // That string is then added to the current value of 'hash'
     // 'hash << 5' is equivalent to (hash * 2^5)
     // ???
    hash = (hash << 5) + hash + str.charCodeAt(i);
    // '&' is the Bitwise AND operator.  It 'returns a one in each bit position if bits of both operands are ones'.
    // ???
    hash = hash & hash;
    // ensure our hash value is positive.  If it is not, Math.abs returns the absolute value.
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LimitedArray,
  getIndexBelowMax,
};
