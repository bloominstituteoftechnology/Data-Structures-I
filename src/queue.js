/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.oldestIndex = 0;
    this.newestIndex = 0;
    this.size = 0;
    this.storage = {};
  }

  size() {
    this.size = this.newestIndex - this.oldestIndex;
    return this.size;
  }

  enqueue(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
  }

  dequeue() {
    const oldestIndex = this.oldestIndex;
    const newestIndex = this.newestIndex;
    let deletedData;

    if (oldestIndex !== newestIndex) {
      deletedData = this.storage[oldestIndex];
      delete this.storage[oldestIndex];
      this.oldestIndex++;

      return deletedData;
    }
  }
}

const myList = new Queue();
// myList.enqueue('yasin');
// myList.enqueue('samir');
// console.log(myList.size());

// myList.enqueue('diana');
// myList.enqueue('delal');
// myList.enqueue('mohammed');
// myList.enqueue('dunya');
// console.log(myList.newestIndex - myList.oldestIndex);
// console.log(myList);
// console.log(myList.dequeue());
// console.log(myList);
module.exports = Queue;
