/* eslint-disable */
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
 // ??? What does "storageStructure" imply?

 class Queue {
  // ??? Why does this constructor not have any parameters?  Why DO the others we have used in the past
  // HAVE parameters?
  constructor() {
    this.storage = [];
  } // This Class Declaration Satisfies #1
  
// Methods added #'s 2-4
  // SAME as stack in that it pushes items onto the left of the array.
  enqueue(item) {
    this.storage.push(item);
  }
  // DIFFERENT from stack in that it removes items from the LEFT rather than the RIGHT side of the array.
  // FIRST IN, FIRST OUT
  dequeue() {
    return this.storage.shift();
  }
  // Exactly the same method for determining size.
  // Essentially you will want to use a getter when you wish to write a method that retrieves some information ABOUT the
  // class 
  // MDN writes: "The get syntax binds an object property to a function that will be called when that property is looked up"
    // So in this case this.storage is the "object property" and .length is the "function" that it is bound to.
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;
