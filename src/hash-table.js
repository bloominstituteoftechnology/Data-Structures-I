/* eslint-disable */
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

  insert(key, value) {
    //Hash table giving me an index
    let index =  getIndexBelowMax(key.toString(),this.limit);
    //Seeing if there are any buckets with that index in storage
    let bucket = this.storage.get(index)
    if (!bucket)bucket=[];
    bucket=bucket.filter(item=>item[0] !== key);
    bucket.push([key,value])
      this.storage.set(index, bucket);
    
  
    }
  remove(key) {
    let index =  getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);    
    if (!bucket)return undefined
      bucket = bucket.filter(item=>item[0] !== key);
      this.storage.set(index, bucket);
    
  } 
  retrieve(key) {
    
    let index =  getIndexBelowMax(key.toString(),this.limit)
    let bucket = this.storage.get(index);    
    let result;
    if (bucket){
      result=bucket.filter(i=>i[0]===key)[0];

      }
      return result ? result[1]: undefined;

    }
  }


module.exports = HashTable;
