// Impl : 1
//Implement 2 Stacks using an array of fixed length
/*
1. Divide into half and once pointer for Stack1 goes above half or pointer for Stack2 goes below half...StackOverflow
2. Start pushing into 2 stacks from different ends of the array, when pointers meet each other make stack overflow
*/
class Stack1 {
  constructor(arr) {
    this.arr = arr;
    this.pointer = 0;
  }
  push(value) {
    if (!this.arr[this.pointer]) {
      this.arr[this.pointer] = value;
      return ++this.pointer;
    } else {
      console.log("Stack1 overflow");
      return null;
    }
  }
  pop() {
    if (this.arr[this.pointer - 1] && this.pointer >= 1) {
      this.arr[this.pointer - 1] = undefined;
      return --this.pointer;
    } else {
      console.log("Stack1 empty");
      return null;
    }
  }
}
class Stack2 {
  constructor(arr) {
    this.arr = arr;
    this.pointer = this.arr.length - 1;
  }
  push(value) {
    if (!this.arr[this.pointer]) {
      this.arr[this.pointer] = value;
      return --this.pointer;
    } else {
      console.log("Stack2 overflow");
      return null;
    }
  }
  pop() {
    if (this.arr[this.pointer + 1] && this.pointer <= this.arr.length - 1) {
      this.arr[this.pointer + 1] = undefined;
      return ++this.pointer;
    } else {
      console.log("Stack2 empty");
      return null;
    }
  }
}

// let arr = Array(5);
// let s1 = new Stack1(arr);
// let s2 = new Stack2(arr);
// s1.push(1);
// s1.push(1);
// s1.push(1);
// s1.pop();
// s2.push(1);
// s2.push(1);
// s2.push(1);
// s2.push(1);
// s1.push(1);
// s2.pop();
// console.log(arr);

//---------------------------------------------------------------------------------------------------------------------------------------

//Impl : 2
/**
 * How to implement a stack which will support following operations in O(1) time complexity?
 * 1) push() which adds an element to the top of stack.
 * 2) pop() which removes an element from top of stack.
 * 3) findMiddle() which will return middle element of the stack.
 * 4) deleteMiddle() which will delete the middle element.
 */
class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
    this.mid = null;
  }
  setMidNodeOnHeadAdd(node, prevMid) {
    if (this.count % 2 !== 0) {
      this.mid = prevMid.prev;
    } else {
      if (node.next) {
        this.mid = prevMid;
      } else {
        this.mid = node;
      }
    }
  }
  setMidNodeOnTailAdd(node, prevMid) {
    if (this.count % 2 === 0) {
      this.mid = prevMid.next;
    } else {
      if (node.prev) {
        this.mid = prevMid;
      } else {
        this.mid = node;
      }
    }
  }
  setMidNodeOnHeadRemove(prevMid) {
    if (this.count % 2 === 0) {
      this.mid = prevMid.next;
    }
  }
  setMidNodeOnTailRemove(prevMid) {
    if (this.count % 2 !== 0) {
      this.mid = prevMid.prev;
    }
  }
  addToHead(value) {
    let newNode = new Node(value, this.head, null);
    this.count++;
    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.setMidNodeOnHeadAdd(newNode, this.mid);
  }
  addToTail(value) {
    this.count++;
    let newNode = new Node(value, null, this.tail);
    if (!this.tail) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.setMidNodeOnTailAdd(newNode, this.mid);
  }
  removeHead() {
    this.count--;
    if (!this.head) {
      return null;
    }
    let headValue = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.setMidNodeOnHeadRemove(this.mid);
    return headValue;
  }
  removeTail() {
    this.count--;
    if (!this.tail) {
      return null;
    }
    let tailValue = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.setMidNodeOnTailRemove(this.mid);
    return tailValue;
  }
  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  indexOf(key) {
    let indices = [];
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === key) {
        indices.push(counter);
      }
      currentNode = currentNode.next;
      counter++;
    }
    return indices;
  }
  remove(key) {
    this.count--;
    if (this.head) {
      let flag = false;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === key) {
          flag = true;
          let thisNode = currentNode;
          if (thisNode === this.head) {
            thisNode.next.prev = null;
            this.head = thisNode.next;
          } else if (thisNode === this.tail) {
            thisNode.prev.next = null;
            this.tail = thisNode.prev;
          } else {
            thisNode.next.prev = thisNode.prev;
            thisNode.prev.next = thisNode.next;
          }
        }
        currentNode = currentNode.next;
      }
      if (flag) return key;
      else null;
    } else return null;
  }
}

// let speccialStack = new LinkedList();
// speccialStack.addToTail(1);
// speccialStack.addToTail(2);
// speccialStack.addToTail(3);
// speccialStack.addToHead(4);
// speccialStack.addToHead(6);
// speccialStack.removeHead();
// speccialStack.removeTail();
// speccialStack.removeHead();
// speccialStack.addToHead(8);
// console.log(speccialStack.mid);

//Impl : 3
/*
  Reverse stack using recursion ?
  1. Write a program to reverse a stack using recursion. You are not allowed to use loop constructs like while, for..etc, and you can only use the following ADT functions on Stack S:
    isEmpty(S)
    push(S)
    pop(S)
    Assumption - (OldStack will get empty after reversal)
*/
class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
    return value;
  }
  pop() {
    return this.data.length ? this.data.pop() : null;
  }
  isEmpty() {
    return this.data.length ? false : true;
  }
}

let oldStack = new Stack();
let newStack = new Stack();
oldStack.push(1);
oldStack.push(2);
oldStack.push(3);
oldStack.push(4);
// oldStack.pop();
console.log(oldStack);

function reverseStackRecursively(oldStack, newStack) {
  if (oldStack.isEmpty()) {
    console.log(newStack.data);
    return newStack;
  } else {
    newStack.push(oldStack.pop());
    reverseStackRecursively(oldStack, newStack);
  }
}

function insertAtTheBotttom(stack, poppedItem) {
  console.log(stack, "in");
  if (stack.isEmpty()) {
    stack.push(poppedItem);
  } else {
    let temp = stack.pop();
    insertAtTheBotttom(stack, poppedItem);
    stack.push(temp);
  }
}

function reverseStackRecursivelyV1(stack) {
  console.log(stack, "rec");
  if (!stack.isEmpty()) {
    let poppedItem = stack.pop();
    reverseStackRecursivelyV1(stack);
    insertAtTheBotttom(stack, poppedItem);
  }
}
reverseStackRecursivelyV1(oldStack);
console.log(oldStack);
// let newStack = new Stack();
// console.log(newStack.isEmpty());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.isEmpty());
// console.log(newStack.pop());
// console.log(newStack.isEmpty());
