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
    this.length = 0;
  }
  addToHead(value) {
    // please watch the steps of each line
    /**
     * Ex. this.head = newNode is at last because
     * unless everything is set head of LinkedList cannot be set i.e.
     * once all the next/prev pointers of newly added Node aren't set we
     * can't set head of LinkedList
     */
    let newNode = new Node(value, this.head, null);
    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }
  addToTail(value) {
    let newNode = new Node(value, null, this.tail);
    if (!this.tail) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  removeHead() {
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
    this.length--;
    return headValue;
  }
  removeTail() {
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
    this.length--;
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
    this.length--;
  }
  rotateBy(n) {
    let currentNode = this.head;
    if (this.length - n > 0) {
      for (let i = 1; i < this.length - n; i++) {
        currentNode = currentNode.next;
      }
      let oldTailNode = this.tail;
      oldTailNode.next = this.head;
      let newTailNode = currentNode;
      let newHeadNode = currentNode.next;
      newTailNode.next = null;
      newHeadNode.prev = null;
      this.tail = newTailNode;
      this.head = newHeadNode;
    } else if (this.length - n < 0) {
      console.log("Cannot rotate list");
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.addToTail(1);
myLinkedList.addToTail(2);
myLinkedList.addToTail(3);
myLinkedList.addToTail(4);
myLinkedList.addToTail(5);
myLinkedList.addToTail(6);
// console.log(myLinkedList.remove(125));
myLinkedList.rotateBy(6);
console.log(myLinkedList);
