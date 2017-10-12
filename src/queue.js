/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
// --------------------------------------------
class Queue {
  constructor() {
    this.length = 0;
    this.bucket = [];
    // ----------------------------------------
    this.getLength = () => {
      return this.length;
    };
    this.enqueue = (data) => {
      const tempBuffer = [];
      tempBuffer[0] = data;
      let i = 0;
      const l = this.length;
      for (; i < l; i++) {
        tempBuffer[i + 1] = this.bucket[i];
      }
      this.bucket = tempBuffer;
      this.length++;
    };
    this.dequeue = () => {
      const tempBuffer = [];
      let i = 0;
      this.length--;
      const l = this.length;
      for (; i < l; i++) {
        tempBuffer[i] = this.bucket[i + 1];        
      }
      this.bucket = tempBuffer;
    };
  }
}
/*
// ----------------------------------------------
const myQueue = new Queue();
// --------------------------------------------
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(33);
myQueue.enqueue(44);
myQueue.enqueue(55);
// --------------------------------------------
console.log(myQueue.bucket);
// --------------------------------------------
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
// --------------------------------------------
console.log(myQueue.bucket);
console.log(myQueue);
*/
// --------------------------------------------
module.exports = Queue;