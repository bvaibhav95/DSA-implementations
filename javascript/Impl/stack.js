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
