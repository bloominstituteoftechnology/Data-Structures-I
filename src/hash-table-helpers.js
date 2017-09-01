class LimitedArray {
  constructor(limit) {
    this.storage = [0, []];
    this.limit = limit;
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }

  get length() {
    return this.storage.length;
  }

  set(index, value, key, cb) {
    const retrieve = cb(key);
    // every time an element is being added
    // console.log(this.limit*75/100)
    if (this.storage.length >= (this.limit * 75) / 100) this.limit = 16;
    if (retrieve.position > 0) { this.storage[index][retrieve.position] = [key, value]; return; }
    this.storage[retrieve.index] = [[key, value]];
  }

}

/* eslint-disable no-bitwise, operator-assignment */
const getIndexBelowMax = (str, max) => {
  if (typeof str === 'number') return str;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LimitedArray,
  getIndexBelowMax,
};
