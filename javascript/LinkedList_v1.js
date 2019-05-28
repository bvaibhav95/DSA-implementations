class Node{
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
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
    }
    addToTail(value) {
        let newNode = new Node(value, null, this.tail);
        if (!this.tail) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    removeHead() {
        if (!this.head) {
            return null;
        }
        let headValue = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null;
        }
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
}

let myLinkedList = new LinkedList();
myLinkedList.addToHead(123);
myLinkedList.addToTail(19);
myLinkedList.addToHead(123);
myLinkedList.addToHead(123);
myLinkedList.addToHead(123);
myLinkedList.addToTail(123);
// myLinkedList.addToHead(70);
// myLinkedList.addToHead('hello');
// myLinkedList.addToTail('world');
// myLinkedList.addToTail(20);
console.log(myLinkedList.indexOf(123));
