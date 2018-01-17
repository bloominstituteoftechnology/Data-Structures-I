/*eslint-disable*/
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
const LinkedList = require('./linked-list.js');
class Stack {
  constructor() { 
//	this.stacksize = 0;
//  this.storage = [];		
   this.storage = new LinkedList();
  }
//   get size () {
	//	 return this.stacksize;
//	 }
 get size() {
	 let node = this.storage.head;
	 let stackcounter = 0;
	 while (node !== null ){
		 node = node.next;
		 stackcounter++;
	}
	 return stackcounter;
	}

	 push(stackitem) {
      this.storage.addToHead(stackitem);
//		this.stacksize++;
//	  this.storage[this.size] = stackitem;
//		this.storage.push(stackitem);
}
//  delete this.storage[this.storage.stacksize] 
  pop() {
      return this.storage.removeHead();
//	  if (this.stacksize > 0) {
//		this.stacksize--;
//	    const stackpop = this.storage[this.stacksize - 1];   
//        this.storage.splice(this.stacksize - 1);              
//        this.stacksize--; 
//				return stackpop;
	//		return this.storage.pop();
//  }
 }
}
module.exports = Stack;
