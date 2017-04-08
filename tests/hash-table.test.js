const HashTable = require('../src/hash-table');
const helpers = require('../src/hash-table-helpers');
let hashTable;

describe('HashTable', () => {

  beforeEach(() => {
  	hashTable = new HashTable();
  });

  it('should have "insert", "remove" and "retrieve" methods', () => {
  	const hasInsert = hashTable.hasOwnProperty('insert') || hashTable.__proto__.hasOwnProperty('insert') ? true : false;
  	const hasRemove = hashTable.hasOwnProperty('remove') || hashTable.__proto__.hasOwnProperty('remove') ? true : false;
  	const hasRetrieve = hashTable.hasOwnProperty('retrieve') || hashTable.__proto__.hasOwnProperty('retrieve') ? true : false;
  	expect(hasInsert).toBe(true);
  	expect(hasRemove).toBe(true);
  	expect(hasRetrieve).toBe(true);
  });

  it('should save and return values by key', () => {
  	hashTable.insert('hello', 'there');
  	expect(hashTable.retrieve('hello')).toBe('there');
  });

  it('should save and return values by key', () => {
  	hashTable.insert('hello', 'there');
  	expect(hashTable.retrieve('hello')).toBe('there');
  });

  it('should properly remove items', () => {
  	hashTable.insert('Ben', 'Nelson');
  	hashTable.remove('Ben');
  	expect(hashTable.retrieve('Ben')).toBe(null);
  });

  it('should properly handle collisions', () => {
  	hashTable.insert('B', 'First Value');
  	hashTable.insert('HI!', 'Second Value');
  	expect(hashTable.retrieve('B')).toBe('First Value');
  	expect(hashTable.retrieve('HI!')).toBe('Second Value');
  });

  it('should handle numbers as keys', () => {
  	hashTable.insert(0, 'First Value');
  	hashTable.insert(1, 'Second Value');
  	expect(hashTable.retrieve(0)).toBe('First Value');
  	expect(hashTable.retrieve(1)).toBe('Second Value');
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