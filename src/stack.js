class Stack {
  constructor() {
    this.storage = [];
    // this.size = this.stack.length;
  }
  size() { return this.storage.length; }
  add() { return this.storage.push(); }
  remove() { return this.storage.pop(); }
}

class User {
  constructor(poop) {
    // set a username and password property on the user object that is created
    this.username = poop['username'];
    this.password = poop.password;
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
  checkPwd(compareString) {
    return compareString === this.password;
  }
}

const me = new User({ username: 'LambdaSchool', password: 'correcthorsebatterystaple' });
// true case
const result = me.checkPwd('correcthorsebatterystaple'); // should return `true`
console.log(result);// ---> true
// false case
const falseResult = me.checkPwd('staplehorsecorrectbattery'); // should return `false`
console.log(falseResult);// ---> false

const someoneElse = new User({username: 'Bob', password: 'blob'})






module.exports = Stack;
