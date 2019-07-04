class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinartSearchTree {
  constructor(root) {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    let currentNode = root;
    if (newNode.data > currentNode.data) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return newNode.data;
      } else {
        return this.insertNode(currentNode.right, newNode);
      }
    } else {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return newNode.data;
      } else {
        return this.insertNode(currentNode.left, newNode);
      }
    }
  }
  remove(value) {}
}

let myBinarySearchTree = new BinartSearchTree();
console.log(myBinarySearchTree.insert(3));
console.log(myBinarySearchTree.insert(1));
console.log(myBinarySearchTree.insert(5));
console.log(myBinarySearchTree.insert(4));
console.log(myBinarySearchTree.insert(6));
console.log(myBinarySearchTree.root.right.right);
