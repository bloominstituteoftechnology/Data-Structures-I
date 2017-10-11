values = [];

hashMap = (key) => {
  let letters = Array.from(key);
  let index = letters.reduce((s, letter) => {
    return s + Number(letter.charCodeAt(0));
  }, 0);
  index = index % values.length;  
  return index;
}

hashTable = {
  insert: function(key, value) {
    if(value === undefined) {
      console.log("Forget you, undefineds not allowed");
      return;
    }
    let index = hashMap(key);
    console.log("hashMap created index: ", index);
    let objectAtIndex = values[index];
    if(objectAtIndex === undefined) {
      values[index] = {keyName:key, valueName:value};
    }
    else {
      if(obj instanceof Array) {
        // insert the new keyName valueNAme object into the array
      }
      else {
        let newArray = [];
        // insert this into newArray, then set newArray as the object
        // stored in the values
      }
    }
  },
  retrieve: function(key) {
    let index = hashMap(key);
    console.log("hashMap created index for retrieval: ", index);
    return values[index].valueName;
  },
  initialize: () => {
    for(i = 0 ; i < 100 ; i++ ) {
      values.push(undefined);
    }
  }
}

hashTable.initialize();
console.log("I'm about to insert {'bright': {name:'sun'}");
hashTable.insert('bright',{name:'sun'});
console.log("I'm about to retrieve 'bright'");
let bright = hashTable.retrieve('bright');
console.log("I retrieved: ");
console.log(bright);
console.log("I'm about to insert {'bright': {name:'lamp'}");
hashTable.insert('bright',{name:'lamp'});
let new_bright = hashTable.retrieve('bright');
console.log("I retrieved: ");
console.log(new_bright);

hashTable.insert('letter', 1);
hashTable.insert('fondue', 2123123);
hashTable.insert('gondue', 2);
hashTable.insert('hondue', 2);
hashTable.insert('ioasdfndue', 2);
hashTable.insert('jonduasdfde', 2);
hashTable.insert('kondue', 2);
hashTable.insert('londue', 2);
hashTable.insert('mmondueondue', 2);
hashTable.insert('nondumonduee', 2);
hashTable.insert('oondue', 2);
hashTable.insert('pondue', 2);
hashTable.insert('qondumonduemonduee', 2);
hashTable.insert('ronmonduemodfduedue', 5123123);
hashTable.insert('sondue', 2);
hashTable.insert('tondfasdfue', 2);

console.log(hashTable.retrieve('fondue'));
console.log(hashTable.retrieve('ronmonduemodfduedue'));


