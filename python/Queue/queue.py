class Queue(object):
    def __init__(self):
        self.data = []

    def enqueue(self, data):
        self.data.append(data)

    def dequeue(self):
        if (len(self.data) != 0):
            del self.data[0]
            return self.data[0]
        else:
            print("Queue empty")
            return -1

    def frontElement(self):
        return self.data[0]

    def rearElement(self):
        return self.data[-1]


if __name__ == "__main__":
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(2)
    q.dequeue()
    q.enqueue(3)
    print(q.data)
    print(q.frontElement())
    print(q.rearElement())