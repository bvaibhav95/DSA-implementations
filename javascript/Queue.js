/*
Queues can be implemented using Arrays & LinkedList
Best with LinkedList as Array insertion & deletion is O(n) as we remove element or insert we have to shift full array
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  isEmpty() {
    return this.data.length ? false : true;
  }
  first() {
    return this.first;
  }
  last() {
    return this.last;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let firstNode = this.first;
    this.first = this.first.next;
    this.length--;
    return firstNode.value;
  }
}

/**
 * Implementation using 2 stacks
 */
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    let length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
  }
  dequeue() {
    let length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    return this.first.pop();
  }
  isEmpty() {
    return this.first.length && this.last.length ? false : true;
  }
  firstElem() {
    if (this.last.length > 0) {
      return this.last[0];
    } else {
      return this.first[this.first.length - 1];
    }
  }
  lastElem() {
    if (this.first.length > 0) {
      return this.first[0];
    } else {
      return this.last[this.last.length - 1];
    }
  }
}

let q = new CrazyQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// q.dequeue();
console.log(q.firstElem());
console.log(q.lastElem());
