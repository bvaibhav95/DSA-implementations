class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class HashTable {
  constructor(size) {
    this.bucket = Array(size);
    this.numOfBuckets = this.bucket.length;
  }
  insert(key, value) {
    let bucketToInsertred = this.hash(key);
    if (!this.bucket[bucketToInsertred]) {
      this.bucket[bucketToInsertred] = new HashNode(key, value);
      /**
       * this else if is for checking first node of the LinkedList
       * as we will be missing it in "else" part because in "else" part's while loop we have currentNode.next unlike currentNode in LinkedList
       * impplementation because we have to add the new HashNode
       */
    } else if (this.bucket[bucketToInsertred].key === key) {
      this.bucket[bucketToInsertred].value = value;
    } else {
      let currentNode = this.bucket[bucketToInsertred];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }
  get(key) {
    let bucketToSearch = this.hash(key);
    let currentNode = this.bucket[bucketToSearch];
    if (!currentNode) {
      return null;
    } else {
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return null;
    }
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    let bucket = total % this.numOfBuckets;
    return bucket;
  }
  getAll() {
    let allNodes = [];
    for (let i = 0; i < this.numOfBuckets; i++) {
      let currentNode = this.bucket[i];
      if (currentNode) {
        while (currentNode) {
          allNodes.push(currentNode);
          currentNode = currentNode.next;
        }
      }
    }
    return allNodes;
  }
}

var myHashTable = new HashTable(30);

myHashTable.insert("Dean", "dean@gmail.com");
myHashTable.insert("Megan", "megan@gmail.com");
myHashTable.insert("Dane", "dane@yahoo.com");
myHashTable.insert("Dean", "deanmachine@gmail.com");
myHashTable.insert("Megan", "megansmith@gmail.com");
myHashTable.insert("Dane", "dane1010@outlook.com");

console.log(myHashTable.getAll());
