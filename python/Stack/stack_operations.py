from stack import Stack


class Queue(object):
    def __init__(self):
        self.stack1 = Stack()
        self.stack2 = Stack()

    def enqueue(self, data):
        self.stack1.add(data)

    def dequeue(self):
        if (self.stack1.size() != 0):
            while (self.stack1.size() != 0):
                self.stack2.add(self.stack1.remove())
            poped = self.stack2.remove()
            while (self.stack2.size() != 0):
                self.stack1.add(self.stack2.remove())
            return poped
        else:
            print("Queue empty")
            return -1


if __name__ == "__main__":
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    print(queue.dequeue())
    queue.enqueue(3)
    queue.enqueue(1)
    print(queue.dequeue())
    queue.enqueue(2)
    print(queue.dequeue())
    print(queue.dequeue())
    print(queue.dequeue())
    print(queue.stack1.size())
    print(queue.stack2.size())
    print(queue.dequeue())