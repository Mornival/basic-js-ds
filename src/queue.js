const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  cosntructor() {
      this.Queue;
  }
  getUnderlyingList() {
      return this.Queue;
  }

  enqueue(value) {
      if(!this.Queue){
          this.Queue = new ListNode(value);
      } else {
          let bottle = this.Queue;
          while(bottle.next != null){
              bottle = bottle.next;
          }
          bottle.next = new ListNode(value);
      }
  }

  dequeue() {
      let res = this.Queue.value;
      this.Queue = this.Queue.next;
      return res;
  }
}
module.exports = {
  Queue
};
