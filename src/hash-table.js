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
    // Need this line first for ALL Methods here. .toString is just placed here in case the input is not a string, since
    // getIndexBelowMax requires/expects a string.
    // Notice that getIndexBelowMax is an independent function, set apart from the other methods in hash-table-helpers.js
    // That is why you do not see a "this.storage." before getIndexBelowMax
    // The index where we will insert this new pair is declared here using the getIndexBelowMax vfunction
    const index = getIndexBelowMax(key.toString(), this.limit);
       // this.storage.get(index) just checks to make sure the limit is valid for that index, then returns w/e is stored
       // inside the this.storage array at that particular index.
    const bucket = this.storage.get(index);
       // The conditionals below provide instructions for the following possible situations:
       // (1) No bucket exists at this index.
       //     * A new bucket needs to be created AND values inputted.
       // (2) A bucket exists and is EMPTY
       // (3) A bucket exists, is not empty, but already contains the key we want to insert (collision)
       //     * For both (2) and (3) the action is the same - we need to replace the bucket
       // (4) A bucket exists, is not empty, and does not contain the key we want to insert.
       //     * Then the key value pair just needs to be pushed on the existing index bucket
    if (bucket === undefined) {
      // If bucket is undefined, as in there is no bucket to begin with, then we need to add a bucket there.  We can do this
      // easily using the set method from helpers.js
      // entering the required parameters for index (same as above) and value (in this case a 2 element array).  The set
      // function will create a new bucket at 'index' and input the 'value'
      // [[key, value]] remains a single value, even though it contains a nested array.  We do this in the likely event that
      // Since there can be up to 8 buckets per index, other key-value pairs may need to be added. This setup thus creates
      // buckets with no more than one level of nesting.
      this.storage.set(index, [[key, value]]);
         // DONE!
      return;
    }
       // If there is a collision, as in the bucket is NOT empty and already contains the key you are trying to input OR the
       // bucket exists, but is empty.
    for (let i = 0; i < bucket.length; i++) {
         // check (iterate through each) to see if any keys in the bucket match the key we want to insert
      if (bucket[i][0] === key) { // ??? How does this reflect "If the bucket bucket exists, but is empty"
           // If the key we are searching for already exists, instead of creating a new key, you only have to replace the value.
        bucket[i][1] = value;
           // Then you can use set to redefine the bucket (see set function in helpers.js) at this.storage[index]
        this.storage.set(index, bucket);
           // DONE!
        return;
      }
    }
       // If the bucket is NOT empty, BUT the the key we're trying to insert is unique - as in, it is not there.
       // Then all we need to do is add the inputted key:value pair to the end of the bucket
       // The use of the term bucket here is a bit ambigious because there are not multiple buckets per index.  The
       // variable 'bucket' represents 'this.storage.get(index)', which is simply an index that the hash function
       // has identified as not full.  Thus, in essence, a bucket is an index which is not full.  Once that index is full
       // then it is never going to be returned by 'this.storage.get(index)'.
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table (use.splice)
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  //* Do not use delete for arrays!
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    // If the index from above does not have a bucket OR has a bucket which is empty then return nothing.
    if (!bucket) return;
    // If the bucket only has one element and that element is the input 'key', then remove it.
    if ((bucket.length === 1) && (bucket[0][0] === key)) {
      // Specifically this is done using the set function, reassigning this.storage[index] as undefined.
      this.storage.set(index, undefined);
      return;
    }
    // If there are multiple elements in the index bucket, then iterate over each of them until you find
    // the key you are looking for.  Then use .splice to remove that specific index within the index bucket.
    bucket.forEach((pair, i) => {
      if (pair[0] === key) {
        bucket.splice(i, 1); // Why do even need this???
        this.storage.set(index, bucket);
      }
    });
  }
      // For this last section here ^ that applys to the scenario where multiple elements are in the index bucket, you can also just use .filter
      // like this:
      //
      // tempBucket = tempBucket.filter(pair => pair[0] === key);
      // this.storage.set(index, tempBucket);
      //
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    // If bucket is empty or undefined then return nada.
    if (!bucket) return;
    // Uses the Array.prototype.find method to find the original 'key' input
    // const found = bucket.find((pair) => {
    //   return pair[0] === key;
    //   });
    //   // Return the "value" of the found key:value pair.
    //   return found[1];
    // }
    // }
    //
    // At this point I prefer using a for loop: -- the use of "pair" above is also a bit confusing.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}

module.exports = HashTable;
