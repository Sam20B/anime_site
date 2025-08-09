import random

print("Number guessing game")
def randomNum():
    x = int(input("Enter a number(1-100): "))
    comp = random.randint(1, 100)
    if x == comp:
        print("Bingo!")
    else:
        print("No match")
        
randomNum()
