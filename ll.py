class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
def myTraversal(head):
    currentNode = head
    while currentNode:
        print(currentNode.data, end='-> ')
        currentNode = currentNode.next
    print("Null")
        
        
Node1 = Node(5)
Node2 = Node(10)
Node3 = Node(3)
Node4 = Node(8)
Node5 = Node(3)

Node1.next = Node2
Node2.next = Node3
Node3.next = Node4
Node4.next = Node5

myTraversal(Node1)