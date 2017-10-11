/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
	constructor() { this.closure = []}
	size(){ return ( this.closure.length ? this.closure.length : 0)}
	enqueue(tuple){ this.closure.push(tuple)}
	dequeue(){ this.closure.shift()}
}

module.exports = Queue;

// const logit = function(que){ console.log(
// 	'this: ', que,
// 	'\nthis.size():', que.size(), '...end of test')}
// // Digestion moves toward the 0th index for ease of access.
// const test = new Queue();
// test.enqueue(['key1', 'value1']); logit(test);
// test.enqueue(['key2', 'value2']); logit(test);
// test.dequeue(); logit(test);// 2
// test.enqueue(['key3', 'value3']); logit(test); // 3
// test.dequeue(); logit(test); // 2
// test.dequeue(); logit(test); // 0
