const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.log(l);
  console.log(k);
  let defaul = l;
  let position = 0;
  while(l.next){
      if (l.value == k) {
          if (position == 0) {
              if(l.next){
                  l.value = l.next.value;
                  if(l.next.next){
                      l.next = l.next.next;
                  } else {
                      l.next = null;
                  }
              }
              position--;
          }
      } else if (l.next.value == k) {
        if (l.next.next) {
            l.next = l.next.next;
        } else {
            l.next = null;
        }
        position--;
    } else {
        l = l.next;
    }
      position++;
  }
console.log(defaul);
return defaul;
}

module.exports = {
  removeKFromList
};
