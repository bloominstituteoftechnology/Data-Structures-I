/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

class Stack {
	constructor(){ this.closure = []}
	Size(){ return (this.closure.length ? this.closure.length : 0)}
	Push(tuple){ this.closure.push(tuple)}
	Pop(){ if (this.closure.length > 0) this.closure.pop()}
}

module.exports = Stack;


const logit = function(stack){ console.log(
	'this: ', stack,
	'\nthis.Size():', stack.Size(), '...end of test')}

const test = new Stack();
test.Push(['key1', 'value1']); logit(test);
test.Push(['key2', 'value2']); logit(test);
test.Pop(); logit(test);// 2
test.Push(['key3', 'value3']); logit(test); // 3
test.Pop(); logit(test); // 2
test.Pop(); logit(test); // 0
test.Pop(); logit(test); // testing conditional
