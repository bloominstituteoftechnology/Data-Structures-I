/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit); // could cause problem if not a string/Expecting to be key
    // not using get function , or set function from helpers. but it works
    if (this.storage[index] === undefined) {
      this.storage[index] = [];  // bc no bucket, setting up a bucket
      this.storage[index].push([key, value]);
      /* this replaces the helper set function
       set(index, value) {
       this.checkLimit(index);
       this.storage[index] = value;
      */
      /* Solution from instructor :
      const index = getIndexBelowMax(key.toString(), this.limit);
      const bucket = this.storage.get(index) || [];
      bucket = bucket.filter(pair => pair[0] !== key);
       }

       // filter out the key value pair that has the same key as provided in the function call
      /* can change last line to:
      let foundPair = false;
      for (let i = 0; i< bucket.length; i++) {
        if(bucket[i][0] === key) {
           bucket[i][1] = value;
        foundPair = true;
      }
    }
      if(!foundPair) bucket.push([key, value]);
      this.storage.set(index, bucket);
    }
      */
    } else {
      const bucket = this.storage[index];
      let exists = false;  // checking if key is present
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) { // if finds key, it will break, if not it will go all the way through the end of array
          exists = true;
          bucket[i][1] = value;
          break;
        }
      }
      if (!exists) bucket.push([key, value]); // push new array
      // this.storage array of 7 spaces(items) [default settings, could change if you wanted]
      // each space has bucket ( which is an array),
      // inside of each bucket are different arrays that match the get index
      // inside of each bucket is the key value (key like email, and value like email address)
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[index];
    if (bucket === [] || bucket === undefined) {
      // [] empty coffee cup ; bucket - undefined = no coffee at all
      return; // will return undefined automatically
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) { // [0] is key, [i] is array bucket is holding
        bucket.splice(i, 1);
        break; // takes it out so you don't have to look at every single item in the bucket
      }
    }
  }
  /* instructor solution
 remove(key) {
   const index = getIndexBelowMax(key.toString(), this.limit);
   let bucket = this.storage.get(index);

   if (bucket) {
     bucket = bucket.filter(pair => pair[0] !== key);
     this.storage.set(index, bucket);
    }
 }


  */
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[index];
    if (bucket === [] || bucket === undefined) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];  // only difference is looking for value instead of trying to remove it
      }
    }
  }
}
/* Instructor answer:
retrievw(key){
  const index = getIndexBelowMax(key.toSting(), this.limit);
  const bucket = this.storage.get(index);

  let retrieved;
  if (bucket){
    retrieved = bucket.filter(item => item[0] === key)[0];
  }
  return retrieved ? retrieved[1] : undefined;
  }
}

With Reduce:

retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let retrieved;
    if (bucket) {
      retrieved = bucket.reduce((value, pair) => {
        return pair[0] === key ? pair[1] : value;
      }, undefined);
    }

    return retrieved;
  }

*/

module.exports = HashTable;
