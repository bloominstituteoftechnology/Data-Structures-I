/*
  o1. Add a constructor with a storage structure; there are multiple options you could use for this
  sizeGetter () {
    return this.size;
  }

  2. Add a size getter that returns the number of items the stack is storing
  this.storage = {}:
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  pushToStack(item) this.storage=item
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor(){
    this.storage = [];
    this.count= 0;
  }

  get size(){
    return this.count;
  }

  push(value){
    this.storage[this.count]=value;
    this.count++;
  }
  pop(){
    if(this.count===0){return null};
    let item = this.storage[this.count-1];
    this.storage[this.count-1]-null;
    this.count--;
    return item
  }
}

module.exports = Stack;
