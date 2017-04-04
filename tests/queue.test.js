const Queue = require('../src/queue');

describe('Queue', () => {
  it('should return a size of 0 for an empty queue', () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
  });

  it('should return a size of 10 after queuing 10 items', () => {
    const queue = new Queue();
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
    const queue = new Queue();
    expect(queue.dequeue()).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to dequeue more items than were queued', () => {
    const queue = new Queue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it('should dequeue and return the top item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });

  it('should dequeue the first item queued if multiple items were queued', () => {
    const queue = new Queue();
    queue.enqueue(true);
    queue.enqueue('hi');
    queue.enqueue(null);
    queue.enqueue(77);
    expect(queue.dequeue()).toBe(true);
  });

  it('should respect the order with which elements are queued', () => {
    const queue = new Queue();
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

