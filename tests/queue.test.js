const Queue = require('../src/queue');
let queue;

describe('Queue', () => {
  
  beforeEach(() => {
  	queue = new Queue();
  });

  it('should have the methods "enqueue", "dequeue", and the property "size"', () => {
    const hasEnqueue = queue.hasOwnProperty('enqueue') || queue.__proto__.hasOwnProperty('enqueue') ? true : false;
    const hasDequeue = queue.hasOwnProperty('dequeue') || queue.__proto__.hasOwnProperty('dequeue') ? true : false;
    const hasSize = queue.hasOwnProperty('size') || queue.__proto__.hasOwnProperty('size') ? true : false;
    expect(hasEnqueue).toBe(true);
    expect(hasDequeue).toBe(true);
    expect(hasSize).toBe(true);
  });

  it('should return a size of 0 for an empty queue', () => {
    expect(queue.size).toBe(0);
  });

  it('should return a size of 10 after queuing 10 items', () => {
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    expect(queue.size).toBe(10);
  });

  it('should not error when attempting to dequeue an item from an empty queue', () => {
    expect(queue.dequeue()).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to dequeue more items than were queued', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it('should dequeue and return the top item', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });

  it('should dequeue the first item queued if multiple items were queued', () => {
    queue.enqueue(true);
    queue.enqueue('hi');
    queue.enqueue(null);
    queue.enqueue(77);
    expect(queue.dequeue()).toBe(true);
  });

  it('should respect the order with which elements are queued', () => {
    queue.enqueue(true);
    queue.enqueue('hi');
    queue.enqueue(null);
    queue.enqueue(77);
    expect(queue.dequeue()).toBe(true);
    expect(queue.dequeue()).toBe('hi');
    expect(queue.dequeue()).toBe(null);
    expect(queue.dequeue()).toBe(77);
  });
});

