/*eslint-disable*/

/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

const LinkedList = require('./linked-list.js');
class Queue {
  constructor() {
	 // this.queuesize = 0; 
	 // this.storage = [];
		this.storage = new LinkedList();
	}	

	  get size () {
     return this.queuesize;
		}
		
		get size() {
			let node = this.storage.head;
			let queuecounter = 0;
      while (node !== null) {
				node = node.next;
				queuecounter++;
			}
			return queuecounter;
		}
	 
		enqueue(queueitem) {
		this.storage.addToTail(queueitem);
//		this.queuesize++;
//    this.storage = this.storage.concat(null).map((queueelement, queueitemindex) => {
//			return queueitemindex === 0 ? queueitem : this.storage[queueitemindex - 1];
	//  this.storage.unshift(queueitem);
//  });
}  
   dequeue() {
		 return this.storage.removeHead();
//		if (this.queuesize > 0) {
	//		this.queuesize--;
	//	const queuepop = this.storage[this.size - 1];
		//	this.storage.splice(this.size - 1);
	//	  this.queuesize--;
	//		return queuepop;
//	}
//		return this.storage.pop();
 }

}
module.exports = Queue;
