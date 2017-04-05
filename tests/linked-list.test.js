const LinkedList = require('../src/linked-list');
let list;

describe('LinkedList', () => {

  beforeEach(() => {
  	list = new LinkedList();
  });

  it('should have both a head and a tail property', () => {
    const hasHead = list.hasOwnProperty('head') || list.__proto__.hasOwnProperty('head') ? true : false;
    const hasTail = list.hasOwnProperty('tail') || list.__proto__.hasOwnProperty('tail') ? true : false;
    expect(hasHead).toBe(true);
    expect(hasTail).toBe(true);
  });

  it('should have the methods "addToTail", "removeHead", and "contains"', () => {
    const hasAddToTail = list.hasOwnProperty('addToTail') || list.__proto__.hasOwnProperty('addToTail') ? true : false;
    const hasRemoveHead = list.hasOwnProperty('removeHead') || list.__proto__.hasOwnProperty('removeHead') ? true : false;
    const hasContains = list.hasOwnProperty('contains') || list.__proto__.hasOwnProperty('contains') ? true : false;
    expect(hasAddToTail).toBe(true);
    expect(hasRemoveHead).toBe(true);
    expect(hasContains).toBe(true);
  });

  it('should update the tail value when a new node is added', () => {
  	list.addToTail(1);
  	expect(list.tail.value).toBe(1);
  	list.addToTail(2);
  	expect(list.tail.value).toBe(2);
  });

  it('should keep the same head after adding nodes', () => {
  	list.addToTail(1);
  	expect(list.head.value).toBe(1);
  	list.addToTail(2);
  	expect(list.head.value).toBe(1);
  });

  it('should return true from contains if a matching value is found and false otherwise', () => {
  	list.addToTail(1);
  	list.addToTail(2);
  	list.addToTail('hello');
  	list.addToTail(true);
  	expect(list.contains('hello')).toBe(true);
  	expect(list.contains('asdf')).toBe(false);
  });

  it('should remove head when removeHead is invoked', () => {
  	list.addToTail(1);
  	list.addToTail(2);
  	expect(list.head.value).toBe(1);
  	list.removeHead();
  	expect(list.head.value).toBe(2);
  });

  it('should return the head that is removed when removeHead is invoked', () => {
  	list.addToTail(1);
  	expect(list.removeHead()).toBe(1);
  });

  it('should not contain removed values', () => {
  	list.addToTail(1);
  	list.removeHead();
  	expect(list.contains(1)).toBe(false);
  });
});