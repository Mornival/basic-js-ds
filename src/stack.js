const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor (){
      this.stck = [];
  }
  push(element) {
      this.stck[this.stck.length] = element;
      console.log(this.stck);
  }

  pop() {
      console.log(this.stck);
      let k = this.stck[this.stck.length - 1];
      let masStck = [];
      for(let i = 0; i < this.stck.length - 1; i++){
          masStck[i] = this.stck[i];
      }
      this.stck = masStck;
      console.log(this.stck);
      console.log(k);
      return k;
  }

  peek() {
      console.log(this.stck);
      console.log(this.stck[this.stck.length - 1]);
      return this.stck[this.stck.length - 1];
  }
}
module.exports = {
  Stack
};
