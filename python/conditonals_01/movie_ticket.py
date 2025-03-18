# Problem: Movie tickets are priced based on age: $12 for adults (18 and over), $8 for children. Everyone gets a $2 discount on Wednesday.

# age = int(input('Please enter a age: '))
# price = 12
# day = input("Enter a day: ") 

# if age < 18 :
#     price = price - 4
#     if day=="Wednesday":
#         print('Ticket price is $', price - 2)
#     else:
#         print('Ticket price is $', price)
# else:
#     if day=="Wednesday":
#         print('Ticket price is $', price - 2)
#     else:
#         print('Ticket price is $', price)

age = int(input("Please enter a age: "))
day = input("Enter a day : ")

price = 12 if age > 17 else 8

if day=="wednesday" or day=="wednesday":
    price-=2
   

print("Price for the ticket is $",price)