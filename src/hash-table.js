/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
  }

  //find(key) {
  //  const hash = getIndexBelowMax(key, this.limit);

  //  // 1! //
  //  const bucket = this.storage.get(hash) || [];
  //  //const bucket = this.storage[hash] || [];

  //  let match;
  //  let matchIndex;
  //  bucket.forEach((item, index) => {
  //    if (item[0] === key) {
  //      match = item;
  //      matchIndex = index;
  //    }
  //  });
  //  return {
  //    match,
  //    bucket,
  //    matchIndex,
  //    hash,
  //  };
  //}

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key

  insert(key, value) {
    const hash = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(hash) || [];

    bucket.push([key, value])

    bucket.forEach((tuple, i) => {
      if (tuple[0] === key) {
	bucket.splice(i, 1, tuple)
      }
    })

    this.storage.set(hash, bucket);
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const hash = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(hash);
    let match;

    try {
      bucket.forEach(tuple => {
	if (tuple[0] === key) {
	  match = tuple[1];
	}
      })
    } catch (e) {
      return undefined;
    }
    return match;
  }

  // REMOVES the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const hash = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(hash);

    try {
      bucket.forEach((tuple, i) => {
	if (tuple[0] === key) {
	  //console.log('bucket:', bucket)
	  //console.log('tuple:', tuple)
	  //console.log('i:', i)
	  bucket.splice(i, 1);
	}
      })
    } catch (e) {
      return undefined;
    }
    //console.log(bucket)

    this.storage.set(hash, bucket);
  }






  
  resize(newSize) {
    //console.log(this.storage)


    //const oldStorage = this.storage;
    //this.size = newSize;
    //this.count = 0;
    //this.storage = [];
  }

}

module.exports = HashTable;
