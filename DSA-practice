class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
R = TreeNode(5)
A = TreeNode(3)
B = TreeNode(5)
C = TreeNode(2)
D = TreeNode(4)
E = TreeNode(5)
F = TreeNode(7)

R.left = A
R.right = B
A.left = C
A.right = D
B.left = E
B.right = F

def in_order(node):
    if not node:
        return
    
    in_order(node.left)
    print(node.data)
    in_order(node.right)

in_order(R)

def bst_search(node, target):
    if not node:
        return False
    
    if node.data == target:
        return True
    
    if target < node.data: return bst_search(node.left, target)
    else: return bst_search(node.right, target)
    
found = bst_search(R, 5)

if found:
    print("Node Found!")
else:
    print("Node Not Found")