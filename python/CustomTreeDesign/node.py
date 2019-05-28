"""
1. Break/return from the recursion
2. Search element in a Tree
"""

class Node(object):
    def __init__(self, data):
        id, price, name = self.parseNodeData(data)
        self.id = int(id)
        self.price = int(price)
        self.name = name
        self.parent = None
        self.children = []
    def __repr__(self):
        return 'Name - {0}'.format(self.name)
    def addNodeToTree(self, newNode):
        newNode.parent = self
        self.children.append(newNode)
    def addNodesToTree(self, newNodes):
        for n in newNodes:
            n.parent = self
        self.children.extend(newNodes)
    def printTreeFromNode(self, indenter):
        print(indenter+self.name)   
        for each in self.children:
            each.printTreeFromNode(indenter+indenter)
    def deleteNodeOrSubTree(self, idToBeDeleted):
        if (self.id == idToBeDeleted):
            self.parent.children.remove(self)
        else:
            for each in self.children:
                each.deleteNodeOrSubTree(idToBeDeleted)
    def deleteNodeOrSubTree_v1(self, idToBeDeleted):
        if (self.id == idToBeDeleted):
            self.parent.children.remove(self)
        elif (len(self.children) != 0):
            for each in self.children:
                each.deleteNodeOrSubTree(idToBeDeleted)
        else:
            print('Product with ID - {0} not found'.format(idToBeDeleted))
            return False
    def checkNodeDiscount(self, id, discount):
        if (self.id == id):
            if (self.price > discount):
                print('Discount applied on ID - {}'.format(self.id))
            else:
                print('Discount cannot be applied on ID - {}'.format(self.id))
        else:
            for each in self.children:
                each.checkNodeDiscount(id, discount)
    def searchNodeInTreeOrSubTree(self, idToBeSearched):
        if (self.id == idToBeSearched):
            print('Node ID - {} found'.format(self.id))
        else:
            for each in self.children:
                each.searchNodeInTreeOrSubTree(idToBeSearched)
    @staticmethod
    def parseNodeData(data):
        dataArr = data.split(" ")
        return dataArr[0],dataArr[1],dataArr[2]