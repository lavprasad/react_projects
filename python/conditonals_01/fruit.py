#  Determine if a fruit is ripe, overripe, or unripe based on its color. (e.g., Banana: Green - Unripe, Yellow - Ripe, Brown - Overripe)

fruits = input("eg. Mango : ")  
color = input("Please specify the colour  'Green'/'Yellow'/'Brown': ")

if fruits != "":
    if color == "Green":
        print(fruits, "is Unripe")
    elif color == "Yellow":
        print(fruits, "is ripe")
    elif color == "Brown":
        print(fruits, "is Overripe")
else:
    print("Sorry you have not provided any fruit or fruit is empty.")