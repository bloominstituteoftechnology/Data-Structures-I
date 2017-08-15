/* eslint-disable no-undef, no-prototype-builtins */
const HashTable = require('../src/hash-table');

let hashTable;

describe('HashTable', () => {
  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should have "insert", "remove" and "retrieve" methods', () => {
    const hasInsert = Object.getPrototypeOf(hashTable).hasOwnProperty('insert');
    const hasRemove = Object.getPrototypeOf(hashTable).hasOwnProperty('remove');
    const hasRetrieve = Object.getPrototypeOf(hashTable).hasOwnProperty('retrieve');
    expect(hasInsert).toBe(true);
    expect(hasRemove).toBe(true);
    expect(hasRetrieve).toBe(true);
  });

  it('should save and return values by key', () => {
    hashTable.insert('hello', 'there');
    expect(hashTable.retrieve('hello')).toBe('there');
  });

  it('should properly remove items', () => {
    hashTable.insert('Ben', 'Nelson');
    hashTable.remove('Ben');
    expect(hashTable.retrieve('Ben')).toBe(undefined);
  });

  it('should handle numbers as keys', () => {
    hashTable.insert(0, 'First Value');
    hashTable.insert(1, 'Second Value');
    expect(hashTable.retrieve(0)).toBe('First Value');
    expect(hashTable.retrieve(1)).toBe('Second Value');
  });

  // it('should overwrite the value when using the same key', () => {
  //   hashTable.insert(0, 'First Value');
  //   hashTable.insert(0, 'Second Value');
  //   expect(hashTable.retrieve(0)).toBe('Second Value');
  // });

  /* Extra Credit */

  it('should properly handle collisions', () => {
    hashTable.insert('B', 'First Value');
    hashTable.insert('HI!', 'Second Value');
    expect(hashTable.retrieve('B')).toBe('First Value');
    expect(hashTable.retrieve('HI!')).toBe('Second Value');
  });
  it('should resize the hash table when > 75% full', () => {
    hashTable.insert('a', true);
    hashTable.insert('b', true);
    hashTable.insert('c', true);
    hashTable.insert('d', true);
    hashTable.insert('e', true);
    hashTable.insert('f', true);
    hashTable.insert('g', true);
    expect(hashTable.limit).toBe(16);
    expect(hashTable.storage.length).toBe(8);
  });
});
