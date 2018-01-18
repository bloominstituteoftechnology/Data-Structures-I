/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

/* eslint-disable */
class Stack {
	// add storage structure / basically an array and count starting at 0
	constructor() {
		this.storage = [];
		this.count = 0;
	}

	get size() {
		return this.count;
	}

	push(input) {
		this.storage[this.count] = input
		this.count++;
		return this.count; 
	}
	// remove the last item
	pop() {
		// if storage size is zero return null
    if (this.size === 0) return null;
    // store last item in popped
    const popped = this.storage[this.size - 1];
    // assign last item to null, therefore removing it

    // does this become storage[this.size -1] equal null? don't we want it to equal to undefined by using splice?
    this.storage.splice(this.size - 1, 1);

    // decrease count
    this.count--;
    // return the popped item
    return popped;
  }
	
}



module.exports = Stack;
