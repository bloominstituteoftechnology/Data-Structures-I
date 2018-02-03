/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

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
   // use the key in this.limit to find the inex
   const hashIndex = getIndexBelowMax(key.toString(), this.limit); // gives index where key:value pair is in the hashtable
   let bucket;
   if (Array.isArray(this.storage.get(hashIndex))) {
     bucket = this.storage.get(hashIndex);
   } else {
     bucket = []; // creates new bucket if none exists
   }
   let newTuple = [key, value]; // to handle when keys are in the same index
   let replaced = false;
   bucket = bucket.map((tuple) => {
     if(tuple[0] === key) {
       replaced = true; // this if tuple is replaced
       return newTuple // tuple is how key:value pairs are stored
     }
     return tuple; 
   })
   if (!replaced) {
     bucket.push(tuple) // if not replaced, push new tuple into the bucket
   }

   // to put the bucket back into the hash table
   this.storage.set(hashIndex, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket. put the bucket back
  // after removing the key from the bucket
  remove(key) { 
    
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    
  }
}

module.exports = HashTable;
