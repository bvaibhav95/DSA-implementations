class Node {
  constructor(data, next) {
    this.next = next;
    this.data = data;
  }
}
/**
 * Here we don't need to maintain two pointers HEAD & TAIL unlike LinkedList
 */
class CircularLinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let currentNode = this.head;
      let firstNode = this.head;
      newNode.next = this.head;
      this.head = newNode;
      while (currentNode.next !== firstNode) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  removeFromHead() {
    let firstNode = this.head;
    let currentNode = this.head;
    if (this.head) {
      this.head = firstNode.next;
      while (currentNode.next !== firstNode) {
        currentNode = currentNode.next;
      }
      currentNode.next = this.head;
      return firstNode.data;
    } else {
      return null;
    }
  }
  traverse() {
    let firstNode = this.head;
    let currentNode = this.head;
    let elements = [];
    if (this.head) {
      while (currentNode.next !== firstNode) {
        if (currentNode.data) {
          elements.push(currentNode.data);
        }
        currentNode = currentNode.next;
      }
      elements.push(currentNode.data);
    }
    return elements;
  }
}

const myCircularLinkedList = new CircularLinkedList();
myCircularLinkedList.insertAtHead(1);
myCircularLinkedList.insertAtHead(2);
console.log(myCircularLinkedList.removeFromHead());
myCircularLinkedList.insertAtHead(3);
myCircularLinkedList.insertAtHead(4);
myCircularLinkedList.insertAtHead(5);
console.log(myCircularLinkedList.traverse());
