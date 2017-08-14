'use strict';

class Queue {
    constructor() {
        // emoty queue
        this.queue = [];
    }
    
    enqueue(item) {
        // add item to the queue
        this.queue.unshift(item);
    }
    
    dequeue() {
        // remove item only if there's something to remove
        if (!this.size() <= 0) {
            this.queue.shift();
        }
    }
    
    size() {
        // size of the queue
        return this.queue.length; 
    }
    
}

module.exports = Queue;
