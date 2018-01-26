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
    let bucket = [];
    const string_key = key.toString();
    let hash = getIndexBelowMax(string_key,this.limit);
    if (Array.isArray(this.storage.get(hash)) === false) {
      bucket.push([string_key,value]);
      this.storage.set(hash,bucket);
      return;
    }
      bucket = this.storage.get(hash);
      bucket.push([string_key,value]);
      this.storage.set(hash,bucket);
   }


  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {

    
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) { 
    const bucket_index = getIndexBelowMax(key.toString());
    const bucket = this.storage.get(bucket_index);
    if(!bucket){
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
     if(tuple[0] === key) {
       return tuple[1];
     }
    }
    return null;
  }
}

const ht = new HashTable();
ht.insert("JOR",4);
ht.insert(4,343534534);
ht.insert("sssss",34345453);
ht.insert("sfgdgsdg",34534535);
ht.insert("dfgsdfgsgs",3435435143);
ht.insert("s",222);
ht.insert("s",221);
console.log(ht.storage.storage);
console.log(ht.retrieve("s"));

module.exports = HashTable;
