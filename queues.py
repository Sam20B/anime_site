queue = []

queue.append('Jay')
queue.append('Jess')
queue.append('Jonte')
print("Queue: ",queue)

#First element in the queue
firstElement = queue[0]
print("First: ",firstElement)

#Dequeue (remove the first item in the queue)
removedElement = queue.pop(0)
print("Removed: ",removedElement)

print("After removing: ",queue)

#Check if queue is empty
isEmpty = not bool(queue)
print("Empty: ",isEmpty)

#Length of queue
size = len(queue)
print("Size: ",size)