class vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def move(self):
        print("move!")

class car(vehicle):
    pass

class boat(vehicle):
    def move(self):
        print("sail!")

class plane(vehicle):
    def move(self):
        print("fly!")

car1 = car('toyota','supra')
boat1 = boat('yatch','sr56')
plane1 = plane('boeing','gy67')

for x in (car1, boat1, plane1):
    print(x.brand)
    print(x.model)
    x.move()