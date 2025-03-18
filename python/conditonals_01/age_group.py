#  Classify a person's age group: Child (< 13), Teenager (13-19), Adult (20-59), Senior (60+).

def ageClasifier () :
    age = int(input('Please enter a age '))
    if age < 13:
        print('Child age is ', age)
    elif age < 20:
        print('Teenager age is ', age)
    elif age < 60:
        print('Adult age is ', age)
    else:
        print('Senior age is ', age)

ageClasifier()