import random

choices = ['rock','paper','scissors']
comp = random.choice(choices)
player = input(f"Enter your choice(rock,paper or scissors): ")
print("comp's choice: " + comp)

if comp == player:
    print("It's a tie!")
    
elif comp == 'rock' and player == 'paper' or \
    comp == 'paper' and player == 'scissors' or \
    comp == 'scissors' and player == 'rock':
        print("You won!")
        
else:
    print("You lost!")