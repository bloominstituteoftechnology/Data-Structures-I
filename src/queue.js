/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.frontOfQueue = null;
  }

  enqueue(item) {
    const newNode = {
      value: item,
      nextNodeInQueue: null,
    };
    if (this.frontOfQueue === null) {
      this.frontOfQueue = newNode;
    } else {
      const queueTraverser = (node) => {
        if (node.nextNodeInQueue === null) node.nextNodeInQueue = newNode;
        else queueTraverser(node.nextNodeInQueue);
      };
      queueTraverser(this.frontOfQueue);
    }
  }

  dequeue() {
    if (this.frontOfQueue === null) return null;
    const dequeuedNode = this.frontOfQueue;
    this.frontOfQueue = this.frontOfQueue.nextNodeInQueue;
    return dequeuedNode.value;
  }

  get size() {
    if (this.frontOfQueue === null) return 0;
    let numOfNodes = 1;
    const queueCounter = (node) => {
      if (node.nextNodeInQueue === null) return numOfNodes;
      numOfNodes++;
      return queueCounter(node.nextNodeInQueue);
    };
    return queueCounter(this.frontOfQueue);
  }
}

module.exports = Queue;
