/* eslint-disable no-bitwise, operator-assignment */
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

class LimitedArray {
  constructor(limit) {
    this.storage = [];
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

  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }

  add(index, obj) {
    this.checkLimit(index);
    // console.log(`add(${index}, ${obj})`);
    // console.log(`this.storage[index] = ${this.storage[index]}`);
    // console.log(`Is there an array at ${index}: ${Array.isArray(this.storage[index])}`);
    if (this.storage[index] !== undefined) {
      // console.log(this.storage[index]);
      const k = Object.keys(obj)[0];

      if (this.checkHasObject(k)) {
        this.getObjectWithKey(k)[k] = obj[k];
      } else {
        this.storage[index].push(obj);
      }
    } else {
      this.storage[index] = [];
      // console.log(this.storage[index]);
      this.storage[index].push(obj);
      // console.log(this.storage[index]);
    }
  }

  checkHasObject(key) {
    if (this.getObjectWithKey(key)) {
      return true;
    }
    return false;
  }

  removeObjWithKey(key) {
    // find the initial index where the key is stored.
    const baseIndex = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[baseIndex];
    let bucketIndex;
    // checek if the bucket at index is undefined
    // check each object in the bucket at the index.
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key]) {
          bucket.splice(i, 1);
        }
      }
    }

    // use that index to splice the array and remove that object.
    // make sure that an index was found.
    // if (bucketIndex) {
    //
    // }
  }

  getObjectWithKey(key) {
    // find the initial index where the key is stored.
    // console.log(`getObjectWithKey(${key})`);
    const baseIndex = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[baseIndex];
    // console.log(`baseIndex = ${baseIndex}`);
    // console.log(bucket);
    // console.log(bucket[0]);
    let bucketIndex;
    // checek if the bucket at index is undefined
    // check each object in the bucket at the index.
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        // console.log(bucket[i]);
        // console.log(bucket[i][key]);
        if (bucket[i][key]) {
          // console.log(i);
          // console.log(bucket[i]);
          return bucket[i];
        }
        // else {
        //   // console.log("This code shouldn't be running");
        // }
      }
    }
    // else {
    //   // console.log("This code shouldn't be running");
    // }
  }
}

module.exports = {
  LimitedArray,
  getIndexBelowMax,
};
