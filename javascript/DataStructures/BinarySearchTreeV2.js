class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return value;
    } else {
      return this.insertNode(this.root, newNode);
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
  dfsSearch(value) {
    if (!this.root) {
      return null;
    } else {
      return this.search(this.root, value);
    }
  }
  search(node, value) {
    let currentNode = node;
    if (currentNode.value === value) {
      return currentNode.value;
    } else if (value > currentNode.value) {
      return this.search(currentNode.right, value);
    } else {
      return this.search(currentNode.left, value);
    }
  }
  bfsSearch(value) {
    let queue = [this.root];
    while (queue.length !== 0) {
      let popped = queue.pop();
      if (popped.data === value) {
        return value;
      }
      if (popped.left) {
        queue.push(popped.left);
      }
      if (popped.right) {
        queue.push(popped.right);
      }
    }
    return null;
  }
  //Incomplete
  //Ref - https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
  remove(value) {
    if (this.root) {
      return null;
    } else {
      this.removeNode(this.root, value);
    }
  }
  removeNode(node, value) {
    if (!node) {
      return null;
    } else if (node.data > value) {
      return this.removeNode(node.left, value);
    } else if (node.data < value) {
      return this.removeNode(node.right, value);
    } else {
    }
  }
}

let myBinarySearchTree = new BinarySearchTree();
console.log(myBinarySearchTree.insert(3));
console.log(myBinarySearchTree.insert(1));
console.log(myBinarySearchTree.insert(5));
console.log(myBinarySearchTree.insert(4));
console.log(myBinarySearchTree.insert(6));
console.log(myBinarySearchTree.bfsSearch(5));
