import { LimitedArray, getIndexBelowMax } from './hash-table-helpers';

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit).storage;
    this.entries = 0;
    this.changeHash = (newLimit, oldStorage) => {
      const newStorage = new LimitedArray(newLimit).storage;
      const bucketHashNumbers = Object.keys(oldStorage);
      bucketHashNumbers.forEach((bucketHash) => {
        const bucket = oldStorage[bucketHash];
        if (Array.isArray(bucket)) {
          bucket.forEach((keyvalue) => {
            const key = keyvalue[0];
            const value = keyvalue[1];
            const i = getIndexBelowMax(key, newLimit);
            if (!newStorage[i]) {
              newStorage[i] = [];
            }

            newStorage[i].push([key, value]);
          });
        }
      });

      return newStorage;
    };
    this.justHereToTest = () => {
      return;
    };
  }


  insert(k, v) {
    const i = getIndexBelowMax(k, this.limit);
    if (!this.storage[i]) {
      this.storage[i] = [];
      this.storage[i].push([k, v]);
      this.entries++;
    } else if (this.storage[i].some(el => el[0] === k)) {
      this.storage[i].forEach((el, z) => {
        if (el[0] === k) {
          el[1] = v;
        }
      });
    } else {
      this.storage[i].push([k, v]);
      this.entries++;
    }
    if (this.entries > 0.75 * this.limit) {
      this.limit *= 2;
      this.storage = this.changeHash(this.limit, this.storage);
    }
  }

  remove(k) {
    if (getIndexBelowMax(k, this.limit)) {
      const i = getIndexBelowMax(k, this.limit);
      if (this.storage[i]) {
        const bucket = this.storage[i];
        for (let j = 0; j < bucket.length; j++) {
          if (bucket[j][0] === k) {
            const value = bucket[j][1];
            this.storage[i] = this.storage[i].filter(el => el[0] !== k && el[1] !== value);
            this.entries--;
            if (this.entries < 0.25 * this.limit) {
              this.limit /= 2;
              this.storage = this.changeHash(this.limit, this.storage);
            }
            return value;
          }
        }
      }
    }
    return this.remove;
  }
  retrieve(k) {
    const i = getIndexBelowMax(k, this.limit);
    if (this.storage[i]) {
      const bucket = this.storage[i];
      for (let j = 0; j < bucket.length; j++) {
        if (bucket[j][0] === k) {
          return bucket[j][1];
        }
      }
    }
  }
}

module.exports = HashTable;
