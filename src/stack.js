/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
// --------------------------------------------
class Stack {
  constructor() {
    this.length = 0;
    this.bucket = [];
    // ----------------------------------------
    this.getLength = () => {
      return this.length;
    };
    this.push = (data) => {
      this.bucket[this.length] = data; 
      this.length++;
    };
    this.pop = (data) => {
      const buffer = this.bucket[this.length];
      this.bucket[this.length] = undefined;
      this.length--;
      return buffer;
    };
    this.add = (insert, data) => {
      const tempBucket = [];
      let i = 0;
      for (;i < this.length + 1; i++) {
        if (insert === i) {
          tempBucket.push(data);
        }
        tempBucket.push(this.bucket[i]);
      }
      this.bucket = tempBucket;
    };
    this.remove = (cut) => {
      const tempBucket = [];
      let i = 0;
      const l = this.length + 1;
      for (;i < l; i++) {
        if (cut === i && i !== this.getLength) {
          i++;
        }
        tempBucket.push(this.bucket[i]);
      }
      this.bucket = tempBucket;
      this.length--;
    };
  }
}
/*
// --------------------------------------------
const myStack = new Stack();
// --------------------------------------------
myStack.push(1);
myStack.push(2);
myStack.push(33);
myStack.push(44);
myStack.push(55);
// --------------------------------------------
console.log(myStack.bucket);
// --------------------------------------------
myStack.add(3, 'INDEXED AT 3');
myStack.add(5, 'INDEXED AT 5');
// --------------------------------------------
console.log(myStack.bucket);
// --------------------------------------------
myStack.remove(4);
// --------------------------------------------
console.log(myStack.bucket);
console.log(myStack);
// --------------------------------------------
*/
module.exports = Stack;
