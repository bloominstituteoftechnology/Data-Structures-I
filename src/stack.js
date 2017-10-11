/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

class Stack {
	constructor(){ this.closure = []}
	size(){ return (this.closure.length ? this.closure.length : 0)}
	push(tuple){ this.closure.push(tuple)}
	pop(){ if (this.closure.length > 0) this.closure.pop()}
}

module.exports = Stack;


// const logit = function(stack){ console.log(
// 	'this: ', stack,
// 	'\nthis.Size():', stack.size(), '...end of test')}

// const test = new Stack();
// test.push(['key1', 'value1']); logit(test);
// test.push(['key2', 'value2']); logit(test);
// test.pop(); logit(test);// 2
// test.push(['key3', 'value3']); logit(test); // 3
// test.pop(); logit(test); // 2
// test.pop(); logit(test); // 0
// test.pop(); logit(test); // testing conditional
