/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
/* eslint-disable */
class Queue {
	constructor(){
		this.storage = [];
		this.count = 0;
	}

	get size(){
		return this.count;
	}

	enqueue(input) {
		this.storage.splice(0, 0, input);
		this.count++;
	}

	dequeue() {
		if(this.size === 0) return 0;
		const top = this.storage[this.size - 1];
		this.storage.splice(this.size - 1, 1);
		this.count--;
		return top;
	}
}

module.exports = Queue;
