class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  search(key) {
    if (value === this.value) {
      return this.value;
    } else if (value < this.value) {
      if (!this.left) {
        return null;
      } else {
        return this.left.search(key);
      }
    } else {
      if (!this.right) {
        return null;
      } else {
        return this.right.search(key);
      }
    }
  }
  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length) {
      let currentNode = queue.shift();
      console.log(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  depthFirstTraversal(order) {
    if (
      order === "pre-order" ||
      order === "post-order" ||
      order === "in-order"
    ) {
      if (order === "in-order") console.log(this.value);
      if (this.left) this.left.depthFirstTraversal(order);
      if (order === "pre-order") console.log(this.value);
      if (this.right) this.right.depthFirstTraversal(order);
      if (order === "post-order") console.log(this.value);
    } else {
      console.log("Invalid order");
      console.log("Choose from below");
      console.log("1. Pre-order");
      console.log("2. In-order");
      console.log("3. Post-order");
    }
  }
  getMinValueIteratively() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  getMaxValueIteratively() {
    let currentNode = this;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  getMinValueRecursively() {
    if (!this.left) {
      return this.value;
    } else {
      return this.left.getMinValueRecursively();
    }
  }
  getMaxValueRecursively() {
    if (!this.right) {
      return this.value;
    } else {
      return this.right.getMaxValueRecursively();
    }
  }
}

let myBST = new BinarySearchTree(50);
myBST.insert(40);
myBST.insert(10);
myBST.insert(20);
myBST.insert(50);
myBST.insert(60);
myBST.insert(80);

myBST.breadthFirstTraversal();
// console.log(myBST.getMaxValueRecursively());
// myBST.depthFirstTraversal("pre-order");
