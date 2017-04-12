/* eslint-disable no-undef, no-prototype-builtins */

const Stack = require('../src/stack');

let stack;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it('should have the methods "add", "remove", and the property "size"', () => {
    const hasAdd = stack.hasOwnProperty('add') || Object.getPrototypeOf(stack).hasOwnProperty('add');
    const hasRemove = stack.hasOwnProperty('remove') || Object.getPrototypeOf(stack).hasOwnProperty('remove');
    const hasSize = stack.hasOwnProperty('size') || Object.getPrototypeOf(stack).hasOwnProperty('size');
    expect(hasAdd).toBe(true);
    expect(hasRemove).toBe(true);
    expect(hasSize).toBe(true);
  });

  it('should return a size of 0 for a new stack', () => {
    expect(stack.size).toBe(0);
  });

  it('should return a size of 10 after adding 10 items to the stack', () => {
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
    expect(stack.remove()).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to remove more items than were added', () => {
    stack.remove();
    stack.remove();
    stack.remove();
    expect(stack.size).toBe(0);
  });

  it('should remove and return the top item', () => {
    stack.add(1);
    expect(stack.remove()).toBe(1);
  });

  it('should remove the most recent item added if multiple items added', () => {
    stack.add(true);
    stack.add('hi');
    stack.add(null);
    stack.add(77);
    expect(stack.remove()).toBe(77);
  });

  it('should respect the order with which elements are added', () => {
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
