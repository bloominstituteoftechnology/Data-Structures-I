/* eslint-disable*/

const Stack2 = require('../src/stack2');

/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

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
});
