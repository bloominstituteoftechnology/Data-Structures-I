/* eslint-disable */
/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    // (Quokka) You can see that all this is doing is add an empty array, which will serve as the defacto Stack.  Whenever a value
    // is pushed on to the, 
    this.storage = [];
  }
  get size() { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    return this.storage.length; // Using the TEST, you'll see that get allows you to simply type myStack.size to access this return.
  }
  push(item) {
    return this.storage.push(item);
  }
  pop() {
    return this.storage.pop();
  }
}

// TEST:
var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack)
console.log(myStack.size);
myStack.pop();
console.log(myStack.size);



module.exports = Stack;