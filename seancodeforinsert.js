insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      // if bucket is undefined, we need to add a bucket there
      this.storage.set(index, [[key, value]]);
      return;
    }

    // we have a collision or we have an empty bucket 
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to insert
      if (bucket[i][0] === key) {
        // this means we have a duplicate key we're trying to insert
        bucket[i][1] = value;
        this.storage.set(index, bucket);
        return;
      }
    }

    // the key we're trying to insert is unique
    bucket.push([key, value]);
    this.storage.set(index, bucket);
 }