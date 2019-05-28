class Stack(object):
    def __init__(self):
        self.data = []

    def add(self, data):
        self.data.append(data)

    def remove(self):
        if (len(self.data) == 0):
            return "Stack empty"
        return self.data.pop()

    def __repr__(self):
        finalData = ""
        if (len(self.data) == 0):
            return "Stack empty"
        for d in self.data:
            finalData += str(d)
            finalData += " -> "
        return finalData[:-4]

    def size(self):
        return len(self.data)

    def search(self, key):
        #Top is 1st position
        if key in self.data:
            return len(self.data) - self.data.index(key)
        return 0


if __name__ == "__main__":
    stack = Stack()
    stack.add(1)
    stack.add(2)
    stack.add(3)
    # stack.remove()
    print(stack)
    # stack.remove()
    # stack.remove()
    # print(stack.size())
    # print(stack.search(1))