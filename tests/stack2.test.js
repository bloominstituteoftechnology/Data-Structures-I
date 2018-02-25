/* eslint-disable*/

const Stack2 = require('../src/stack2');

let stack2;

describe('Stack2', () => {
  beforeEach(() => {
    stack2 = new Stack2();
  });

  it ('should have the methods "push", "pop", and the property of "size"', () => {
    const hasPush = Object.getPrototypeOf(stack2).hasOwnProperty('push');
    const hasPop = Object.getPrototypeOf(stack2).hasOwnProperty('pop');
    const hasSize = Object.getPrototypeOf(stack2).hasOwnProperty('size');
    expect(hasPush).toBe(true);
    expect(hasPop).toBe(true);
    expect(hasSize).toBe(true);
  });

  it('should return a size of 0 for a new stack', () => {
    expect(stack2.size).toBe(0);
  });

  it('should return the correct size after pushing items', () => {
    stack2.push(null);
    stack2.push(null);
    stack2.push(null);
    stack2.push(null);
    stack2.push(null);
    expect(stack2.size).toBe(5);
  });

  it('should return a size of 0 after attempting to pop more items than were added', () => {
    stack2.pop();
    stack2.pop();
    stack2.pop();
    expect(stack2.size).toBe(0);
  });

  it('should pop and return the top item', () => {
    stack2.push(1);
    expect(stack2.pop()).toBe(1);
  });

  it('should pop the most recent item added if multiple items added', () => {
    stack2.push(1);
    stack2.push(null);
    stack2.push(null);
    stack2.push(2);
    expect(stack2.pop()).toBe(2);
  });

  it('should respect the order with which elements are pushed', () => {
    stack2.push(true);
    stack2.push('hi');
    stack2.push(55);
    stack2.push(null);
    expect(stack2.pop()).toBe(null);
    expect(stack2.pop()).toBe(55);
    expect(stack2.pop()).toBe('hi');
    expect(stack2.pop()).toBe(true);
  });
});
