class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

#Creates nodes
R = TreeNode(5)
A = TreeNode(3)
B = TreeNode(8)
C = TreeNode(2)
D = TreeNode(4)
E = TreeNode(7)
F = TreeNode(9)

#Assigns children
R.left = A
R.right = B

A.left = C
A.right = D

B.left = E
B.right = F

#Ouputs the tree in preorder format(Node,left,right)
def pre_order(node):
    if not node:
        return
    else:
        print(node.data)
        pre_order(node.left)
        pre_order(node.right)

pre_order(R)

#Function that searches for the target node in the tree
def search_tree(node, target):
    if not node:
        return None
    if node.data == target:
        return node
    if target < node.data:
        return search_tree(node.left, target)
    else:
        return search_tree(node.right, target)

found = search_tree(R, 7)

if found:
    print("Node found!")
else:
    print("Node not found")

#Insert a node in the tree
def insert_leaf(node, val):
    if not node:
        return TreeNode(val)
    else:
        if val < node.data:
            node.left = insert_leaf(node.left, val)
        elif val > node.data:
            node.right = insert_leaf(node.right, val)
    return node

insert_leaf(R, 10)

#Finding the minimum value
def minVal(node):
    current = node
    while current.left is not None:
        current = current.left
    return current

print(f"Min value: ", minVal(R).data)

#Deleting a node
