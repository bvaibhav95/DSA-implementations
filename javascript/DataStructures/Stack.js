/*
Stacks can be implemented using Arrays & LinkedList
Array impl is simply and efficient
Stack1 - using LinkedList
Stack2 - using array
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack1 {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let topNode = this.top;
      newNode.next = topNode;
      this.top = newNode;
    }
    return ++this.length;
  }
  pop() {
    if (!this.length) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let topNode = this.top;
    this.top = topNode.next;
    this.length--;
    return topNode;
  }
  isEmpty() {
    return this.length ? false : true;
  }
}

// let s1 = new Stack1();
// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.pop();
// s1.pop();
// s1.pop();
// console.log(s1.top);
// console.log(s1.bottom);
// console.log(s1.isEmpty());

class Stack2 {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  isEmpty() {
    return this.data.length ? false : true;
  }
}

let s2 = new Stack2();
// s2.push(1);
// s2.push(2);
// s2.push(3);
// s2.push(4);
// s2.pop();
// s2.pop();
// s2.pop();
// console.log(s2.data);
