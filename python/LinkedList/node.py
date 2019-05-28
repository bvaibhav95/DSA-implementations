class Node(object):
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None   

    def __repr__(self):
        return 'Data - {0}'.format(self.data)

    def traverseTheList(self):
        node = self
        while(node.next != None):
            print(node.data) 
            node = node.next
        print(node.data)
    
    def searchNode(self, key):
        start = self
        while (start.next != None):
            if (start.next.data == key):
                return "YES"
            start = start.next
        if (start.data == key):
            return "YES"
        return "NO"
    
    def insertNodeInEnd(self, node):
        start = self
        while (start.next != None):
            start = start.next
        start.next = node

    def insertNodeAtStart(self, node):
        node.next = self.next
        self.next = node

    def insertBeforeNode(self, key, newNode):
        start = self
        while (start.next != None):
            if (start.next.data == key):
                newNode.next = start.next
                start.next = newNode
                return
            start = start.next
        print("Key not found")

    def insertAfterNode(self, key, newNode):
        start = self
        while (start.next != None):
            if (start.next.data == key):
                newNode.next = start.next.next
                start.next.next = newNode
                return
            start = start.next
        print("Key not found")

    @staticmethod
    def dataParser(self):
        pass