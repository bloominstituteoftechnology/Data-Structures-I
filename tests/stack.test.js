const Stack = require('../src/stack');

describe('Stack', () => {
  it('should return a size of 0 for a new stack', () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
  });

  it('should return a size of 10 after adding 10 items to the stack', () => {
    const stack = new Stack();
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    stack.add(null);
    expect(stack.size).toBe(10);
  });

  it('should not error when attempting to remove an item from an empty stack', () => {
    const stack = new Stack();
    expect(stack.remove()).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to remove more items than were added', () => {
    const stack = new Stack();
    stack.remove();
    stack.remove();
    stack.remove();
    expect(stack.size).toBe(0);
  });

  it('should remove and return the top item', () => {
    const stack = new Stack();
    stack.add(1);
    expect(stack.remove()).toBe(1);
  });

  it('should remove the most recent item added if multiple items added', () => {
    const stack = new Stack();
    stack.add(true);
    stack.add('hi');
    stack.add(null);
    stack.add(77);
    expect(stack.remove()).toBe(77);
  });

  it('should respect the order with which elements are added', () => {
    const stack = new Stack();
    stack.add(true);
    stack.add('hi');
    stack.add(null);
    stack.add(77);
    expect(stack.remove()).toBe(77);
    expect(stack.remove()).toBe(null);
    expect(stack.remove()).toBe('hi');
    expect(stack.remove()).toBe(true);
  });
});

